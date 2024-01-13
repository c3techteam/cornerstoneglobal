
(() =>{
 
  const openNavMenu = document.querySelector(".open-nav-menu"),
  closeNavMenu = document.querySelector(".close-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
          window.innerWidth <= mediaSize){
          // prevent default anchor click behavior
          event.preventDefault();
          const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
            collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
            collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
      navMenu.querySelector(".menu-item-has-children.active .sub-menu")
      .removeAttribute("style");
      navMenu.querySelector(".menu-item-has-children.active")
      .classList.remove("active");
  }
  function resizeFix(){
       // if navMenu is open ,close it
       if(navMenu.classList.contains("open")){
           toggleNav();
       }
       // if menuItemHasChildren is expanded , collapse it
       if(navMenu.querySelector(".menu-item-has-children.active")){
            collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
         resizeFix();
     }
  });
 })();

    
     
//setconnection detector
const offlineConnection = document.querySelector('.offline')
  const onlineConnection = document.querySelector('.online')
  const closeBtn = document.querySelectorAll('.close')
  const refreshBtn = document.querySelector('.refreshBtn')

  function online() {
    offlineConnection.classList.remove('active')
    onlineConnection.classList.add('active')
  }
  function offline() {
    offlineConnection.classList.add('active')
    onlineConnection.classList.remove('active')
  }3

  window.addEventListener('online',()=>{
    online();
    setTimeout(() => {
      onlineConnection.classList.remove('active')
    }, 10000);
  })
  window.addEventListener('offline',()=>{
    offline();
    setTimeout(() => {
      
      offlineConnection.classList.remove('active')
    }, 10000);
  })

  for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click',()=>{
      closeBtn[i].parentNode.classList.remove('active');
      if (closeBtn[i].parentNode.classList.contains('offline')) {
        setTimeout(() => {
          closeBtn[i].parentNode.classList.add('active');
        }, 500);
      }
    })
  }

  refreshBtn.addEventListener("click",()=>{
    window.location.reload();
  })
/////////en
$(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 300) {
        $(".header-main").css("background" , "#fff");
      
      
         
      }

      else{
          $(".header-main").css("background" , "transparent" );  
         
        
      }
  })
})



