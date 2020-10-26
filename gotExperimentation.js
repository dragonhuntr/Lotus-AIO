const got = require('got');
const {CookieJar} = require('tough-cookie');
const {promisify} = require('util');
const tunnel = require('tunnel');
 
async function colorSearch() {
    var parser = new DOMParser();
    var sku = document.getElementById("monitorinput").value;
    var colorinput = document.getElementById("hibbettcolor").value;
    if (sku.length == 5 && sku != '' && colorinput.length != 4){
        var start = new Date().getTime();
        document.getElementById('fetchLoading').style.display = '';
        var colorFound = false;
        var color = null;
        try {
            response = await got('https://www.hibbett.com/launch-calendar/?prefv1=120&start=0&sz=72&format=page-element', {
                headers : {
                    'accept': 'text/html, */*; q=0.01',
                    'accept-language': 'en-US,en;q=0.9',
                    'dnt': '1',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
                    'x-requested-with': 'XMLHttpRequest'
                }
            });
            if (response.body.includes('Page Not Found')){
                colorFound = false;
                color = "Page Not Found";
            } else if (response.body.includes('denied')){
                colorFound = false;
                color = "Banned";
            } else if (response.body.includes(sku)){
                var body = parser.parseFromString(response.body, 'text/html');
                body.querySelectorAll('a.name-link').forEach(e => {
                    if (e.href.includes('color') && e.href.includes(sku)){
                        color = e.href.match(/\w+(?=\&)/)[0]
                        document.getElementById("hibbettcolor").value = color;
                        document.getElementById('fetchLoading').style.display = 'none';
                        document.getElementById('fetchColorBtn').classList = '';
                        document.getElementById('fetchColorBtn').classList = 'btn btn-success btn-sm';
                        colorFound = true;
                    }
                });
            } else {
                colorFound = false;
                color = "Not available here";
            }
        } catch (error) {
            console.log(error.response.body);
            colorFound = false;
            color = "Something went wrong";
        }
        if (colorFound == false) {
            try {
                response = await got('https://www.hibbett.com/launch-calendar/?prefn1=dtLaunch&prefv1=-120&srule=launch-date-desc&start=0&sz=72&format=page-element', {
                    headers : {
                        'accept': 'text/html, */*; q=0.01',
                        'accept-language': 'en-US,en;q=0.9',
                        'dnt': '1',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
                        'x-requested-with': 'XMLHttpRequest'
                    }
                });
                if (response.body.includes('Page Not Found')){
                    colorFound = false;
                    color = "Page Not Found";
                } else if (response.body.includes('denied')){
                    colorFound = false;
                    color = "Banned";
                } else if (response.body.includes(sku)){
                    var body = parser.parseFromString(response.body, 'text/html');
                    body.querySelectorAll('a.name-link').forEach(e => {
                        if (e.href.includes('color') && e.href.includes(sku)){
                            color = e.href.match(/\w+(?=\&)/)[0]
                            document.getElementById("hibbettcolor").value = color;
                            document.getElementById('fetchLoading').style.display = 'none';
                            document.getElementById('fetchColorBtn').classList = '';
                            document.getElementById('fetchColorBtn').classList = 'btn btn-success btn-sm';
                            colorFound = true;
                        }
                    });
                } else {
                    colorFound = false;
                    color = "Not available here";
                }
            } catch (error) {
                console.log(error.response.body);
                colorFound = false;
                color = "Something went wrong";
            }
        }
        if (colorFound == false) {
            try {
                response = await got("https://www.hibbett.com/on/demandware.store/Sites-Hibbett-US-Site/default/Product-Variation?pid=" + sku.toString(), {
                    headers : {
                        'accept': 'text/html, */*; q=0.01',
                        'accept-language': 'en-US,en;q=0.9',
                        'dnt': '1',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
                        'x-requested-with': 'XMLHttpRequest'
                    }
                });
                console.log(response.body)
                if (response.body.includes('Page Not Found')){
                    colorFound = false;
                    color = "Page Not Found";
                } else if (response.body.includes('denied')){
                    colorFound = false;
                    color = "Banned";
                } else if (response.body.includes(sku)){
                    var body = parser.parseFromString(response.body, 'text/html');
                    body.querySelectorAll('a.swatchanchor').forEach(e => {
                        if (e.href.includes('color') && e.href.includes(sku)){
                            color = e.href.split('_color=')[1]
                            document.getElementById("hibbettcolor").value = color;
                            document.getElementById('fetchLoading').style.display = 'none';
                            document.getElementById('fetchColorBtn').classList = '';
                            document.getElementById('fetchColorBtn').classList = 'btn btn-success btn-sm';
                            colorFound = true;
                        }
                    });
                } else {
                    colorFound = false;
                    color = "Not available here";
                }
            } catch (error) {
                console.log(error.response.body);
                colorFound = false;
                color = "Something went wrong";
            }
        }
        if (colorFound == false){
            document.getElementById("hibbettcolor").value = 'Failed to fetch color';
            document.getElementById('fetchLoading').style.display = 'none';
            document.getElementById('fetchColorBtn').classList = '';
            document.getElementById('fetchColorBtn').classList = 'btn btn-danger btn-sm';
        }
        var end = new Date().getTime();
        var time = end - start;
    } else {
        document.getElementById("hibbettcolor").value = 'Please provide a proper SKU';
    }
};

