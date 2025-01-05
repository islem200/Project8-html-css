addEventListener("scroll", () => {
    if (scrollY > 100) {
        headerElement.classList.add("scroll-down")
        
    } else {
        headerElement.classList.remove("scroll-down")
    }

})