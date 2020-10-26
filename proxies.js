var fs = require('fs');
var data = fs.readFileSync('proxies.json')
var proxies = JSON.parse(data)

function loadProxies(){
    document.querySelectorAll('tr.proxyElement').forEach(e => e.remove());
    for (x in proxies) {
        var a = document.createElement('tr');
        a.style.cssText = "cursor: pointer;"
        a.id = proxies[x].id;
        a.setAttribute("class", "proxyElement")
        var b = document.createElement('td');
        var onclick = 'loadProxy(\'' + proxies[x].id + '\')';
        b.setAttribute("onclick", onclick);
        var c = document.createTextNode(proxies[x].id);
        a.appendChild(b).appendChild(c);
        var element = document.getElementById("listofproxies");
        element.appendChild(a)

        var d = document.createElement('option');
        d.setAttribute("value", proxies[x].id)
        var f = document.createTextNode(proxies[x].id);
        d.appendChild(f);
        var taskproxies = document.getElementById("proxyselection");
        taskproxies.appendChild(d);
    }

}

function loadProxy(id){
    document.querySelectorAll('tr.proxy').forEach(e => e.remove());
    b = document.querySelectorAll('tr.proxyElement');
    b.forEach(c => {
        c.style.cssText = "cursor: pointer;"
    })
    var a = document.getElementById(id);
    a.style.cssText = "font-weight: bold;cursor: pointer;"
    var proxylist = proxies[id].proxies;
    var textarea = document.getElementById("proxyinput");
    textarea.value = proxylist.join("\n");
    document.getElementById('proxyname').value = id;
    for(i = 0;i < proxylist.length; i++)
    {
        var z = document.createElement('tr');
        z.setAttribute("class", "proxy")
        var y = document.createElement('td')
        var x = document.createTextNode(proxylist[i]);
        z.appendChild(y).appendChild(x);
        var element = document.getElementById('proxytable');
        element.appendChild(z)
    }
}

async function deleteProxy(){
    if (Object.keys(proxies).length > 0){
        id = document.getElementById('proxyname').value;
        console.log(id)
        if(id != ''){
            delete proxies[id]
            console.log(proxies)
            var newdata = proxies;
            var data = JSON.stringify(newdata, null, 2);
            await fs.writeFileSync('proxies.json', data, finished);
            function finished() {
                console.log('Saved Changes')
                loadProxies();
            }
            loadProxies();
            newProxy()
        }
    }
}

function newProxy(){
    document.querySelectorAll('tr.proxy').forEach(e => e.remove());
    b = document.querySelectorAll('tr.proxyElement');
    b.forEach(c => {
        c.style.cssText = "cursor: pointer;"
    })
    var area = document.getElementById("proxyinput");        
    area.value = "" 
    document.getElementById('proxyname').value = "";    
    
}

async function saveProxy(){
    id = document.getElementById('proxyname').value;
    if (id != '' && id != 'localhost'){
        var proxyExists = false;
        if (proxies[id]){
            //id = id + " - " + Math.random().toString(36).substring(7).toUpperCase().toString();
            proxyExists = true;
        }
        if (proxyExists == false){
            var area = document.getElementById("proxyinput");             
            var lines = area.value.replace(/\r\n/g,"\n").split("\n");
            id = document.getElementById('proxyname').value;
            var newproxy = {
                'id' : id,
                'proxies' : lines
            }
            proxies[id] = newproxy;
            var data = JSON.stringify(proxies, null, 2);
            await fs.writeFileSync('proxies.json', data, finished);
            function finished() {
                console.log('Saved Changes')
            }
            loadProxies();
            loadProxy(id);
        } else {
            tempproxy = proxies[id]
            var area = document.getElementById("proxyinput");             
            var lines = area.value.replace(/\r\n/g,"\n").split("\n");
            tempproxy.proxies = lines;
            proxies[id] = tempproxy;
            var data = JSON.stringify(proxies, null, 2);
            await fs.writeFileSync('proxies.json', data, finished);
            function finished() {
                console.log('Saved Changes')
                loadProxies();
            }
            loadProxies();
            loadProxy(id);
        }
    }
    
}