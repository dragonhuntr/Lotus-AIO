function tactics(taskid) {
    var profile = profiles[tasks[taskid].profile_id];
    var monitorinput = tasks[taskid].monitorinput;
    var prefsize = tasks[taskid].size;
    document.getElementById(taskid +"status").className = '';
    document.getElementById(taskid +"status").classList.add('text-warning');
    document.getElementById(taskid +'status').innerHTML = "Starting";
    var request = require('request');
    var j = request.jar();
    var request = request.defaults({jar:j});
    options = {
        url: monitorinput,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
        }
      };
    document.getElementById(taskid +"status").className = '';
    document.getElementById(taskid +"status").classList.add('text-warning');
    document.getElementById(taskid +'status').innerHTML = "Getting Product";
    request(options, function (error, response, body) {
        document.getElementById(taskid +"status").className = '';
        document.getElementById(taskid +"status").classList.add('text-success');
        document.getElementById(taskid +'status').innerHTML = "Product Found";
        var parser = new DOMParser();
        var body = parser.parseFromString(body, 'text/html');
        var productid = body.getElementsByName('productid')[0].value;
        var productbst = body.getElementById('product-bst').value;
        var color = body.getElementsByClassName('product-radio js-product-picker-color-radio')[0].value;
        var sizes = [];
        
        var sizerun = body.getElementsByClassName('product-picker-size-label');
        for(i = 0;i < sizerun.length; i++)
        {
            sizes.push(sizerun[i].textContent.trim())
        }
        if (sizes.includes(prefsize)){
            document.getElementById(taskid +"status").className = '';
            document.getElementById(taskid +"status").classList.add('text-success');
            document.getElementById(taskid +'status').innerHTML = "Size Available";
        } else {
            prefsize = sizes[Math.floor(Math.random() * sizes.length)];
            document.getElementById(taskid +"status").className = '';
            document.getElementById(taskid +"status").classList.add('text-warning');
            document.getElementById(taskid +'status').innerHTML = "Picking New Size";
            document.getElementById(taskid +'size').innerHTML = prefsize;
        }
        document.getElementById(taskid +"status").className = '';
        document.getElementById(taskid +"status").classList.add('text-warning');
        document.getElementById(taskid +'status').innerHTML = "Adding To Cart";
        options = {
            url: 'https://www.tactics.com/cart/additem',
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
            },
            form: {'color':color,
            'size':prefsize,
            'productid':productid,
            'bst':productbst,
            'addtocart':'1'}
          };
        request.post(options, function (error, response, body) {
            options = {
                url: 'https://www.tactics.com/cart',
                headers: {
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
                },
              };
            request.get(options, function (error, response, body) {
                    if (body.includes("checkout-button")) {
                        document.getElementById(taskid +"status").className = '';
                        document.getElementById(taskid +"status").classList.add('text-success');
                        document.getElementById(taskid +'status').innerHTML = "Added To Cart";
                        options = {
                            url: 'https://www.tactics.com/checkout',
                            headers: {
                              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
                            },
                            followAllRedirects: true};
                        request.get(options, function (error, response, body) {
                            if (body.includes("Submit Order")) {
                                var parser = new DOMParser();
                                var body = parser.parseFromString(body, 'text/html');
                                if (profile.country == "USA" || profile.country.includes("United States")){
                                  var country = "United States"
                                } else {
                                  var country = profile.country
                                }
                                options = {
                                    url: 'https://www.tactics.com/checkout',
                                    headers: {
                                      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
                                    },
                                    followAllRedirects: true,
                                    form: {
                                        'ShipAddress.FirstName': profile.firstName,
                                        'ShipAddress.LastName': profile.lastName,
                                        'ShipAddress.Company': '',
                                        'ShipAddress.StreetAddress': profile.address,
                                        'ShipAddress.StreetAddress2': profile.address2,
                                        'ShipAddress.City': profile.city,
                                        'ShipAddress.State': profile.state,
                                        'ShipAddress.Zip': profile.zip,
                                        'ShipAddress.Country': profile.country,
                                        'ShipAddress.Phone': profile.phone,
                                        'BillingIsDifferent': 'false',
                                        'BillAddress.FirstName': profile.firstName,
                                        'BillAddress.LastName': profile.lastName,
                                        'BillAddress.Company': '',
                                        'BillAddress.StreetAddress': profile.address,
                                        'BillAddress.StreetAddress2': profile.address2,
                                        'BillAddress.City': profile.city,
                                        'BillAddress.State': profile.state,
                                        'BillAddress.Zip': profile.zip,
                                        'BillAddress.Country': country,
                                        'BillAddress.Phone': profile.phone,
                                        'CartShippingType.ID': body.getElementsByName('CartShippingType.ID')[0].value,
                                        'IsGift': 'false',
                                        'GiftMessage': '',
                                        'Pay.CardNumber': profile.cnb,
                                        'Pay.ExpirationMonth': profile.month,
                                        'Pay.ExpirationYear': profile.year,
                                        'Pay.SecurityCode': profile.cvv,
                                        'EmailAddress': profile.email,
                                }};
                                document.getElementById(taskid +"status").className = '';
                                document.getElementById(taskid +"status").classList.add('text-warning');
                                document.getElementById(taskid +'status').innerHTML = "Submitting Order";
                                request.post(options, function (error, response, body){
                                    var parser = new DOMParser();
                                    var body = parser.parseFromString(body, 'text/html');
                                    var vsummary = body.getElementById('vsummary');
                                    var vsumul = vsummary.getElementsByTagName('ul')[0].getElementsByTagName('li');
                                    for(i = 0;i < vsumul.length; i++){
                                        document.getElementById(taskid +"status").className = '';
                                        document.getElementById(taskid +"status").classList.add('text-danger');
                                        document.getElementById(taskid +'status').innerHTML = 'Payment Declined'
                                    }
                                });
                            }
                        });     
                    }
            });
        });
    });
}