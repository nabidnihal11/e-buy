
// search 


document.getElementById('search-btn').addEventListener('click', function() {
    document.getElementById('search-box').classList.add("show");
});

document.getElementById("search-close").addEventListener("click", function () {
    document.getElementById("search-box").classList.remove("show");
});




// preloader 

$(window).on('load',function(){
    $('.preloader').fadeOut(1000);
})



// dark mode 

let mode_changer = document.getElementById('mode_changer');

mode_changer.addEventListener('click',function () {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.removeItem('mode')
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('mode','dark')
    }
})

if (localStorage.getItem('mode') == 'dark') {
    document.documentElement.classList.add('dark');
}




// venubox 

new VenoBox({
    autoplay: true,
});


// aos /wow js 
AOS.init();


// typed js 

var typed = new Typed("#new_product_type",{
    strings: [
        "Microsoft Surface Pro",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    shuffle: true,
 })


 

 var typed = new Typed("#featured_typed",{
    strings: [
        "Featured Products",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    shuffle: true,
 })

 var typed = new Typed("#shipping_type",{
    strings: [
        "Free Shipping",
        "24/7 Support",
        "Cashback"
    ],
    typeSpeed: 80,
    backSpeed: 20,
    loop: true,
    shuffle: true,
 })

 var typed = new Typed("#shipping_type_2",{
    strings: [
        "24/7 Support",
        "Free Shipping",
        "Cashback"
    ],
    typeSpeed: 80,
    backSpeed: 20,
    loop: true,
    shuffle: true,
 })

 var typed = new Typed("#shipping_type_3",{
    strings: [
        "Cashback",
        "24/7 Support",
        "Free Shipping",
    ],
    typeSpeed: 80,
    backSpeed: 20,
    loop: true,
    shuffle: true,
 })




 var typed = new Typed("#blog_head_typed",{
    strings: [
        "Our Blog"
    ],
    typeSpeed: 200,
    backSpeed: 40,
    loop: true,
    shuffle: true,
 })



 var typed = new Typed("#blog_typed",{
    strings: [
        "Best E-commerce I’d shopping yet",
        "I’ll never forget their hospitality",
        "I’m satisfy with their servicest"
    ],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true,
    shuffle: true,
 })

 var typed = new Typed("#blog_typed_2",{
    strings: [
        "I’m satisfy with their servicest",
        "I’ll never forget their hospitality",
        "Best E-commerce I’d shopping yet"
    ],
    typeSpeed: 70,
    backSpeed: 10,
    loop: true,
    shuffle: true,
 })


 var typed = new Typed("#blog_typed_3",{
    strings: [
        "I’ll never forget their hospitality",
        "Best E-commerce I’d shopping yet",
        "I’m satisfy with their servicest"
    ],
    typeSpeed: 60,
    backSpeed: 10,
    loop: true,
    shuffle: true,
 })








// banner slider

$(function(){
    $('.banner_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        // fade: true,
        prevArrow:'.banner_left_arrow',
        nextArrow:'.banner_right_arrow',
    })
})



// shopping slider

$(function(){
    $('.shoping_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        prevArrow:'.shopping_left_arrow',
        nextArrow:'.shopping_right_arrow',
        pauseOnHover: true,

    })
})

//  product slider 

$(function(){
    $('.product_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        prevArrow:'.produdct_left_arrow',
        nextArrow:'.produdct_right_arrow',
        pauseOnHover: true,

    })
})


// testimonial slider 



$(function(){
    $('.testimonial_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: true,
        // fade: true,
        prevArrow:'.test_left_arrow',
        nextArrow:'.test_right_arrow',
    })
})









// menu scroll 

$(function () {

    $(window).on('scroll', function () {
        var scrollSize = $(window).scrollTop()
        if (scrollSize > 500) {
            $('#backtotop').slideDown()
        } else {
            $('#backtotop').slideUp()
        }
  
  
        if (scrollSize > 500) {
            $('#navigation').addClass('active')
        } else {
            $('#navigation').removeClass('active')
        }
    })
  }) 
  
// backto top 

$('#backtotop').on('click', function () {
    $('html, body').animate({
        scrollTop:0,
    },1000)
})


// scroll Bottom 

$(function(){
    $('.scrollDown').click(function(){
        $('html, body').animate({
            scrollTop:5000,
        },5000)
    })
})



// count date 

var countDownDate = new Date("March 7, 2024 23:37:25").getTime();
                    var x = setInterval(function() 
                    {
                    var now = new Date().getTime();      
                    var distance = countDownDate - now;
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s ";                    
                    if (distance < 0) {
                        clearInterval(x);
                        document.getElementById("demo").innerHTML = "EXPIRED";
                    }
                    }, 1000);














