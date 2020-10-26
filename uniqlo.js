function uniqlo(taskid) {
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
        var sizeselection = body.getElementsByClassName('swatches size')[0];
        var sizes = sizeselection.getElementsByTagName('a');
        var sizeslist = {};
        var sizeFound = false;
        for(i = 0;i < sizes.length; i++)
        {
            if (prefsize.toLowerCase() == sizes[i]['title'].toLowerCase()){
                document.getElementById(taskid +"status").className = '';
                document.getElementById(taskid +"status").classList.add('text-success');
                document.getElementById(taskid +'status').innerHTML = 'Found Size';
                scanurl = sizes[i]['href'];
                sizeFound = true;
            }
            sizeslist[sizes[i]['title'].toLowerCase()] = sizes[i]['href'];
        }
        if (sizeFound == false) {
            var keys = Object.keys(sizeslist);
            var newsize = keys[ keys.length * Math.random() << 0];
            var scanurl = sizeslist[newsize]
            document.getElementById(taskid +"status").className = '';
            document.getElementById(taskid +"status").classList.add('text-warning');
            document.getElementById(taskid +'status').innerHTML = 'Picking New Size';
            document.getElementById(taskid +'size').innerHTML = newsize.toUpperCase();
        }

        options = {
            url: scanurl,
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
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'        }
          };
        request.get(options, function (error, response, body) {
            var parser = new DOMParser();
            var body = parser.parseFromString(body, 'text/html');
            var pid = body.querySelectorAll('span.breadcrumb-productid')[0].textContent;
            var name = body.querySelectorAll('span.breadcrumb-element')[0].textContent;
            options = {
                url: 'https://www.uniqlo.com/on/demandware.store/Sites-UniqloUS-Site/default/Cart-AddProduct?format=ajax',
                headers: {
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
                },
                followAllRedirects: true,
                form: {
                    'cartAction': 'add',
                    'pid': pid.toString(),
                    'name': name.toString(),
                    'test': '',
                    'alterationProductCheck': '',
                    'alterationProductPrice': '',
                    'alterationProductName': '',
                    'alterationProductLength': '',
                    'alterationProductSleeveLength':'' ,
                    'Quantity': '1'
            }};
            document.getElementById(taskid +"status").className = '';
            document.getElementById(taskid +"status").classList.add('text-warning');
            document.getElementById(taskid +'status').innerHTML = 'Adding To Cart';
            request.post(options, function (error, response, body){
                if (body.includes("Checkout")){
                    document.getElementById(taskid +"status").className = '';
                    document.getElementById(taskid +"status").classList.add('text-success');
                    document.getElementById(taskid +'status').innerHTML = 'Added To Cart';
                    options = {
                        url: 'https://www.uniqlo.com/us/en/shipping-checkout/',
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
                            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'        }
                      };
                    request.get(options, function (error, response, body){
                        var parser = new DOMParser();
                        var body = parser.parseFromString(body, 'text/html');
                        var securekey = body.getElementsByName('dwfrm_singleshipping_securekey')[0].value;
                        if (securekey) {
                            if (profile.country == "USA" || profile.country.includes("United States")){
                                var country = "US"
                              } else {
                                var country = profile.country
                              }
                            userstate = abbrState(profile.state.toLowerCase(), 'abbr')
                            options = {
                                url: 'https://www.uniqlo.com/us/en/billing-checkout/',
                                headers: {
                                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
                                },
                                followAllRedirects: true,
                                form: {
                                    'isOWS': 'false',
                                    'isBillingClick': 'false',
                                    'isshippingPayPal': 'null',
                                    'dwfrm_singleshipping_deliveryMethods_selectedDeliveryMethodID': 'homedelivery',
                                    'dwfrm_storelocator_postalCode': '',
                                    'zipCode': '',
                                    'dwfrm_singleshipping_shippingAddress_addressFields_firstName': profile.firstName, 
                                    'dwfrm_singleshipping_shippingAddress_addressFields_lastName': profile.lastName, 
                                    'dwfrm_singleshipping_shippingAddress_addressFields_address1': profile.address, 
                                    'dwfrm_singleshipping_shippingAddress_addressFields_address2': profile.address2,
                                    'dwfrm_singleshipping_shippingAddress_addressFields_country': country, 
                                    'dwfrm_singleshipping_shippingAddress_addressFields_states_state': userstate, 
                                    'dwfrm_singleshipping_shippingAddress_addressFields_city': profile.city, 
                                    'dwfrm_singleshipping_shippingAddress_addressFields_postal': profile.zip, 
                                    'dwfrm_singleshipping_shippingAddress_addressFields_phone': profile.phone, 
                                    'dwfrm_singleshipping_shippingAddress_useAsBillingAddress': 'true', 
                                    'dwfrm_singleshipping_shippingAddress_email_emailAddress': profile.email,
                                    'smallQuantity': '0',
                                    'mediumQuantity': '0',
                                    'largeQuantity': '0',
                                    'isCustAuthenticated': 'false',
                                    'poaddress': 'false',
                                    'dwfrm_singleshipping_shippingAddress_shippingMethodID': '001',
                                    'dwfrm_singleshipping_shippingAddress_create_password': '',
                                    'dwfrm_singleshipping_shippingAddress_create_passwordconfirm': '',
                                    'dwfrm_singleshipping_shippingAddress_save': 'Continue',
                                    'dwfrm_singleshipping_securekey': securekey.toString(),
                                    'bypassDAV': 'false',
                            }};
                            request.post(options, function (error, response, body){
                                var parser = new DOMParser();
                                var doc = parser.parseFromString(body, 'text/html');
                                var billingsecurekey = doc.getElementsByName('dwfrm_billing_securekey')[0].value;
                                if (body.includes('shipping address')){
                                    document.getElementById(taskid +"status").className = '';
                                    document.getElementById(taskid +"status").classList.add('text-success');
                                    document.getElementById(taskid +'status').innerHTML = 'Shipping Info Completed';
                                    options = {
                                        url: 'https://www.uniqlo.com/us/en/billing-form/',
                                        headers: {
                                          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
                                        },
                                        followAllRedirects: true,
                                        form: {
                                            'dwfrm_billing_save': 'true',
                                            'dwfrm_billing_billingAddress_useAsBillingAddress': 'true',
                                            'dwfrm_billing_billingAddress_addressFields_firstName': profile.firstName,
                                            'dwfrm_billing_billingAddress_addressFields_lastName': profile.lastName,
                                            'dwfrm_billing_billingAddress_addressFields_address1': profile.address,
                                            'dwfrm_billing_billingAddress_addressFields_address2': profile.address2,
                                            'dwfrm_billing_billingAddress_addressFields_country': country,
                                            'dwfrm_billing_billingAddress_addressFields_states_state': userstate,
                                            'dwfrm_billing_billingAddress_addressFields_otherstate': '',
                                            'dwfrm_billing_billingAddress_addressFields_city': profile.city,
                                            'dwfrm_billing_billingAddress_addressFields_postal': profile.zip,
                                            'dwfrm_billing_billingAddress_addressFields_phone': profile.phone,
                                            'dwfrm_billing_securekey': billingsecurekey.toString(),
                                            'isOWS': 'false',
                                            'dwfrm_billing_giftCertCode': '',
                                            'dwfrm_billing_giftCertPin': '',
                                            'dwfrm_billing_paymentMethods_selectedPaymentMethodID': 'CREDIT_CARD',
                                            'nosavepayment': 'flase',
                                            'dwfrm_billing_paymentMethods_creditCard_owner': profile.cardname,
                                            'dwfrm_billing_paymentMethods_creditCard_type': 'Visa',
                                            'dwfrm_billing_paymentMethods_creditCard_number_d0zdkhltdiru': profile.cnb,
                                            'dwfrm_billing_paymentMethods_creditCard_expiration_month': profile.month,
                                            'dwfrm_billing_paymentMethods_creditCard_expiration_year': profile.year,
                                            'dwfrm_billing_paymentMethods_creditCard_cvn_d0ngxxmnczke': profile.cvv,
                                            'dwfrm_billing_paymentMethods_bml_year': '',
                                            'dwfrm_billing_paymentMethods_bml_month': '',
                                            'dwfrm_billing_paymentMethods_bml_day': '',
                                            'dwfrm_billing_paymentMethods_bml_ssn': '',
                                            'dwfrm_billing_save': 'Continue',
                                            'bypassDAV': 'false',
                                            'isCustAuthenticated': 'false',
                                    }};
                                    request.post(options, function (error, response, body){
                                        var parser = new DOMParser();
                                        var doc = parser.parseFromString(body, 'text/html');
                                        var singlesecurekey = doc.getElementsByName('dwfrm_singleshipping_securekey')[0].value;
                                        if (body.toLowerCase().includes("place order")){
                                            document.getElementById(taskid +"status").className = '';
                                            document.getElementById(taskid +"status").classList.add('text-success');
                                            document.getElementById(taskid +'status').innerHTML = 'Payment Info Completed';
                                            options = {
                                                url: 'https://www.uniqlo.com/us/en/order-confirmation/',
                                                headers: {
                                                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
                                                },
                                                followAllRedirects: true,
                                                form: {
                                                    'dwfrm_singleshipping_securekey': singlesecurekey.toString(),
                                                    'isShippingSelected': 'false',
                                                    'meSelected': '',
                                                    'customeremailSelected': profile.email,
                                            }};
                                            request.post(options, function (error, response, body){
                                                if (body.includes('error-form')){
                                                    var parser = new DOMParser();
                                                    var body = parser.parseFromString(body, 'text/html');
                                                    var reason = body.querySelector('div.error-form').textContent;
                                                    document.getElementById(taskid +"status").className = '';
                                                    document.getElementById(taskid +"status").classList.add('text-danger');
                                                    document.getElementById(taskid +'status').innerHTML = 'Payment Declined';
                                                } else {
                                                    document.getElementById(taskid +"status").className = '';
                                                    document.getElementById(taskid +"status").classList.add('text-success');
                                                    document.getElementById(taskid +'status').innerHTML = 'Checkout Success';
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                } else {
                    document.getElementById(taskid +"status").className = '';
                    document.getElementById(taskid +"status").classList.add('text-danger');
                    document.getElementById(taskid +'status').innerHTML = 'Add To Cart Failed';
                }
            });
        });
    });
}

function abbrState(input, to){
    
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
}