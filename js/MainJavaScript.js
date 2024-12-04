

// links in buttons naar andere paginas
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("contactKnop").addEventListener("click", function() {
        window.location.href = "./Contact.html";
    });

});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("returnToMain").addEventListener("click", function() {
        window.location.href = "./Main.html";
    });
});
