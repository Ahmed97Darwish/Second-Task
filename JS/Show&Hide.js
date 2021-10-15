const   pswdField = document.querySelector(".form form .field input.hide"),
        toggleBTN = document.querySelector(".form form .field i");

    toggleBTN.onclick = ()=>{
        if (pswdField.type == "password") {

            pswdField.type = "text";
            toggleBTN.classList.add("active");

        } else {

            pswdField.type = "password";
            toggleBTN.classList.remove("active");

        }
    }