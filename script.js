// =========================
// MOBILE MENU
// =========================


const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});





// =========================
// CLOSE MENU WHEN CLICK LINK
// =========================


const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});







// =========================
// SCROLL ANIMATION
// =========================


const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {


    sections.forEach(section => {


        const sectionTop = section.getBoundingClientRect().top;


        const screenPosition = window.innerHeight / 1.3;



        if(sectionTop < screenPosition){

            section.style.opacity = "1";

            section.style.transform = "translateY(0)";

        }


    });



});








// =========================
// COUNTER ANIMATION
// =========================


const counters = document.querySelectorAll(".stats h3");


counters.forEach(counter => {


    counter.innerText = "0";


    const updateCounter = () => {


        const target = +counter.getAttribute("data-target");


        const current = +counter.innerText;



        const increment = target / 100;



        if(current < target){


            counter.innerText = Math.ceil(current + increment);


            setTimeout(updateCounter,20);


        }

        else{

            counter.innerText = target + "+";

        }



    };


    updateCounter();



});
