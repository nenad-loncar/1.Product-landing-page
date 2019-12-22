window.addEventListener('load', function() {
    
    /* Scroll on heder */
  window.addEventListener('scroll',function() {
    let header_container = document.getElementsByTagName('header');
    let start = header_container[0].offsetTop;
    console.log(window.pageYOffset);
    if(window.pageYOffset > 70) {
        header_container[0].classList.add('is-visible');
    } else {
        header_container[0].classList.remove('is-visible');
    }
  })
    
    
    /* Mobile menu */
    
    let hamburger = document.getElementById('hamburger__menu');

    hamburger.addEventListener('click', function(e) { 
        let navMenu = document.querySelector('.nav-menu');
        console.log(navMenu);
        navMenu.classList.toggle('active_menu');
    })
        
    
    /* Model change */
    
    let modelOne = document.querySelector('.model_1');
    let modelTwo = document.querySelector('.model_2');

    let modelOne_btn = document.getElementById('model_1');
    let modelTwo_btn = document.getElementById('model_2');

    modelOne.classList.add('active');
    modelTwo.classList.add('no_active');

    modelTwo_btn.addEventListener('click',function() {
        modelOne.classList.remove('active');
        modelOne.classList.add('no_active');
        modelTwo.classList.remove('no_active');
        modelTwo.classList.add('active');
    })

    modelOne_btn.addEventListener('click',function() {
        modelTwo.classList.remove('active');
        modelTwo.classList.add('no_active');
        modelOne.classList.remove('no_active');
        modelOne.classList.add('active');
    })
    


})


