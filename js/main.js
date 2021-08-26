$(document).ready(function(){


  // Filtering...........
    let btns = $(".button-group button");

    btns.click(function(e){
        $(".button-group button").removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr("data-filter"); 
        $(".grid").isotope({
            filter: selector
        });
        return false;
    })

    // Adding sticky navbar................

    window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
              document.getElementById('navbar_top').classList.add('fixed-top');
              navbar_height = document.querySelector('.navbar').offsetHeight;
              document.body.style.paddingTop = navbar_height + 'px';
            } else {
              document.getElementById('navbar_top').classList.remove('fixed-top');
            //    remove padding top from body
              document.body.style.paddingTop = '0';
            } 
        });

        // Smooth Scrolling.....................

        document.querySelector('.navbar-nav').addEventListener('click',function(e){
          e.preventDefault();
          if (e.target.classList. contains('nav-link')){
              const id = e.target.getAttribute('href');
              document.querySelector(id).scrollIntoView({
                  'behaviour ' : 'smooth'
              })
          }
      });


      });