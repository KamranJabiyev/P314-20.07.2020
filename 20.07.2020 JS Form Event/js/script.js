// let allMenu = document.querySelectorAll("#tab-menu .menu div");
// let allItem = document.querySelectorAll(".item");

// for (const menu of allMenu) {
//     menu.addEventListener("click", function () {
//         let active = document.querySelector(".active");
//         active.classList.remove("active");
//         this.classList.add("active");

//         let id = this.getAttribute("data-id");
//         for (const item of allItem) {
//             if (item.getAttribute("data-id") == id) {
//                 item.classList.remove("d-none")
//             } else {
//                 item.classList.add("d-none")
//             }
//         }
//     })
// }

//Tab menu end

//Form Events


// let slct=document.getElementById("sheher")

// slct.onchange=function(){
//     console.log("Bashqa sheher sechildi")
// }

// input.addEventListener("blur",function(){
//     console.log("inputdan blur olundu")
// })

// input.addEventListener("focus",function(){
//     console.log("inputa focus olundu")
// })

// input.addEventListener("change",function(){
//     console.log("inputun deyeri deyishdi")
// })


// input.addEventListener("keypress",function(){
//     console.log("keypress")
// })

// input.addEventListener("keyup",function(){
//     console.log("keyup")
// })

// input.addEventListener("keydown",function(){
//     console.log("keydown")
// })
// let input=document.getElementById("text");

// input.onkeyup=function(){
//     if(this.value==""){
//         this.nextElementSibling.classList.remove("d-none")
//     }else{
//         this.nextElementSibling.classList.add("d-none")
//     }
// }

// input.onblur=function(){
//     if(this.value==""){
//         this.nextElementSibling.classList.remove("d-none")
//     }
// }

// document.getElementById("form").addEventListener("submit",function(ev){
//     ev.preventDefault();
//     if(input.value==""){
//         input.nextElementSibling.classList.remove("d-none")
//     }
// })


//Slider Start

let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
let images = document.querySelector(".images");

rightBtn.addEventListener("click", function () {
    let active = document.querySelector(".active");
    active.classList.remove("active");
    if (active.nextElementSibling != null) {
        active.nextElementSibling.classList.add("active");
    }else{
        images.firstElementChild.classList.add("active");
    }
})

leftBtn.addEventListener("click", function () {
    let active = document.querySelector(".active");
    active.classList.remove("active");
    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add("active");
    }else{
        images.lastElementChild.classList.add("active");
    }
})