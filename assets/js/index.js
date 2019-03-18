let yesButton = document.getElementById("yes-button");
let mainPage = document.getElementById("main-wrapper");
let ageModal = document.getElementById("age-modal");
let ageLogo = document.getElementById("age-logo");
let menuButton = document.getElementById("menu-button");
let nav = document.getElementById("nav");
let body = document.querySelector("body");

if(sessionStorage.getItem('age')){
    console.log("age is good");
    ageModal.style.display = "none";
}else{
    mainPage.style.display = "none";
    ageModal.style.display = "flex";
}

yesButton.addEventListener("click",function(){

    setInterval(function(){
        ageModal.style.display = "none";
        mainPage.classList.add("animated", "fadeIn");
     }, 1000);

    ageModal.classList.add("animated","fadeOut");
    mainPage.style.display = "grid";
    sessionStorage.setItem('age', 'yes');    
});

let show = false;
nav.classList.add("nav-hide");

menuButton.addEventListener("click", function(){

    if(show === false){
        nav.classList.remove("nav-hide");
        nav.classList.add("nav-pulse-1");
        nav.classList.add("nav-show");
        show = true;
     
    }else{
     
        
           nav.classList.remove("nav-show");
            nav.classList.add("nav-hide");
            show = false;
    
        

        
        
       
    }
    
 
});











