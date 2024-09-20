
function nameanimation(){
    gsap.from(".name" , {
        y:-30,
        duration:0.9,
        delay:0.8,
        opacity:0
    })
}

function navanimation(){
    gsap.from("#part2 a" , {
        y:-30,
        duration:0.9,
        delay:0.8,
        opacity:0,
        stagger:0.4
    })
}

function imageanimation(){
    gsap.from("#img-container img" , {
        y:-30,
        duration:0.9,
        delay:0.8,
        opacity:0
    })
}
imageanimation()
navanimation()
nameanimation()

//moving cursor function
var cursor = document.querySelector("#cursor")


window.addEventListener("mousemove" , function(dets){
    gsap.to(cursor , {
        x:dets.x,
        y:dets.y,
        duration:0.8,
        ease:"back.out"
    })
}) 


//container effect
function name_effect() { 
    // Use GSAP to animate the #name-text element
    gsap.from("#name-text", {
        y: 30,
        duration: 2,
        delay: 0.8,
        stagger: 1,
        opacity:0
    });
}
name_effect()

//infinite rolling animation
function wheelAnimation(){
    window.addEventListener("wheel" , function(dets){
        if(dets.deltaY > 0){
            gsap.to(".mark" , {
                transform: "translate(-200%)",
                duration:6,
                repeat:-1,
                ease:"none"
            })
    
            gsap.to(".mark img", {
                rotate:180
            })
        }
        else{
            gsap.to(".mark" , {
                transform: "translate(0%)",
                duration:6,
                repeat:-1,
                ease:"none"
            })
            gsap.to(".mark img", {
                rotate:0
            })
        }
    })
}

wheelAnimation()

//project animation and js
gsap.from("#page3 h1", {
    scale: 0,
    y: -30,
    duration: 0.9,
    delay:0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      markers: true,
      start: "top 50%", // Starts when #page3 is halfway into the viewport
      end: "top -150%",
      pin: true
    }
  });


var elemc = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter" , function(){
    fixed.style.display = "block"
})
elemc.addEventListener("mouseleave" , function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter" , function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})



var path = "M 10 100 Q 500 100 990 100"

var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector("#string")

string.addEventListener("mousemove" , function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`,
    gsap.to("svg path" , {
        attr:{d:path},
        duration:1.5,
        ease:"power3.out",

    })
})

string.addEventListener("mouseleave" , function(){
    gsap.to("svg path" , {
        attr : { d:finalPath},
        duration:2,
        ease:"elastic.out(1,0.2)"
    })
})
