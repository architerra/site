function showText (el) {
    if(el.previousElementSibling.clientHeight === 75) {
        el.previousElementSibling.style.height = "100%" ;
        el.innerHTML = "Showless..." ;
    } else {
        el.previousElementSibling.style.height = "75px";
        el.innerHTML = "Read More" ; 
    }
}