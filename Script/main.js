const mobileNav = document.querySelectorAll(".MobileNav");
let nav = document.getElementById("nav");
let open = document.getElementById("open");
let close = document.getElementById("close")

console.log(mobileNav)

mobileNav[0].addEventListener("click",_=>{
    nav.classList.toggle("show");

    toggle(open);
    toggle(close)
})


function toggle(x) {
    x.classList.toggle("d-block");
    x.classList.toggle("d-none");
}
