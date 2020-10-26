function ubiq(taskid) {
    var profile = profiles[tasks[taskid].profile_id];
    var monitorinput = tasks[taskid].monitorinput;
    var prefsize = tasks[taskid].size;
    document.getElementById(taskid +"status").className = '';
    document.getElementById(taskid +"status").classList.add('text-warning');
    document.getElementById(taskid +'status').innerHTML = 'Starting';
    var request = require('request');
    var j = request.jar();
    var request = request.defaults({jar:j});
    options = {
        url: monitorinput,
        headers: {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'max-age=0',
            'dnt': '1',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'}
      };
    request.get(options, function (error, response, body) {
        document.getElementById(taskid +"status").className = '';
        document.getElementById(taskid +"status").classList.add('text-success');
        document.getElementById(taskid +'status').innerHTML = 'Found Product';
        var parser = new DOMParser();
        var body = parser.parseFromString(body, 'text/html');

        var form = body.querySelector('div.product-essential')
        var all_scripts = body.getElementsByTagName('script')
        var sizes = {};
        for(i = 0;i < all_scripts.length; i++)
        {
            if (all_scripts[i].textContent.includes("spConfig = ")){
                var scriptNum = i;
            }
        }
        sizeAvailable = false;
        attr = all_scripts[scriptNum].textContent.split("Product.Config(")[1].split(');')[0];
        attr = JSON.parse(attr);
        for(i = 0;i < attr['attributes']['174']['options'].length; i++)
        {
            if (attr['attributes']['174']['options'][i]['label'].toLowerCase() == prefsize.toString().toLowerCase()){
                document.getElementById(taskid +"status").className = '';
                document.getElementById(taskid +"status").classList.add('text-success');
                document.getElementById(taskid +'status').innerHTML = 'Size Available';
                var newsize = attr['attributes']['174']['options'][i]['id'].toLowerCase();
                sizeAvailable = true;
            }
            sizes[attr['attributes']['174']['options'][i]['label']] = attr['attributes']['174']['options'][i]['id']
        }
        if (sizeAvailable == false){
            var keys = Object.keys(sizes);
            var USnewsize = keys[ keys.length * Math.random() << 0];
            var newsize = sizes[keys[ keys.length * Math.random() << 0]]
            document.getElementById(taskid +"status").className = '';
            document.getElementById(taskid +"status").classList.add('text-warning');
            document.getElementById(taskid +'status').innerHTML = 'Picking New Size';
            document.getElementById(taskid +'size').innerHTML = USnewsize;
        }
        newsize = parseInt(newsize, 10)
        atclink = form.querySelector('form')['action'];
        formkey = atclink.split('/')[11]
        product = atclink.split('/')[9]

        options = {
            url: atclink,
            headers: {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'accept-language': 'en-US,en;q=0.9',
                'cache-control': 'max-age=0',
                'dnt': '1',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'none',
                'sec-fetch-user': '?1',
                'upgrade-insecure-requests': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'        },
            followAllRedirects: true,
            form: {
                'form_key': formkey,
                'product': product,
                'related_product': '',
                'super_attribute[174]': newsize,
                'qty': 1
            }
        };
        request.post(options, function (error, response, body){
            options = {
                url: 'https://www.ubiqlife.com/checkout/onepage/saveMethod/',
                headers: {
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                    'accept-language': 'en-US,en;q=0.9',
                    'cache-control': 'max-age=0',
                    'dnt': '1',
                    'sec-fetch-dest': 'document',
                    'sec-fetch-mode': 'navigate',
                    'sec-fetch-site': 'none',
                    'sec-fetch-user': '?1',
                    'upgrade-insecure-requests': '1',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'        },
                followAllRedirects: true,
            };
            request.get(options, function (error, response, body){
                document.getElementById(taskid +"status").className = '';
                document.getElementById(taskid +"status").classList.add('text-warning');
                document.getElementById(taskid +'status').innerHTML = 'Preparing Checkout';
                options = {
                    url: 'https://www.ubiqlife.com/checkout/onepage/saveMethod/',
                    headers: {
                        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                        'accept-language': 'en-US,en;q=0.9',
                        'cache-control': 'max-age=0',
                        'dnt': '1',
                        'sec-fetch-dest': 'document',
                        'sec-fetch-mode': 'navigate',
                        'sec-fetch-site': 'none',
                        'sec-fetch-user': '?1',
                        'upgrade-insecure-requests': '1',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'        },
                    followAllRedirects: true,
                    form: {
                        'method':'guest'
                    }
                };

                request.post(options, function (error, response, body){
                    document.getElementById(taskid +"status").className = '';
                    document.getElementById(taskid +"status").classList.add('text-success');
                    document.getElementById(taskid +'status').innerHTML = 'Checkout Loaded';
                    if (profile.country == "USA" || profile.country.includes("United States")){
                        var country = "US"
                      } else {
                        var country = profile.country
                      }
                    options = {
                        url: 'https://www.ubiqlife.com/checkout/process/verifyBilling/',
                        headers: {
                            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                            'accept-language': 'en-US,en;q=0.9',
                            'cache-control': 'max-age=0',
                            'dnt': '1',
                            'sec-fetch-dest': 'document',
                            'sec-fetch-mode': 'navigate',
                            'sec-fetch-site': 'none',
                            'sec-fetch-user': '?1',
                            'upgrade-insecure-requests': '1',
                            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'        },
                        followAllRedirects: true,
                        form: {
                            'billing[address_id]': '',
                            'billing[firstname]': profile.firstName,
                            'billing[middlename]': '',
                            'billing[lastname]': profile.lastName,
                            'billing[email]': profile.email,
                            'billing[street][]': profile.address,
                            'billing[city]': profile.city,
                            'billing[region_id]': '23',
                            'billing[region]': '',
                            'billing[postcode]': profile.zip,
                            'billing[country_id]': country,
                            'billing[telephone]': profile.phone,
                            'billing[customer_password]': '',
                            'billing[confirm_password]':'' ,
                            'billing[save_in_address_book]': '1',
                            'billing[use_for_shipping]': '1'
                        }
                    };
                    request.post(options, function (error, response, body){
                        document.getElementById(taskid +"status").className = '';
                        document.getElementById(taskid +"status").classList.add('text-success');
                        document.getElementById(taskid +'status').innerHTML = 'Billing Verified';
                        options = {
                            url: 'https://www.ubiqlife.com/checkout/onepage/saveBilling/',
                            headers: {
                                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                                'accept-language': 'en-US,en;q=0.9',
                                'cache-control': 'max-age=0',
                                'dnt': '1',
                                'sec-fetch-dest': 'document',
                                'sec-fetch-mode': 'navigate',
                                'sec-fetch-site': 'none',
                                'sec-fetch-user': '?1',
                                'upgrade-insecure-requests': '1',
                                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'        },
                            followAllRedirects: true,
                            form: {
                                'billing[address_id]': '',
                                'billing[firstname]': profile.firstName,
                                'billing[middlename]': '',
                                'billing[lastname]': profile.lastName,
                                'billing[email]': profile.email,
                                'billing[street][]': profile.address,
                                'billing[city]': profile.city,
                                'billing[region_id]': '23',
                                'billing[region]': '',
                                'billing[postcode]': profile.zip,
                                'billing[country_id]': 'US',
                                'billing[telephone]': profile.phone,
                                'billing[customer_password]': '',
                                'billing[confirm_password]':'' ,
                                'billing[save_in_address_book]': '1',
                                'billing[use_for_shipping]': '1'
                            }
                        };
                        request.post(options, function (error, response, body){
                            document.getElementById(taskid +"status").className = '';
                            document.getElementById(taskid +"status").classList.add('text-success');
                            document.getElementById(taskid +'status').innerHTML = 'Saved Billing';
                            options = {
                                url: 'https://www.ubiqlife.com/checkout/onepage/saveShippingMethod/',
                                headers: {
                                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                                    'accept-language': 'en-US,en;q=0.9',
                                    'cache-control': 'max-age=0',
                                    'dnt': '1',
                                    'sec-fetch-dest': 'document',
                                    'sec-fetch-mode': 'navigate',
                                    'sec-fetch-site': 'none',
                                    'sec-fetch-user': '?1',
                                    'upgrade-insecure-requests': '1',
                                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'        },
                                followAllRedirects: true,
                                form: {
                                    'shipping_method': 'matrixrate_matrixrate_10',
                                    'giftoptions[1548608][type]': 'quote',
                                    'form_key': formkey
                                }
                            };
                            request.post(options, function (error, response, body){
                                document.getElementById(taskid +"status").className = '';
                                document.getElementById(taskid +"status").classList.add('text-success');
                                document.getElementById(taskid +'status').innerHTML = 'Selected Shipping Method';
                                request.post(options, function (error, response, body){
                                    document.getElementById(taskid +"status").className = '';
                                    document.getElementById(taskid +"status").classList.add('text-success');
                                    document.getElementById(taskid +'status').innerHTML = 'Shipping/Billing Completed';
                                    
                                    options = {
                                        url: 'https://www.ubiqlife.com/checkout/onepage/savePayment/',
                                        headers: {
                                            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                                            'accept-language': 'en-US,en;q=0.9',
                                            'cache-control': 'max-age=0',
                                            'dnt': '1',
                                            'sec-fetch-dest': 'document',
                                            'sec-fetch-mode': 'navigate',
                                            'sec-fetch-site': 'none',
                                            'sec-fetch-user': '?1',
                                            'upgrade-insecure-requests': '1',
                                            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'        },
                                        followAllRedirects: true,
                                        form: {
                                            'payment[method]': 'firstdataglobalgateway',
                                            'payment[use_transarmor]': '-1',
                                            'payment[cc_type]': 'VI',
                                            'payment[cc_number]': profile.cnb,
                                            'payment[cc_exp_month]': profile.month,
                                            'payment[cc_exp_year]': profile.year,
                                            'payment[cc_cid]': profile.cvv,
                                            'form_key': formkey
                                        }
                                    };
                                    request.post(options, function (error, response, body){
                                        document.getElementById(taskid +"status").className = '';
                                        document.getElementById(taskid +"status").classList.add('text-success');
                                        document.getElementById(taskid +'status').innerHTML = 'Saved Payment';
                                        options = {
                                            url: 'https://www.ubiqlife.com/checkout/onepage/saveOrder/',
                                            headers: {
                                                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                                                'accept-language': 'en-US,en;q=0.9',
                                                'cache-control': 'max-age=0',
                                                'dnt': '1',
                                                'sec-fetch-dest': 'document',
                                                'sec-fetch-mode': 'navigate',
                                                'sec-fetch-site': 'none',
                                                'sec-fetch-user': '?1',
                                                'upgrade-insecure-requests': '1',
                                                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'        },
                                            followAllRedirects: true,
                                            form: {
                                                'payment[method]': 'firstdataglobalgateway',
                                                'payment[use_transarmor]': '-1',
                                                'payment[cc_type]': 'VI',
                                                'payment[cc_number]': profile.cnb,
                                                'payment[cc_exp_month]': profile.month,
                                                'payment[cc_exp_year]': profile.year,
                                                'payment[cc_cid]': profile.cvv,
                                                'form_key': formkey
                                            }
                                        };
                                        request.post(options, function (error, response, body){
                                            console.log(body)
                                            resp = JSON.parse(body)
                                            if (resp['success'] == false || resp['error'] == true){
                                                document.getElementById(taskid +"status").className = '';
                                                document.getElementById(taskid +"status").classList.add('text-danger');
                                                document.getElementById(taskid +'status').innerHTML = 'Payment Declined';
                                            } else {
                                                document.getElementById(taskid +"status").className = '';
                                                document.getElementById(taskid +"status").classList.add('text-warning');
                                                document.getElementById(taskid +'status').innerHTML = 'Checkout Success';
                                            }
                                            
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        // var sizeslist = {};
        // var sizeFound = false;
        // for(i = 0;i < sizes.length; i++)
        // {
        //     if (prefsize.toLowerCase() == sizes[i]['title'].toLowerCase()){
        //         document.getElementById(taskid +"status").className = '';
        //         document.getElementById(taskid +"status").classList.add('text-success');
        //         document.getElementById(taskid +'status').innerHTML = 'Found Size';
        //         scanurl = sizes[i]['href'];
        //         sizeFound = true;
        //     }
        //     sizeslist[sizes[i]['title'].toLowerCase()] = sizes[i]['href'];
        // }
        // if (sizeFound == false) {
        //     var keys = Object.keys(sizeslist);
        //     var newsize = keys[ keys.length * Math.random() << 0];
        //     var scanurl = sizeslist[newsize]
        //     document.getElementById(taskid +"status").className = '';
        //     document.getElementById(taskid +"status").classList.add('text-warning');
        //     document.getElementById(taskid +'status').innerHTML = 'Picking New Size';
        //     document.getElementById(taskid +'size').innerHTML = newsize.toUpperCase();
        // }

    });
}