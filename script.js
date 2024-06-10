// created object to store the value
let data = {
    "firstName":"",
    "lastName":"",
    "email":"",
    "address":"",
    "pincode":"",
    "gender":"",
    "food":[],
    "state":"",
    "country":""
}
// Getting data from the form
document.getElementById("form").addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    data.firstName = formData.get("first-name")
    data.lastName = formData.get("last-name")
    data.email = formData.get("email")
    data.address = formData.get("address")
    data.pincode = formData.get("pincode")
    data.gender = formData.get("gender")
    data.state = formData.get("state")
    data.country = formData.get("country")

    let dishes = document.querySelectorAll('.food');

    dishes.forEach((e) => {
        if (e.checked) {
            data['food'].push(e.value);
        }
    })
    if (data['food'].length < 2) {
        alert("Select atleast two food items");
    } else {
        setDateToTable(data)
        data.food = []
        this.reset();
    }

})
//function to write value in table
function setDateToTable(data){
    let tb = document.getElementById("table-body");
    let tr = document.createElement('tr');
    for(let i in data){
        if(typeof data[i] === 'object'){
            let td = document.createElement('td')
            td.innerText = data[i].join(", ")
            tr.appendChild(td)
        }else{
            let td = document.createElement('td')
            td.innerText = data[i]
            tr.appendChild(td)
        }
    }
    tb.appendChild(tr)
}


