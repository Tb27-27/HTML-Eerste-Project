

// links in buttons naar andere paginas
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("contactKnop").addEventListener("click", function() {
        window.location.href = "./Contact.html";
    });

});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("returnToMain").addEventListener("click", function() {
        setTimeout(function() { document.getElementById("pageLeft").classList.add("closeBookAnimation"); }, 1); 
        setTimeout(function() { document.getElementById("pageLeftBack").classList.add("closeBookAnimation"); }, 2);
        setTimeout(function() { document.getElementById("bookCoverFrontInvertedFront").classList.add("closeBookAnimation"); }, 3); 
        setTimeout(function() { document.getElementById("bookCoverFrontInvertedBack").classList.add("closeBookAnimation"); }, 4);
        setTimeout(function() { document.getElementById("bookCoverFrontInvertedFront").style.zIndex = 15; }, 1000); 
        setTimeout(function() { window.location.href = "./Main.html"; }, 2200);
    });
});

