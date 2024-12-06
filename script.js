
let data = [
    {id: 1, Name: "jhon", Email: "jhon@gmail.com"},
    {id: 2, Name: "Jimmey", Email: "jimmey@gmail.com"},
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

let isEditing = false;

function toggleDeleteButtons(disable) {
    const deleteButtons = document.querySelectorAll(".delBtn");
    deleteButtons.forEach((button) => {
        button.disabled = disable;
    });
}


function edit(id) {
    isEditing = true; 
    toggleDeleteButtons(true); 

    document.querySelector(".updateFrom").style.display = "block";
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

    isEditing = false; 
    toggleDeleteButtons(false); 
}


function remove(id) {
    if (confirm("Are you sure you want to delete this record?")) {
        data = data.filter((record) => record.id !== id);
        readAll();
    }
}





























