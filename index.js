const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(function(user) {
            //document.write(user.name)
        })
    })
    .catch((err) => {
        document.write(err)
    });