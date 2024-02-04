function expandCard(card) {
    var description = card.getElementsByClassName("card-description")[0];
    if (description.style.display === "block") {
        description.style.display = "none";
    } else {
        description.style.display = "block";
    }
}


function toggleContainerVisibility() {
    var container = document.querySelector(".cards-container");
    container.style.display = container.style.display === "none" ? "block" : "none";
}