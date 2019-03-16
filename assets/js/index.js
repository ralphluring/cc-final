let yesButton = document.getElementById("yes-button");
let mainPage = document.getElementById("main-wrapper");
let ageModal = document.getElementById("age-modal");
let ageLogo = document.getElementById("age-logo");
let body = document.querySelector("body");

if(sessionStorage.getItem('age')){
    console.log("age is good");
    ageModal.style.display = "none";
}else{
    mainPage.style.display = "none";
    ageModal.style.display = "flex";
}

yesButton.addEventListener("click",function(){
    body.style.backgroundColor = "#FFBD0D";
    setInterval(function(){
       
        ageModal.style.display = "none";
        mainPage.classList.add("animated", "fadeIn");
        
     }, 1000);

    ageModal.classList.add("animated","fadeOut");
    
    mainPage.style.display = "grid";
    sessionStorage.setItem('age', 'yes');
    
});


