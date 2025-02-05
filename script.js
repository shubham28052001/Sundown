const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});  // locomotive js cdn me jakar css or script cdn index.html me lagana hai cdn lagane ke liye path copy karna hoga phir locomotive js github se smooth me jakar code copy karna hai 


function page4animation(){
  var elemC=document.querySelector("#elem-container")
var fixed=document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
  fixed.style.display= "block";
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display= "none";
})

}
// var elem1=document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//     var image=elem1.getAttribute("data-image")
//     fixed.style.backgroundImage=`url(${image})`  
// })  //  for single element

function imageAnimation(){
  var elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
        fixed.style.backgroundImage=`url(${image})`
        
    })
})
} // for all element
function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

function loaderAnimation(){
  var loader = document.querySelector("#loader")
setTimeout(function(){
  loader.style.top= "-100%";
},4200)
}

page4animation()
imageAnimation()
swiperAnimation()
loaderAnimation()
