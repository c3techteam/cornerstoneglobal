
  ////detector
  
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
/////////end script



  

  // pagination
  function getPageList(totalPages, page, maxLength){
    function range(start, end){
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }
  
    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  
    if(totalPages <= maxLength){
      return range(1, totalPages);
    }
  
    if(page <= maxLength - sideWidth - 1 - rightWidth){
      return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }
  
    if(page >= totalPages - sideWidth - 1 - rightWidth){
      return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }
  
    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
  }
  
  $(function(){
    var numberOfItems = $(".card-content .card").length;
    var limitPerPage = 8; //How many card items visible per a page
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 7; //How many page elements visible in the pagination
    var currentPage;
  
    function showPage(whichPage){
      if(whichPage < 1 || whichPage > totalPages) return false;
  
      currentPage = whichPage;
  
      $(".card-content .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
  
      $(".pagination li").slice(1, -1).remove();
  
      getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
        .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
        .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
      });
  
      $(".previous-page").toggleClass("disable", currentPage === 1);
      $(".next-page").toggleClass("disable", currentPage === totalPages);
      return true;
    }
  
    $(".pagination").append(
      $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
      $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next"))
    );
  
    $(".card-content").show();
    showPage(1);
  
    $(document).on("click", ".pagination li.current-page:not(.active)", function(){
      return showPage(+$(this).text());
    });
  
    $(".next-page").on("click", function(){
      return showPage(currentPage + 1);
    });
  
    $(".previous-page").on("click", function(){
      return showPage(currentPage - 1);
    });
  });
  
  
  
  
  // search 
  
  const search =() =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("card-content")
    const card = document.querySelectorAll(".card")
    const pname = document.getElementsByTagName("h3")
  const pyt = document.getElementsByTagName("p")
    for(var i=0; i < pname, pyt.length; i++){
      let match = card[i].getElementsByTagName('h3', 'p')[0];
  
      if (match){
        let textValue = match.textContent || match.innerHTML
  
        if (textValue.toUpperCase().indexOf(searchbox) > -1){
          card[i].style.display = "";
  
        } else {
          card[i].style.display = "none";
          // card[i].style.innerHTML = "NOT FOUND";
        }
      }
    }
  }
   
////
// const btn = document.querySelector("button");
// const post = document.querySelector(".post");
// const widget = document.querySelector(".star-widget");
// const editBtn = document.querySelector(".edit");
// btn.onclick = ()=>{
//   widget.style.display = "none";
//   post.style.display = "block";
//   editBtn.onclick = ()=>{
//     widget.style.display = "block";
//     post.style.display = "none";
//   }
//   return false;
// } 