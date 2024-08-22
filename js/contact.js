
let contact_name = document.getElementById("contact_name").textContent;
let contact_email = document.getElementById("contact_email").textContent;



if (contact_name == "") {
    alert("Name is a mandatory field");
} else {
    if (contact_name.length < 5) {
        alert("Name: Minimum 5 characters.");
    }
}


if (contact_email == "") {
    alert("Email is a mandatory field");
} 
