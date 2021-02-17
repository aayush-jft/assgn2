const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(function(user) {
            var tr = document.createElement("TR");

            var td1 = document.createElement("TD");
            var td2 = document.createElement("TD");
            var td3 = document.createElement("TD");
            var td4 = document.createElement("TD");
            var td5 = document.createElement("TD");
            var td6 = document.createElement("TD");
            var td7 = document.createElement("TD");
            var td8 = document.createElement("TD");

            var id = document.createTextNode(user.id);
            var name = document.createTextNode(user.name);
            var username = document.createTextNode(user.username);
            var email = document.createTextNode(user.email);
            var phone = document.createTextNode(user.phone);
            var website = document.createTextNode(user.website);
            var company = document.createTextNode(user.company.name);
            var city = document.createTextNode(user.address.city);

            td1.appendChild(id);
            td2.appendChild(name);
            td3.appendChild(username);
            td4.appendChild(email);
            td5.appendChild(phone);
            td6.appendChild(website);
            td7.appendChild(company);
            td8.appendChild(city);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            
            document.getElementById("userData").appendChild(tr);
        })
    })
    .catch((err) => {
        document.write(err);
    });