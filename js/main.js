function hideOtherLinks(clickedLink) {
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        if (links[i] !== clickedLink) {
            links[i].style.display = 'none';
        }
    }
}
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") { 
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

