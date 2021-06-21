/*!
* Start Bootstrap - New Age v6.0.1 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // // Activate Bootstrap scrollspy on the main nav element
    // const mainNav = document.body.querySelector('Home\\/home.html');
    // console.log(mainNav);
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: 'Home/home.html',
    //         offset: 74,
    //     });
    // };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// $(document).ready(function(){
//     $("#changeHTML").load("Home/home.html", function () {
//         //페이지 별로 다른 메뉴 css 적용도 가능
//         document.getElementById("changeHTML").classList.add("show");
//     });
// })

// $(document).ready(function(){
//     $("#changeHTML").load("List/list.html");
// })

$(list).click(function(){
    location.href="../List/list.html?type=list";
})

$(schedule).click(function(){
    location.href="../Schedule/schedule.html?type=schedule";
})

$(opensource).click(function (){
    $("#changeHTML").load("List/showDetails.html");
})