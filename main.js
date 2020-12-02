$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("stick");
        } else {
            $('.navbar').removeClass("stick");
        }
    });

    //string animations

    let typed = new Typed(".typing",{
        strings:["Estudiante de Sistemas", "Front End Developer", "Desarrollador Web", "Back End Developer", "Full-Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    let typed2 = new Typed(".typing-2",{
        strings:["Estudiante de Sistemas", "Front End Developer", "Desarrollador Web", "Back End Developer", "Full-Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    //toggle menu/navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("activo");
        $('.menu-btn i').toggleClass("activo");
    })
});