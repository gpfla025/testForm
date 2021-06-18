var customerForm = document.getElementById("customerForm");
var firstName = document.getElementById("Name");
var lastName = document.getElementById("Idnumber");
var phoneNumber = document.getElementById("PhoneNumber");
var city = document.getElementById("Address");
var submitButton = document.getElementById("submitButton");
var buttonSpinner = document.getElementById("buttonSpinner");
var buttonText = document.getElementById("buttonText");
var unknownError = document.getElementById("unknownError");


function afterSubmit(e){

    e.preventDefault();

    if (customerForm.checkValidity() === false) {
        e.stopPropagation();
        for(let field of customerForm.elements) {
            if(!field.checkValidity()){
                field.classList.add("is-invalid");
            }
        }
        return;
    };

    for(let field of customerForm.elements) {
            field.classList.remove("is-invalid");
    };

  //colunm name:html name
    var info = {
        이름: Name.value,
        주민번호: Idnumber.value,
        휴대폰번호: PhoneNumber.value,
        주소: Address.value,
    };

    var url = "https://script.google.com/macros/s/AKfycbwNo038t8nw-MzPjWmzlhJG8zOz8lUkt1D9fEm7dQzg76n7bKPzsSoTMcLH6KVY2ZSb/exec";

    buttonText.textContent = "Saving..";
    buttonSpinner.classList.remove("d-none");
    submitButton.disabled = true;

    fetch(url,{
        method: 'POST',
        cache: 'no-cache',
        redirect: 'follow',
        body: JSON.stringify(info)
      })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        customerForm.reset();
        buttonText.textContent = "Send";
        buttonSpinner.classList.add("d-none");
        submitButton.disabled = false;
      })
      .catch(err => {
        console.log(err);
        console.log("Something Went Wrong");
        unknownError.classList.remove("d-none");
        setTimeout(function(){
            unknownError.classList.add("d-none");
            buttonText.textContent = "Send";
            buttonSpinner.classList.add("d-none");
            submitButton.disabled = false;
        },3000);
      });

}

customerForm.addEventListener("submit",afterSubmit);
