/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))




// swiper
const swiper = new Swiper(".swiper-hero", {
    // Optional parameters
    // slidesPerView: "auto",
    // spaceBetween: 15,
    // slidesPerGroupAuto: true,
  
    direction: "horizontal",
    loop: true,
    // allowTouchMove: true,
    // effect: "cube",
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      // type: "progressbar"
      clickable: true,
      // dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    //   draggable: true,
    // },
  });



// serie lista
let listVideo = document.querySelectorAll('.video-list .vid');
  let mainVideo = document.querySelector('.main-video iframe');
  let title = document.querySelector('.main-video .title');
  
  listVideo.forEach(video =>{
      video.onclick = () =>{
  
          listVideo.forEach(vid => vid.classList.remove('active'));
  
          video.classList.add('active');
  
          if(video.classList.contains('active')){
  
              let src = video.children[0].getAttribute('src');
  
              mainVideo.src = src;
  
              let txt = iframe.children[1].innerHTML
              
              title.innerHTML = txt;
  
          };
      };
  });