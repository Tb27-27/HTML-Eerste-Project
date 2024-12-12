

// links in buttons naar andere paginas
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactKnop").addEventListener("click", function() {
        openBook("./Contact.html");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("randomReceptKnop").addEventListener("click", function() {
        let randomNummer = Math.round((Math.random() * (2 -  1) + 1));
        let randomPage = "./Recept" + randomNummer + ".html";
        openBook(randomPage);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("returnToMain").addEventListener("click", function() {
        closeBook("./Main.html");
    });
});

// functies om het boek te openen en te sluiten
// PARAMETER: "LINK.HTML"

function openBook(link) {
    setTimeout(function() { document.body.classList.add('zoomIn'); }, 1);  
    setTimeout(function() { document.getElementById("bookCover").classList.add("openBookAnimation"); }, 1); 
    setTimeout(function() { document.getElementById("bookCoverBack").classList.add("openBookAnimation"); }, 2);
    setTimeout(function() { document.getElementById("pageLeftMain").classList.add("openBookAnimation"); }, 3);
    setTimeout(function() { document.getElementById("bookCoverBack").style.zIndex = 1; }, 1000);
    setTimeout(function() { document.getElementById("bookCover").style.zIndex = 1; }, 1000);
    setTimeout(function() { window.location.href = link; }, 2200);
};

function closeBook(link) {
    setTimeout(function() { document.body.classList.add('zoomOut'); }, 1);  
    setTimeout(function() { document.getElementById("pageLeft").classList.add("closeBookAnimation"); }, 1); 
    setTimeout(function() { document.getElementById("pageLeftBack").classList.add("closeBookAnimation"); }, 2);
    setTimeout(function() { document.getElementById("bookCoverFrontInvertedFront").classList.add("closeBookAnimation"); }, 3); 
    setTimeout(function() { document.getElementById("bookCoverFrontInvertedBack").classList.add("closeBookAnimation"); }, 4);
    setTimeout(function() { document.getElementById("bookCoverFrontInvertedFront").style.zIndex = 15; }, 1000);
    setTimeout(function() { window.location.href = link; }, 2200);
};