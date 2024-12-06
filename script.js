
let data = [
    {id: 1, Name: "Tanmoy", Email: "tanmoy@gmail.com"},
    {id: 2, Name: "Shilpa", Email: "shilpa@gmail.com"},
    {id: 3, Name: "Krishna", Email: "krishna@gmail.com"},
    {id: 4, Name: "Shyam", Email: "shyam@gmail.com"},
    {id: 5, Name: "Ram", Email: "ram@gmail.com"},
    {id: 6, Name: "Sunny", Email: "sunny@gmail.com"},
    {id: 7, Name: "Jhon", Email: "jhon@gmail.com"},
    {id: 8, Name: "Adam", Email: "adam@gmail.com"},
    {id: 9, Name: "Tammy", Email: "tammy@gmail.com"},
    {id: 10, Name: "Shami", Email: "shami@gmail.com"}
]



function getNextId() {
    return data.length > 0 ? data[data.length - 1].id + 1 : 1;
}

const readAll = () => {
    localStorage.setItem("object", JSON.stringify(data));
    let tableData = document.querySelector(".table-data");
    let objData = localStorage.getItem("object");
    localData = JSON.parse(objData);

    let elem = "";

    localData.map((record => {
        elem += `<tr>
            <td>${record.Name}</td>
            <td>${record.Email}</td>
            <td><button class= "editBtn" onClick= "edit(${record.id})">Edit</button>
            <button class= "delBtn" onClick= "remove(${record.id})">Delete</button></td>
        </tr>`
    }))

    tableData.innerHTML = elem;

}


function addCreate() {
    document.querySelector(".createFrom").style.display = "block";
    document.querySelector(".add").style.display = "none";
}


function create() {
    const name = document.getElementById("cname").value.trim();
    const email = document.getElementById("cemail").value.trim();

    if (name === "" || email === "") {
        alert("Both Name and Email are required.");
        return;
    }

    let newObj = { id: getNextId(), Name: name, Email: email };
    // console.log(newObj);
    data.push(newObj);

    document.getElementById("cname").value = "";
    document.getElementById("cemail").value = "";
    
    document.querySelector(".createFrom").style.display = "none";
    document.querySelector(".add").style.display = "block";
    
    readAll();
}


function edit(id) {
    document.querySelector(".updateFrom").style.display = "block"
    let obj = data.find((record) => record.id === id);

    document.querySelector("#uname").value = obj.Name;
    document.querySelector("#uemail").value = obj.Email;
    document.querySelector("#uid").value = obj.id;
}


function update() {
    let id = parseInt(document.querySelector("#uid").value);
    let name = document.querySelector("#uname").value;
    let email = document.querySelector("#uemail").value;

    if (name === "" || email === "") {
        alert("Both Name and Email are required.");
        return;
    }

    const index = data.findIndex((record) => record.id === id);

    if (index > -1) {
        data[index].Name = name;
        data[index].Email = email;

    document.querySelector(".updateFrom").style.display = "none";

    readAll();
    }
}


function remove(id) {
    if (confirm("Are you sure you want to delete this record?")) {
        data = data.filter((item) => item.id !== id);
        readAll();
    }
}





























