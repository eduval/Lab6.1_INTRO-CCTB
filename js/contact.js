
let contact_name = document.getElementById("contact_name").textContent;
let contact_email = document.getElementById("contact_email").textContent;
let contact_phone = document.getElementById("contact_phone").textContent;
let contact_message = document.getElementById("contact_message").textContent;



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

if (contact_phone == "") {
    alert("Phone is a mandatory field");
}

if (contact_message == "") {
    alert("Message is a mandatory field");
} 
