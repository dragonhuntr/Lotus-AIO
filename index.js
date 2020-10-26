function start_all(){
    elems = document.getElementsByName('start');
    for (let elem of elems) {
        if (typeof elem.onclick == "function") {
            elem.onclick.apply(elem);
        }
    }
}

function delete_all(){
    elems = document.getElementsByName('delete');
    for (let elem of elems) {
        if (typeof elem.onclick == "function") {
            elem.onclick.apply(elem);
        }
    }
}

function stop_all(){
    elems = document.getElementsByName('stop');
    for (let elem of elems) {
        if (typeof elem.onclick == "function") {
            elem.onclick.apply(elem);
        }
    }
}

const async = require('async')
async function stopTask(taskid){
    if (tasks[taskid].stopped == false){
        tasks[taskid].stopped = true;
        changeStatus(taskid, "primary", "Stopped");
    }
}

function showProfiles(){
    document.getElementById("contentDashboard").style.display = "none";
    document.getElementById("contentProxies").style.display = "none";
    document.getElementById("contentNewTask").style.display = "none";
    document.getElementById("contentProfile").style.display = "";
    document.querySelectorAll('li.botSelection').forEach(e => {
        e.style="";
    });
    document.getElementById('profNav').style="background-color: #2c4384";
    window.scrollTo(0, 0);
}

function showNewTask(){
    document.getElementById("contentDashboard").style.display = "none";
    document.getElementById("contentProfile").style.display = "none";
    document.getElementById("contentProxies").style.display = "none";
    document.getElementById("contentNewTask").style.display = "";
    document.querySelectorAll('li.botSelection').forEach(e => {
        e.style="";
    });
    document.getElementById('taskNav').style="background-color: #2c4384";
    window.scrollTo(0, 0);
}

function showProxies(){
    document.getElementById("contentDashboard").style.display = "none";
    document.getElementById("contentProfile").style.display = "none";
    document.getElementById("contentNewTask").style.display = "none";
    document.getElementById("contentProxies").style.display = "";
    document.querySelectorAll('li.botSelection').forEach(e => {
        e.style="";
    });
    document.getElementById('proxyNav').style="background-color: #2c4384";
    window.scrollTo(0, 0);
}

function showDashboard(){
    document.getElementById("contentProfile").style.display = "none";
    document.getElementById("contentNewTask").style.display = "none";
    document.getElementById("contentProxies").style.display = "none";
    document.getElementById("contentDashboard").style.display = "";
    document.querySelectorAll('li.botSelection').forEach(e => {
        e.style="";
    });
    document.getElementById('dashNav').style="background-color: #2c4384";
    window.scrollTo(0, 0);
}
