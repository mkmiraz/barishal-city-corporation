(function(){
    $(document).ready(function(){
        // Tom bene 
        $('.owl-carousel').owlCarousel({
            items:1,
            loop:true,
            margin:0,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            nav:false

        })

        // galary benar
        var swiper = new Swiper(".galary_slider", {
            spaceBetween: 10,
            slidesPerView: 1,
            freeMode: true,
            autoplay:true,
            loop:true,
            watchSlidesProgress: true,
          });
          var swiper2 = new Swiper(".galary_sot_slider", {
            spaceBetween: 10,
            slidesPerView: 5,
            autoplay:true,
            loop:true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            thumbs: {
              swiper: swiper,
            },
          });

        //   news box slider text
          var swiper = new Swiper(".news_slider", {
            direction: "vertical",
            slidesPerView: 1,
            loop: true,
            spaceBetween: 30,
            mousewheel: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });

    });
})(jQuery)


const bars = document.querySelector('.bars ');

bars.onclick = () => { 
  const nav_area = document.querySelector('.nav_area');
  nav_area.style.display = nav_area.style.display === 'none' ? 'flex' : 'none';
  
}



if(window.innerWidth >= 1020){
  document.addEventListener('DOMContentLoaded', function () {
    // Select all navigation items
    const navItems = document.querySelectorAll('.nav_items');

    navItems.forEach(item => {
        // Add mouseenter event listener
        item.addEventListener('mouseenter', function () {
            // Select the corresponding sub_nav_area and display it
            this.querySelector('.sub_nav_area').style.display = 'flex';
        });

        // Add mouseleave event listener
        item.addEventListener('mouseleave', function () {
            // Select the corresponding sub_nav_area and hide it
            this.querySelector('.sub_nav_area').style.display = 'none';
        });
    });
});

}



if (window.innerWidth <= 1020) {
  document.addEventListener('DOMContentLoaded', function () {
      // Select all navigation items
      const navItems = document.querySelectorAll('.nav_items');

      navItems.forEach(item => {
          // Add click event listener
          item.addEventListener('click', function () {
              // Select the corresponding sub_nav_area
              const subNavArea = this.querySelector('.sub_nav_area');
              
              // Toggle the display between 'flex' and 'none'
              subNavArea.style.display = subNavArea.style.display === 'none' ? 'flex' : 'none';
              
          });
      });
  });
}
