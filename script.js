const signInForm = document.getElementById("signin-form");
const signUpForm = document.getElementById("signup-form");

signInForm.addEventListener("submit", () => {
    const email = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;
    if (password.length < 8){
        alert("Password should have atleast 8 characters!");
    }else{
        console.log(`Signed in as ${email}`);
        confirm("You have Signed-In Sucessfully!!!");
    }
});

signUpForm.addEventListener("submit", () => {
    const email = document.getElementById("floatingInputMail").value;
    const firstPassword = document.getElementById("floatingNewPassword").value;
    const secondPassword = document.getElementById("floatingRePassword").value;
    if (firstPassword != secondPassword){
        alert("Both Passwords should be same!");
    }else if (firstPassword.length < 8 ){
        alert("Password should have atleast 8 characters!");
    }else{
        console.log(`Sucessfully signed up as ${email}`);
        confirm("You have Signed-Up Sucessfully!!!");
    }
});


// function validatemail(email){
//     alert("email")  ;
//     let atposition=email.indexOf("@");  
//     let dotposition=email.lastIndexOf("."); 
//     alert(dotposition);
//     if (email==null || email==""){  
//       alert("Email can't be blank"); 
//       return false ;
//     }else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
//         alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);     
//         return false;
//     }else
//         return true;
// };

    


