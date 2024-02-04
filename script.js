function expandCard(card) {
    var description = card.getElementsByClassName("card-description")[0];
    if (description.style.display === "block") {
        description.style.display = "none";
    } else {
        description.style.display = "block";
    }
}

function toggleAccordion(event, containerId) {
    var content = document.getElementById(containerId);
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        event.target.classList.remove('active');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        event.target.classList.add('active');
    }
}
