function toggleMenu(){

    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");
    const button = document.querySelector(".menu-btn");

    sidebar.classList.toggle("active");
    button.classList.toggle("active");

    if(sidebar.classList.contains("active")){
        content.style.marginLeft = "250px";
    }else{
        content.style.marginLeft = "0";
    }

}
