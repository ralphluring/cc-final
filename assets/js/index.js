let menuButton = document.querySelector(".menuButton");

menuButton.addEventListener("click", function(){
    openNav();
});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

let yesButton = document.getElementById("yes-button");
let mainPage = document.getElementById("main-wrapper");
let ageModal = document.getElementById("age-modal");
let ageLogo = document.getElementById("age-logo");


if(sessionStorage.getItem('age')){
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
  


