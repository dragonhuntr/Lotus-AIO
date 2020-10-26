var fs = require('fs');
var data = fs.readFileSync('tasks.json')
var tasks = JSON.parse(data)

function loadTasks(){
    var fs = require('fs');
    var data = fs.readFileSync('tasks.json')
    var tasks = JSON.parse(data)
    var tasksCheck = tasks
    document.querySelectorAll('tr.taskElement').forEach(e => {
        delete tasksCheck[e.id]
    });
    for (x in tasksCheck) {
        var a = document.createElement('tr');
        a.id = tasks[x].id;
        a.setAttribute("class", "taskElement")
        var b = document.createElement('td');
        var c = document.createTextNode(tasks[x].sitename);
        b.appendChild(c);
        a.appendChild(b);
        var d = document.createElement('td');
        var e = document.createTextNode(tasks[x].monitorinput);
        d.appendChild(e);
        a.appendChild(d);
        var q = document.createElement('td');
        var r = document.createTextNode(tasks[x].proxy_id);
        q.appendChild(r);
        a.appendChild(q);
        var f = document.createElement('td');
        var g = document.createTextNode(tasks[x].profile_id);
        f.appendChild(g);
        a.appendChild(f);
        var h = document.createElement('td');
        var i = document.createTextNode(tasks[x].size.toUpperCase());
        h.id = tasks[x].id + "size"
        h.appendChild(i);
        a.appendChild(h);
        var j = document.createElement('td');
        j.id = tasks[x].id + "status"
        j.setAttribute("class", "text-primary")
        j.setAttribute("stlye", "width:100px;overflow:hidden;white-space:no-wrap;position:fixed;")
        var k = document.createTextNode("Ready");
        j.appendChild(k);
        a.appendChild(j);
        var l = document.createElement('td');
        var m = document.createElement('a');
        m.setAttribute("href", "javascript:void(0);")
        var n = document.createElement('i');
        n.setAttribute("onclick", (tasks[x].sitename.toString().toLowerCase() + "(\'"+tasks[x].id+"\')"))
        n.setAttribute("name", "start")
        n.setAttribute("class", "start-btn fa fa-play")
        n.setAttribute("style", "margin: 0px;margin-right: 20px;")
        m.appendChild(n)
        l.appendChild(m)
        var z = document.createElement('a');
        z.setAttribute("href", "javascript:void(0);")
        var o = document.createElement('i');
        o.setAttribute("class", "fas fa-stop")
        o.setAttribute("name", "stop")
        o.setAttribute("onclick", ("stopTask" + "(\'"+tasks[x].id+"\')"))
        o.setAttribute("style", "margin: 0px;margin-right: 20px;")
        z.appendChild(o)
        l.appendChild(z)
        var s = document.createElement('a');
        s.setAttribute("href", "javascript:void(0);")
        var p = document.createElement('i');
        p.setAttribute("onclick", ("deleteTask" + "(\'"+tasks[x].id+"\')"))
        p.setAttribute("name", "delete")
        p.setAttribute("class", "fa fa-trash")
        p.setAttribute("style", "margin: 0px;margin-right: 0px;")
        s.appendChild(p)
        l.appendChild(s)
        a.appendChild(l)
        var tasklist = document.getElementById("tasklist");
        tasklist.appendChild(a)
    }

}

async function deleteAllTasks(){
    tasks = {}
    var newdata = tasks
    var data = JSON.stringify(newdata, null, 2);
    await fs.writeFileSync('tasks.json', data, finished);
    function finished() {
        console.log('Saved Changes')
    }
    loadTasks()
}

async function deleteTask(id){
    var check = document.getElementById(id);
    if (check){
        document.getElementById(id).remove()
        delete tasks[id]
        var newdata = tasks
        var data = JSON.stringify(newdata, null, 2);
        await fs.writeFileSync('tasks.json', data, finished);
        function finished() {
            console.log('Saved Changes')
        }
    }
    loadTasks()
}

async function createTask(){
    if (document.getElementById('monitorinput').value == ''){
        document.getElementById('monitorInputTitle').classList = 'text-danger';
        await sleep(1000)
        document.getElementById('monitorInputTitle').classList = '';
    } else {
        if (document.getElementById('siteselection').value == 'Hibbett'){
            if (document.getElementById('hibbettcolor').value.length == 4){
                quantity = parseInt(document.getElementById('numberoftasks').value);
                i = 0
                while (i < quantity){
                    id = Math.random().toString(36).substring(7).toUpperCase().toString();
                    newtask = {
                        "id": id,
                        "type": parseInt(document.getElementById('monitortype').value),
                        "sitename": document.getElementById('siteselection').value,
                        "monitorinput": document.getElementById('monitorinput').value,
                        "profile_id": document.getElementById('profileselection').value,
                        "proxy_id" : document.getElementById('proxyselection').value,
                        "size": document.getElementById('size').value,
                        "status": "Ready",
                        "stopped" : true,
                        "random" : document.getElementById('random').checked,
                        "colorid" : document.getElementById('hibbettcolor').value,
                        "monitordelay" : document.getElementById('monitordelay').value,
                        "errordelay" : document.getElementById('errordelay').value
                    }
                    tasks[id] = newtask
                    i++;
                }
                var data = JSON.stringify(tasks, null, 2);
                await fs.writeFileSync('tasks.json', data, finished);
                function finished() {
                    console.log('Saved Changes')
                }
                loadTasks()
            } else {
                document.getElementById('fetchColorBtn').classList = '';
                document.getElementById('fetchColorBtn').classList = 'btn btn-danger btn-sm';
                await sleep(1000)
                document.getElementById('fetchColorBtn').classList = '';
                document.getElementById('fetchColorBtn').classList = 'btn btn-primary btn-sm';
            }
        } else {
            quantity = parseInt(document.getElementById('numberoftasks').value);
            i = 0
            while (i < quantity){
                id = Math.random().toString(36).substring(7).toUpperCase().toString();
                newtask = {
                    "id": id,
                    "type": parseInt(document.getElementById('monitortype').value),
                    "sitename": document.getElementById('siteselection').value,
                    "monitorinput": document.getElementById('monitorinput').value,
                    "profile_id": document.getElementById('profileselection').value,
                    "proxy_id" : document.getElementById('proxyselection').value,
                    "size": document.getElementById('size').value,
                    "status": "Ready",
                    "stopped" : true,
                    "random" : document.getElementById('random').checked,
                    "colorid" : document.getElementById('hibbettcolor').value
                }
                tasks[id] = newtask
                i++;
            }
            var data = JSON.stringify(tasks, null, 2);
            await fs.writeFileSync('tasks.json', data, finished);
            function finished() {
                console.log('Saved Changes')
            }
            loadTasks()
        }
    }
}