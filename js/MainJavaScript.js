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

function zoekReceptOp(link) {
    setTimeout(function() { 
        let articles = document.getElementsByTagName("article");
        for (let i = 0; i < articles.length; i++) {
            articles[i].classList.add("fadeOut");
        }
    },
    1);

    setTimeout(function() { 
        window.location.href = link; 
    }, 2000);
}


// links in buttons naar andere paginas
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactKnop").addEventListener("click", function() {
        openBook("./Contact.html");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("receptDatabase").addEventListener("click", function() {
        openBook("./receptDatabase.html");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("randomReceptKnop").addEventListener("click", function() {
        let randomIndex = Math.floor(Math.random() * recepten.length);
        let randomRecipe = recepten[randomIndex].filename;
        openBook(randomRecipe);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("returnToMain").addEventListener("click", function() {
        closeBook("./Main.html");
    });
});

// Recepten

let recepten = [
    { naamRecept: 'Veganistische Burrito Bowl', beschrijvingRecept: 'Een voedzame bowl met rijst, bonen, en groenten.', filename: 'veganistischeBurritoBowl.html' },
    { naamRecept: 'Veganistische Pannenkoeken', beschrijvingRecept: 'Luchtige pannenkoeken zonder dierlijke producten.', filename: 'veganistischePannenkoeken.html' }
];

document.getElementById('search-input').addEventListener('input', function() {
    let opzoekenInput = this.value.toLowerCase();
    let resultaatContainer = document.getElementById('alleReceptenBox');
    resultaatContainer.innerHTML = '';
    let receptenZoekopdracht = recepten.filter(recept => recept.naamRecept.toLowerCase().includes(opzoekenInput));
    receptenZoekopdracht.forEach(recept => {
        const receptElement = document.createElement('div');
        receptElement.classList.add('receptBox');
        receptElement.innerHTML = `<h3 id = "${recept.filename}">${recept.naamRecept}</a></h3><p>${recept.beschrijvingRecept}</p>`;
        resultaatContainer.appendChild(receptElement);
        document.getElementById(`${recept.filename}`).addEventListener("click", function() {
            zoekReceptOp(`${recept.filename}`);
        });
    });
});
