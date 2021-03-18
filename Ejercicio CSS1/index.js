let elements = document.querySelectorAll('nav ul li');

elements.forEach((li) => {
    li.addEventListener("click", () => {
        setActive(li);
    });
});

setActive = (current) => {
    elements.forEach((elem) => {
        if (elem === current) {
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    });

}