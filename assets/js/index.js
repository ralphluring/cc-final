let yesButton = document.getElementById("yes-button");
let mainPage = document.getElementById("main-wrapper");
let ageModal = document.getElementById("age-modal");

if(sessionStorage.getItem('age')){
    console.log("age is good");
    ageModal.style.display = "none";
}else{
    mainPage.style.display = "none";
    ageModal.style.display = "flex";
}

yesButton.addEventListener("click",function(){
    console.log("yes clicked");
    ageModal.style.display = "none";
    mainPage.style.display = "grid";
    sessionStorage.setItem('age', 'yes');
});


