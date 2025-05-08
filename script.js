let currentpage = 0;
const container = document.querySelector(".container");
const totalPages = document.querySelectorALL(".page").length;

document.addEventListener("wheel" , (event) => {
     if (event.deltaY > 0 && currentPage < totalPages - 1) {
        currentPage++;
     } else if (event.deltaY < 0 && currentPage > 0) {
        currentPage--;
     }
    container.style.transform = 'translateY (-${currentPage * 100}vh';
});