async function hibbett(taskid){
    await changeStatus(taskid, "warning", "Initalizing");
    tasks[taskid].stopped = false;
    var start = new Date().getTime(),
        parser = new DOMParser(),
        profile = profiles[tasks[taskid].profile_id],
        monitorinput = tasks[taskid].monitorinput,
        colorid = tasks[taskid].colorid,
        convSize = tasks[taskid].size,
        prefsize = sizes[convSize],
        s = Braintree.create('MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAoUID6FPckCjF4YHm8x7pDfoM0YeDx2ZPfdaVs7neGJWHnwYVZpj6X+hg5r8hqazHmFjonN3/SA0CahnN+MLPr4E6cAdUF1eTQnzVfqNVq3lKxYk0twT4Yv7X4oQ2EHYmisFm1A97ujgRwQ5xsbYRHgACe8US1X5S3c7pJDLcM1Ssjr4R3x3/F2e5T7+pWlG/J+tvLRyTvyPuv21KR/ZePHExO1jQ+HYf3gMh1eZfdj2jAPnfPbUSORbOKZtFms8B8ojuGPiSOr5hmBt7gy4UyJDR6tlxhpodqEOpqTv2WfZ/dRoNukETa65eZ0jnmQKnIdXRsNMFUqEF5A4cNVrLhHujwxsOXm5vIeOOWmG/HM8wnltETOF7Fdjs/cXVOicM3d09xL3ePCLe671YjSSb7T7oo/cCI5nK1xzPkQX9q+Yb3OvhoFlF3Mebf94L8te9GCUqt7Dk5Ukrnfn+G53CwH4jeuln2/8lVbE3XFVYT342IGOHpJ+XNbRd9CUTqIH8ESsK0DFeVR3qVCq4zJfQJ9UAKy6tWOHmijIPhpOijWNVgh+HTKUxoloWs3PSWUkOBJUZX4EYUThphCCf8Cedvf2nY0XNwWAmb4FDele8H4/J/NaNFYm/hWK7+Y+DIrL37rLrIb/hjHL1UqaK8osbXQkfohnFVw/pDCuXNemDvJkCAwEAAQ=='),
        ePAN = s.encrypt(profile.cnb)
    await changeStatus(taskid, "success", "ePAN Generated");
    await sleep(Math.random() * (500 - 250) + 250);
    var rdfuuid = await sendPayload();
    var cook = "rdf-uuid=" + rdfuuid
    await changeStatus(taskid, "success", "RDF Generated");
    const cookieJar = new CookieJar();
    const setCookie = promisify(cookieJar.setCookie.bind(cookieJar));
    const url = 'www.hibbett.com';
    setCookie(cook, url);
    var request;

    var tunnelingAgent = tunnel.httpOverHttp({
            proxy: { // Proxy settings
            host: 'localhost', // Defaults to 'localhost'
            port: 80
        
            // Basic authorization for proxy server if necessary
            //proxyAuth: 'user:password',
            }
        });
    async function setProxy() {
        if (tasks[taskid].proxy_id != 'localhost'){
            [hostserver, portserver, user, password] = proxies[tasks[taskid].proxy_id].proxies[Math.floor(Math.random() * proxies[tasks[taskid].proxy_id].proxies.length)].split(':')
            var auth = user + ":" + password
            tunnelingAgent = tunnel.httpOverHttp({            
                proxy: { // Proxy settings
                host: hostserver, // Defaults to 'localhost'
                port: portserver, // Defaults to 80
            
                // Basic authorization for proxy server if necessary
                proxyAuth: auth,
                }
            });
        } else {
            tunnelingAgent = tunnel.httpOverHttp({
                proxy: { // Proxy settings
                  host: 'localhost', // Defaults to 'localhost'
                  port: 80
              
                  // Basic authorization for proxy server if necessary
                  //proxyAuth: 'user:password',
                }
              });
        }
    }

    await setProxy()

    var accesstoken = null;
    async function getNonce() {
        try {
            response = await got('https://www.hibbett.com/on/demandware.store/Sites-Hibbett-US-Site/default/Radial-GetNonce', {
                headers : {
                    'accept': 'text/html, */*; q=0.01',
                    'accept-language': 'en-US,en;q=0.9',
                    'dnt': '1',
                    'referer': 'https://www.hibbett.com/billing',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
                    'x-requested-with': 'XMLHttpRequest'
                }
            });
            console.log(response.body)
            try {
                if (!response.body.includes("denied")) {
                    accesstoken = JSON.parse(response.body)['nonce']
                    await changeStatus(taskid, "success", "Access Token Generated");
                } else {
                    if (tasks[taskid].proxy_id != 'localhost') {
                        await changeStatus(taskid, "warning", "Proxy Banned Retrying");
                        await setProxy()
                        await getNonce()
                    } else {
                        await changeStatus(taskid, "danger", "Proxy Banned");
                        tasks[taskid].stopped = true;
                    }
                }
                
            } catch (error) {
                console.log(error)
                await getNonce()
            }
        } catch (error) {
            console.log(error);
            await getNonce()
        }
    }
    await getNonce()

    var radialToken = null;
    async function getRadial() {
        try {
            response = await got.post("https://hostedpayments.radial.com/hosted-payments/pan/protect?access_token=" + accesstoken.toString(), {
                headers : {
                    'accept': 'text/html, */*; q=0.01',
                    'accept-language': 'en-US,en;q=0.9',
                    'dnt': '1',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
                    'x-requested-with': 'XMLHttpRequest'
                }, 
                json : {
                    "encryptedPaymentAccountNumber":ePAN 
                }
            });
            console.log(response.body)
            try {
                if (!response.body.includes("denied")) {
                    radialToken = JSON.parse(response.body)['account_token']
                    await changeStatus(taskid, "success", "Radial Token Generated");
                } else {
                    if (tasks[taskid].proxy_id != 'localhost') {
                        await changeStatus(taskid, "warning", "Proxy Banned Retrying");
                        await setProxy()
                        await sleep(tasks[taskid].errordelay)
                        await getRadial()
                    } else {
                        await changeStatus(taskid, "danger", "Proxy Banned");
                        tasks[taskid].stopped = true;
                    }
                }
                
            } catch (error) {
                console.log(error)
                await getRadial()
            }
        } catch (error) {
            console.log(error);
            await getRadial()
        }
    }
    await getRadial()
    
    await changeStatus(taskid, "warning", "Starting Task")
    var sku = null;
    var csrf_token = '';
    async function getSKU(){
        if (tasks[taskid].stopped == false){
            try {
                response = await got("https://www.hibbett.com/on/demandware.store/Sites-Hibbett-US-Site/default/Product-Variation?pid="+monitorinput+"&dwvar_"+monitorinput+"_size="+prefsize+"&dwvar_"+monitorinput+"_color="+colorid+"&Quantity=1&format=ajax&productlistid=undefined&pickupOption=ship", {
                    headers : {
                        'accept': 'text/html, */*; q=0.01',
                        'accept-language': 'en-US,en;q=0.9',
                        'dnt': '1',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
                        'x-requested-with': 'XMLHttpRequest'
                    },
                    cookieJar,
                    agent: {
                        http: tunnelingAgent
                    }
                });
                console.log(response.body)
                if (response.body.includes("Page Not Found")){
                    changeStatus(taskid, "danger", "404 Restarting Task")
                    await sleep(tasks[taskid].errordelay)
                    await getSKU()
                } 
                else if (response.body.includes('Launching Soon')){
                    changeStatus(taskid, "warning", "Launching Soon - Retrying")
                    await sleep(tasks[taskid].monitordelay)
                    changeStatus(taskid, "success", "Retrying")
                    await getSKU()
                } 
                else if (response.body.includes('denied')){
                    if (tasks[taskid].proxy_id != 'localhost') {
                        await changeStatus(taskid, "warning", "Proxy Banned Retrying");
                        await setProxy()
                        await sleep(tasks[taskid].errordelay)
                        await getSKU()
                    } else {
                        await changeStatus(taskid, "danger", "Proxy Banned");
                        tasks[taskid].stopped = true;
                    }
                }
                else {
                    sizesAvail = [];
                    var body = parser.parseFromString(response.body, 'text/html');
                    body.querySelectorAll('li.selectable').forEach(e => {
                        size = e.textContent.replace(/\n|\r/g, "").split('size')[1];
                        console.log(size)
                        sizesAvail.push(sizes[size])
                    });
                    sizesAvail.splice(0, 1);
                    console.log(sizesAvail)
                    if (sizesAvail.length > 0){
                        if (sizesAvail.indexOf(prefsize) >= 0){
                            changeStatus(taskid, "success", "Size Available")
                            sku = body.querySelector('span.sku-number').textContent;
                            csrf_token = body.getElementsByName('csrf_token')[0]['value'];
                        } else {
                            if (tasks[taskid].random == false){
                                changeStatus(taskid, "danger", "Size Unavailable - Stopping")
                                await sleep(3000)
                                tasks[taskid].stopped = true;
                            } else {
                                changeStatus(taskid, "success", "Picking Random Size")
                                prefsize = sizesAvail[Math.floor(Math.random() * sizesAvail.length)];
                                document.getElementById(taskid +'size').innerHTML = USsizes[prefsize];

                                async function getNewSKU(prefsize, monitorinput){
                                    try {
                                        response = await got("https://www.hibbett.com/on/demandware.store/Sites-Hibbett-US-Site/default/Product-Variation?pid="+monitorinput+"&dwvar_"+monitorinput+"_size="+prefsize+"&dwvar_"+monitorinput+"_color="+colorid+"&Quantity=1&format=ajax&productlistid=undefined&pickupOption=ship", {
                                            headers : {
                                                'accept': 'text/html, */*; q=0.01',
                                                'accept-language': 'en-US,en;q=0.9',
                                                'dnt': '1',
                                                'sec-fetch-dest': 'empty',
                                                'sec-fetch-mode': 'cors',
                                                'sec-fetch-site': 'same-origin',
                                                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
                                                'x-requested-with': 'XMLHttpRequest'
                                            },
                                            cookieJar,
                                            agent: {
                                                http: tunnelingAgent
                                            }
                                        });
                                        console.log(response.body)
                                        try {
                                            if (response.body.includes("Page Not Found")){
                                                changeStatus(taskid, "danger", "404 Restarting Task")
                                                await sleep(tasks[taskid].errordelay)
                                                await getNewSKU()
                                            } 
                                            else if (response.body.includes('Launching Soon')){
                                                changeStatus(taskid, "warning", "Launching Soon - Retrying")
                                                await sleep(tasks[taskid].monitordelay)
                                                await getNewSKU()
                                            } 
                                            else if (response.body.includes('denied')){
                                                if (tasks[taskid].proxy_id != 'localhost') {
                                                    changeStatus(taskid, "danger", "Proxy Banned - Retrying")
                                                    await sleep(tasks[taskid].errordelay)
                                                    await setProxy()
                                                    await getNewSKU()
                                                } else {
                                                    await changeStatus(taskid, "danger", "Proxy Banned");
                                                    tasks[taskid].stopped = true;
                                                }
                                            }
                                            else { 
                                                var body = parser.parseFromString(response.body, 'text/html');
                                                sku = body.querySelector('span.sku-number').textContent;
                                                csrf_token = body.getElementsByName('csrf_token')[0]['value'];
                                                changeStatus(taskid, "success", "Fetched SKU")
                                            }
                                        } catch (error) {
                                            console.log(error)
                                            await getNewSKU()
                                        }
                                    } catch (error) {
                                        console.log(error);
                                        await getNewSKU()
                                    }
                                }
                                
                                changeStatus(taskid, "warning", "Fetching New SKU")
                                await getNewSKU(prefsize, monitorinput);

                            }
                        }
                    } else {
                        changeStatus(taskid, "danger", "OOS - Stopping")
                        await sleep(3000)
                        tasks[taskid].stopped = true;
                    }
                }
            } catch (error) {
                console.log(error);
                await getNewSKU()
            }
        }
    }

    if (tasks[taskid].stopped == false){
        changeStatus(taskid, "warning", "Fetching SKU")
        await getSKU()
    }
    
    console.log(csrf_token)
    async function addToCart(){
        if (tasks[taskid].stopped == false) {
            try {
                response = await got.post("https://www.hibbett.com/on/demandware.store/Sites-Hibbett-US-Site/default/Cart-AddProduct?format=ajax", {
                    headers : {
                        'accept': 'text/html, */*; q=0.01',
                        'accept-language': 'en-US,en;q=0.9',
                        'dnt': '1',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
                        'x-requested-with': 'XMLHttpRequest'
                    },
                    form : {
                        'select-Quantity': '1',
                        'Quantity': '1',
                        'bopis-ropis-option': 'ship',
                        'cartAction': 'add',
                        'pid': sku,
                        'gtmData': '{"dimension5":"Online"}',
                        'csrf_token': csrf_token,
                    },
                    cookieJar,
                    agent: {
                        http: tunnelingAgent
                    }
                });
                console.log(response.body)
                var body = parser.parseFromString(response.body, 'text/html');
                if ((parseInt(body.querySelector('div.notification-title').textContent)) > 0){
                    changeStatus(taskid, "success", ("Added To Cart"))
                } else {
                    changeStatus(taskid, "danger", ("ATC Fail Retrying"))
                    console.log(response.body)
                    await sleep(tasks[taskid].errordelay)
                    await addToCart()
                }
            } catch (error) {
                changeStatus(taskid, "danger", ("ATC Fail Retrying"))
                await sleep(tasks[taskid].errordelay)
                console.log(response.body)
                await addToCart()
            }
        }
    }

    if (tasks[taskid].stopped == false) {
        changeStatus(taskid, "warning", "Adding To Cart")
        await addToCart()
    }
    

    async function completeShipping(){
        if (tasks[taskid].stopped == false) {
            try {
                userstate = abbrState(profile.state.toLowerCase(), 'abbr')
                if (profile.country == "USA" || profile.country.includes("United States")){
                    var country = "US"
                } else {
                var country = profile.country
                }
                response = await got.post("https://www.hibbett.com/billing", {
                    headers : {
                        'accept': 'text/html, */*; q=0.01',
                        'accept-language': 'en-US,en;q=0.9',
                        'dnt': '1',
                        'referer': 'https://www.hibbett.com/shipping',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
                        'x-requested-with': 'XMLHttpRequest'
                    },
                    cookieJar,
                    followRedirect: false,
                    form : {
                        'dwfrm_singleshipping_shippingAddress_addressFields_firstName': profile.firstName,
                        'dwfrm_singleshipping_shippingAddress_addressFields_lastName': profile.lastName,
                        'dwfrm_singleshipping_shippingAddress_addressFields_address1': profile.address,
                        'dwfrm_singleshipping_shippingAddress_addressFields_address2': profile.address2,
                        'dwfrm_singleshipping_shippingAddress_addressFields_city': profile.city,
                        'dwfrm_singleshipping_shippingAddress_addressFields_states_state': userstate,
                        'dwfrm_singleshipping_shippingAddress_addressFields_postal': profile.zip,
                        'dwfrm_singleshipping_shippingAddress_addressFields_country': country,
                        'dwfrm_singleshipping_shippingAddress_addressFields_phone': profile.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"),
                        'dwfrm_singleshipping_shippingAddress_addressFields_radialAVSValidated': 'true',
                        'dwfrm_singleshipping_shippingAddress_useAsBillingAddress': 'true',
                        'dwfrm_singleshipping_shippingAddress_email_emailAddress': profile.email,
                        'dwfrm_singleshipping_shippingAddress_shippingMethodID': 'ANY_GND',
                        'dwfrm_singleshipping_narvarPhone': '',
                        'dwfrm_singleshipping_narvarRequestType': 'POST',
                        'dwfrm_singleshipping_shippingAddress_save': 'Continue to Billing',
                        'csrf_token': csrf_token,
                        'dropShipExclusion': 'false'
                    },
                    agent: {
                        http: tunnelingAgent
                    }
                });
                console.log(response.body)
                if (response.body.includes('Access to this page has been denied')){
                    if (tasks[taskid].proxy_id != 'localhost') {
                        changeStatus(taskid, "danger", "Proxy Banned - Retrying")
                        await sleep(tasks[taskid].errordelay)
                        await setProxy()
                        await completeShipping()
                    } else {
                        await changeStatus(taskid, "danger", "Proxy Banned");
                        tasks[taskid].stopped = true;
                    }
                } else { 
                    changeStatus(taskid, "success", "Billing Loaded");
                    var body = parser.parseFromString(response.body, 'text/html');
                    csrf_token = body.getElementsByName('csrf_token')[0]['value'];
                }
            } catch (error) {
                changeStatus(taskid, "danger", ("Billing Failed To Load"))
                console.log(response.body)
                await sleep(tasks[taskid].errordelay)
                await completeShipping()
            }
        }
    }

    if (tasks[taskid].stopped == false) {
        changeStatus(taskid, "warning", "Completing Shipping")
        await completeShipping()
    }
    


    async function loadReview(){
        if (tasks[taskid].stopped == false) {
            try {
                userstate = abbrState(profile.state.toLowerCase(), 'abbr')
                if (profile.country == "USA" || profile.country.includes("United States")){
                    var country = "US"
                } else {
                var country = profile.country
                }
                response = await got.post('https://www.hibbett.com/review', {
                    headers : {
                        'accept': 'text/html, */*; q=0.01',
                        'accept-language': 'en-US,en;q=0.9',
                        'dnt': '1',
                        'referer': 'https://www.hibbett.com/billing',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
                        'x-requested-with': 'XMLHttpRequest',
                    },
                    cookieJar,
                    followRedirect: false,
                    agent: {
                        http: tunnelingAgent
                    },
                    form : {
                        'dwfrm_billing_billingAddress_addressFields_firstName': profile.firstName,
                        'dwfrm_billing_billingAddress_addressFields_lastName': profile.lastName,
                        'dwfrm_billing_billingAddress_addressFields_address1': profile.address,
                        'dwfrm_billing_billingAddress_addressFields_address2': profile.address2,
                        'dwfrm_billing_billingAddress_addressFields_city': profile.city,
                        'dwfrm_billing_billingAddress_addressFields_states_state': userstate,
                        'dwfrm_billing_billingAddress_addressFields_postal': profile.zip,
                        'dwfrm_billing_billingAddress_addressFields_country': country,
                        'dwfrm_billing_billingAddress_addressFields_phone': profile.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"),
                        'dwfrm_billing_billingAddress_addressFields_radialAVSValidated': 'true',
                        'dwfrm_billing_billingAddress_email_emailAddress': profile.email,
                        'dwfrm_billing_billingAddress_addToEmailList': 'false',
                        'dwfrm_billing_couponCode': '',
                        'dwfrm_billing_giftCertCode': '',
                        'g-recaptcha-response': '',
                        'dwfrm_billing_paymentMethods_selectedPaymentMethodID': 'CREDIT_CARD',
                        'dwfrm_billing_paymentMethods_creditCard_owner': profile.cardname,
                        'dwfrm_billing_paymentMethods_creditCard_type': profile.cardType,
                        'dwfrm_billing_paymentMethods_creditCard_number': profile.cnb.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,''),
                        'dwfrm_billing_paymentMethods_creditCard_encryptedNumber': '',
                        'dwfrm_billing_paymentMethods_creditCard_encryptedCVV': ePAN,
                        'dwfrm_billing_paymentMethods_creditCard_expiration_month': parseInt(profile.month).toString(),
                        'dwfrm_billing_paymentMethods_creditCard_expiration_year': profile.year,
                        'dwfrm_billing_paymentMethods_creditCard_cvn': profile.cvv,
                        'dwfrm_billing_paymentMethods_creditCard_radialNonce': accesstoken,
                        'dwfrm_billing_paymentMethods_creditCard_radialToken': radialToken,
                        'numberOfAdditionalTokenizatioRetries': '1',
                        'additionalTokenizatioRetriesErroLevel': '50000',
                        'resetRetries': '1',
                        'dwfrm_billing_paymentMethods_klarna_basketHash': '',
                        'dwfrm_billing_paymentMethods_klarna_client__token': '',
                        'dwfrm_billing_paymentMethods_klarna_session__id': '',
                        'dwfrm_billing_paymentMethods_klarna_payment__methods': '',
                        'dwfrm_billing_paymentMethods_klarna_authorization__token': '',
                        'dwfrm_profile_customer_firstname': '',
                        'dwfrm_profile_customer_lastname': '',
                        'dwfrm_profile_customer_email': '',
                        'dwfrm_billing_password': '',
                        'dwfrm_billing_passwordconfirm': '',
                        'dwfrm_billing_save': 'Continue to Review',
                        'csrf_token': csrf_token
                    }
                });
                console.log(response.body)
                if (response.body.includes('Access to this page has been denied')){
                    if (tasks[taskid].proxy_id != 'localhost') {
                        changeStatus(taskid, "danger", "Proxy Banned - Retrying")
                        await sleep(tasks[taskid].errordelay)
                        await setProxy()
                        await loadReview()
                    } else {
                        await changeStatus(taskid, "danger", "Proxy Banned");
                        tasks[taskid].stopped = true;
                    }
                } else { 
                    changeStatus(taskid, "success", "Review Loaded");
                    var body = parser.parseFromString(response.body, 'text/html');
                    csrf_token = body.getElementsByName('csrf_token')[0]['value'];
                    radialToken = body.getElementsByName('radialToken')[0]['value'];
                }
            } catch (error) {
                changeStatus(taskid, "danger", ("Review Failed To Load"))
                console.log(response.body)
                await sleep(tasks[taskid].errordelay)
                await loadReview()
            }
        }
    }

    if (tasks[taskid].stopped == false) {
        changeStatus(taskid, "warning", "Submitting Billing")
        await loadReview()
    }
   

    async function submitOrder(){
        if (tasks[taskid].stopped == false) {
            try {
                userstate = abbrState(profile.state.toLowerCase(), 'abbr')
                if (profile.country == "USA" || profile.country.includes("United States")){
                    var country = "US"
                } else {
                var country = profile.country
                }
                response = await got.post('https://www.hibbett.com/order-confirmation', {
                    headers : {
                        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                        'accept-language': 'en-US,en;q=0.9',
                        'cache-control': 'max-age=0',
                        'content-length': '2092',
                        'content-type': 'application/x-www-form-urlencoded',
                        'dnt': '1',
                        'origin': 'https://www.hibbett.com',
                        'referer': 'https://www.hibbett.com/review',
                        'sec-fetch-dest': 'document',
                        'sec-fetch-mode': 'navigate',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-user': '?1',
                        'upgrade-insecure-requests': '1',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36'
                    },
                    cookieJar,
                    followRedirect: false,
                    form : {
                        'det1': 'TF1;015;;;;;;;;;;;;;;;;;;;;;;Mozilla;Netscape;5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit/537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome/83.0.4103.61%20Safari/537.36;20030107;undefined;true;;true;Win32;undefined;Mozilla/5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit/537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome/83.0.4103.61%20Safari/537.36;en-US;undefined;www.hibbett.com;undefined;undefined;undefined;undefined;true;true;1590722728959;-6;6/7/2005%2C%209%3A33%3A44%20PM;2560;1080;;;;;;;16;360;300;5/28/2020%2C%2010%3A25%3A28%20PM;24;2560;1040;0;0;;;;;;;;;;;;;;;;;;;14;',
                        'acceptCharset': 'UTF-8',
                        'csrf_token': csrf_token,
                        'radialToken': radialToken,
                        'encryptedCardCVV': ePAN,
                        'encryptedCardNumber': 'null',
                        'RDFUUID' : rdfuuid
                    },
                    agent: {
                        http: tunnelingAgent
                    }
                });
                console.log(response.body)
                if (response.body != null) {
                    console.log(response.body)
                    if (response.body.includes('Access to this page has been denied')){
                        if (tasks[taskid].proxy_id != 'localhost') {
                            changeStatus(taskid, "danger", "Proxy Banned - Retrying")
                            await sleep(tasks[taskid].errordelay)
                            await setProxy()
                            await submitOrder()
                        } else {
                            await changeStatus(taskid, "danger", "Proxy Banned");
                            tasks[taskid].stopped = true;
                        }
                    } else if (response.body.includes('invalid price or are not available in the requested quantity')){
                        changeStatus(taskid, "danger", "Stock Error");
                    } else { 
                        if (response.body.includes('declined')){
                            var end = new Date().getTime();
                            var time = end - start;
                            changeStatus(taskid, "danger", ("Payment Declined: " + time.toString()))
                        } else {
                            changeStatus(taskid, "success", "Checkout Success");
                        }
                    }
                } else {
                    changeStatus(taskid, "danger", "Error");
                }
            } catch (error) {
                changeStatus(taskid, "danger", ("Submit Failed Retrying"))
                console.log(response.body)
                await sleep(tasks[taskid].errordelay)
                await submitOrder()
            }
        }
    }

    if (tasks[taskid].stopped == false) {
        changeStatus(taskid, "warning", "Submitting Order")
        await submitOrder()
    } else {
        changeStatus(taskid, "primary", "Stopped")
    }
}
