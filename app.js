const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((user) => {

            localStorage.setItem(user.id, JSON.stringify(user));
            var id = localStorage.getItem(user.id);
            var temp = JSON.parse(id);

            var tr = document.createElement("TR");

            var td1 = document.createElement("TD");
            var td2 = document.createElement("TD");
            var td3 = document.createElement("TD");
            var td4 = document.createElement("TD");
            var td5 = document.createElement("TD");
            var td6 = document.createElement("TD");
            var td7 = document.createElement("TD");
            var td8 = document.createElement("TD");
            var td9 = document.createElement("TD");
            var td10 = document.createElement("TD");
            var editBtn = document.createElement("BUTTON");
            var deleteBtn = document.createElement("BUTTON");

            var id = document.createTextNode(temp.id);
            var name = document.createTextNode(temp.name);
            var username = document.createTextNode(temp.username);
            var email = document.createTextNode(temp.email);
            var phone = document.createTextNode(temp.phone);
            var website = document.createTextNode(temp.website);
            var company = document.createTextNode(temp.company.name);
            var city = document.createTextNode(temp.address.city);
            var edit = document.createTextNode("Edit Button");
            var dlt = document.createTextNode("Delete Button");

            td1.appendChild(id);
            td2.appendChild(name);
            td3.appendChild(username);
            td4.appendChild(email);
            td5.appendChild(phone);
            td6.appendChild(website);
            td7.appendChild(company);
            td8.appendChild(city);
            editBtn.appendChild(edit);
            deleteBtn.appendChild(dlt);

            td9.appendChild(editBtn);
            td10.appendChild(deleteBtn);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            tr.append(td9);
            tr.append(td10);
            
            document.getElementById("userData").appendChild(tr);

            // edit user
            editBtn.addEventListener("click", () => editItem());

            // delete user
            deleteBtn.addEventListener("click", () => deleteItem());

        })
    })
    .catch((err) => {
        document.write(err);
    });

// add new user 
function addItem() {
    document.getElementById("heading").innerHTML = "Add User";
    document.getElementById("modalBtn").innerHTML = "Add";
    $("#myModal").modal();
}

// edit user
function editItem() {
    document.getElementById("heading").innerHTML = "Edit User";
    document.getElementById("modalBtn").innerHTML = "Save";
    $("#myModal").modal();
}

// delete user
function deleteItem() {
    $("#dltModal").modal();
    document.getElementById("dltBtn").click(function() {
        var ids = temp.id;
        localStorage.removeItem(ids);
        document.getElementById("userData").deleteRow(ids);
    });
}