const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click",checkCredentials);

function checkCredentials() {
  //Ici, il faudra appeler une API pour vérifier les identifiants de l'utilisateur en BDD
  if(mailInput.value == "test@mail.com" && passwordInput.value == "123") {
    //Ici, il faudra récupérer le token de l'utilisateur généré par l'API
    const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf"; 
    //placer ce token en cookie
    setToken(token);
    setCookie(RoleCookieName,"client",7);
    window.location.replace("/");
  }else{
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}