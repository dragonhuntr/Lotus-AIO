var fs = require('fs');
var data = fs.readFileSync('profiles.json')
var profiles = JSON.parse(data)

function loadProfiles(){
    document.querySelectorAll('tr.profileElement').forEach(e => e.remove());
    for (x in profiles) {
        var a = document.createElement('tr');
        a.style.cssText = "cursor: pointer;"
        a.id = profiles[x].id;
        a.setAttribute("class", "profileElement")
        var b = document.createElement('td');
        var onclick = 'loadProfile(\'' + profiles[x].id + '\')';
        b.setAttribute("onclick", onclick);
        var c = document.createTextNode(profiles[x].id);
        a.appendChild(b).appendChild(c);
        var element = document.getElementById("listofprofiles");
        element.appendChild(a)

        var d = document.createElement('option');
        d.setAttribute("value", profiles[x].id)
        var f = document.createTextNode(profiles[x].id);
        d.appendChild(f);
        var taskprofiles = document.getElementById("profileselection");
        taskprofiles.appendChild(d)
    }

}

function loadProfile(id){
    b = document.querySelectorAll('tr.profileElement');
    b.forEach(c => {
        c.style.cssText = "cursor: pointer;"
    })
    var a = document.getElementById(id);
    a.style.cssText = "font-weight: bold;cursor: pointer;"
    var profile = profiles[id]
    document.getElementById('cardname').value = profile.cardname;
    document.getElementById('cnb').value = profile.cnb;
    document.getElementById('month').value = profile.month;
    document.getElementById('year').value = profile.year;
    document.getElementById('cvv').value = profile.cvv;
    document.getElementById('profilename').value = profile.id;
    document.getElementById('phone').value = profile.phone;
    document.getElementById('email').value = profile.email;
    document.getElementById('firstName').value = profile.firstName;
    document.getElementById('lastName').value = profile.lastName;
    document.getElementById('address').value = profile.address;
    document.getElementById('address2').value = profile.address2;
    document.getElementById('zip').value = profile.zip;
    document.getElementById('city').value = profile.city;
    document.getElementById('country').value = profile.country;
    document.getElementById('state').value = profile.state;
    document.getElementById('cardType').value = profile.cardType;
}

async function deleteProfile(){
    if (Object.keys(profiles).length > 0){
        id = document.getElementById('profilename').value;
        if (id != ''){
            delete profiles[id]
            var newdata = profiles
            var data = JSON.stringify(newdata, null, 2);
            await fs.writeFileSync('profiles.json', data, finished);
            function finished() {
                console.log('Saved Changes')
            }
            loadProfiles();
            newProfile()
        }
    }
}

function newProfile(){
    b = document.querySelectorAll('tr.profileElement');
    b.forEach(c => {
        c.style.cssText = "cursor: pointer;"
    })
    document.getElementById('cardname').value = '';
    document.getElementById('cnb').value = '';
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';
    document.getElementById('cvv').value = '';
    document.getElementById('profilename').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('address').value = '';
    document.getElementById('address2').value = '';
    document.getElementById('zip').value = '';
    document.getElementById('city').value = '';
    document.getElementById('country').value = '';
    document.getElementById('state').value = '';
    document.getElementById('cardType').value = 'Amex'
}

async function saveProfile(){
    id = document.getElementById('profilename').value;
    if (id != ''){
        var profileExists = false;
        if (profiles[id]){
            //id = id + " - " + Math.random().toString(36).substring(7).toUpperCase().toString();
            profileExists = true;
        }
        if (profileExists == false){
            var newprofile = {
                "id" : document.getElementById('profilename').value,
                "firstName" : document.getElementById('firstName').value,
                "lastName" : document.getElementById('lastName').value,
                "email" : document.getElementById('email').value,
                "phone" : document.getElementById('phone').value,
                "address" : document.getElementById('address').value,
                "address2" : document.getElementById('address2').value,
                "zip" : document.getElementById('zip').value,
                "city" : document.getElementById('city').value,
                "country" : document.getElementById('country').value,
                "state" : document.getElementById('state').value,
                "cardname" : document.getElementById('cardname').value,
                "cnb" : document.getElementById('cnb').value,
                "month" : document.getElementById('month').value,
                "year" : document.getElementById('year').value ,
                "cvv" : document.getElementById('cvv').value,
                "cardType" :document.getElementById('cardType').value
            }
            id = document.getElementById('profilename').value;
            profiles[id] = newprofile;
            var data = JSON.stringify(profiles, null, 2);
            await fs.writeFileSync('profiles.json', data, finished);
            function finished() {
                console.log('Saved Changes')
            }
            loadProfiles()
            loadProfile(id)
        } else {
            tempprofile = profiles[id]
            tempprofile.firstName = document.getElementById('firstName').value;
            tempprofile.lastName = document.getElementById('lastName').value;
            tempprofile.email = document.getElementById('email').value;
            tempprofile.phone = document.getElementById('phone').value;
            tempprofile.address = document.getElementById('address').value;
            tempprofile.address2 = document.getElementById('address2').value;
            tempprofile.zip = document.getElementById('zip').value;
            tempprofile.city = document.getElementById('city').value;
            tempprofile.country = document.getElementById('country').value;
            tempprofile.state = document.getElementById('state').value;
            tempprofile.cardname = document.getElementById('cardname').value;
            tempprofile.cnb = document.getElementById('cnb').value;
            tempprofile.month = document.getElementById('month').value;
            tempprofile.year = document.getElementById('year').value;
            tempprofile.cvv = document.getElementById('cvv').value;
            profiles[id] = tempprofile;
            var data = JSON.stringify(profiles, null, 2);
            await fs.writeFileSync('profiles.json', data, finished);
            function finished() {
                console.log('Saved Changes')
            }
            loadProfiles()
            loadProfile(id)
        }
    }
    
}