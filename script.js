function handleGetFormData() {
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    var zipCode = document.getElementById("zip-code").value;
    var status = document.getElementById("status").checked;

    return {
        name: name,
        city: city,
        email: email,
        zipCode: zipCode,
        status: status
    };
}

function isNumber(string) {
    if (!isNaN(string)) {
        return true;
    }
    else {
        return false;
    }
}

function checkboxIsChecked() {
    if (document.getElementById("status").checked) {
        return true;
    }
    else {
        return false;
    }
}

function validateFormData(obj) {
    if (obj != null && isNumber(obj.zipCode) && checkboxIsChecked()) {
        return true;
    }
    else {
        return false;
    }
}

document.getElementById("submit-form").addEventListener("click", function(event) {
    event.preventDefault();

    var formData = handleGetFormData();

    var isValid = validateFormData(formData);

    if (isValid) {
        alert("Terima kasih telah mengisi form ini");
    }
    else {
        document.getElementById("warning").innerHTML = "Mohon isi semua data dengan benar";
    }
});

function submit() {
    var isValid = validateFormData(handleGetFormData());

    if (!isValid) {
        document.getElementById("warning").innerHTML = "Periksa form anda sekali lagi";
    }
    else {
        document.getElementById("warning").innerHTML = "";
        alert("Terima kasih telah mengisi form ini");
    }
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    submit();
});
