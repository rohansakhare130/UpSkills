
gsap.fromTo(
"svg",
    {rotate:0},
    {rotate:180, duration :0.2, repeat:-1, repeatDelay: 1, ease: "Power"}
)

// const sapns = document.querySelectorAll("span");

// sapns.forEach((el) => {
//     el.addEventListener("mouseover", () => {
//       gsap.fromTo(el, 
//         { rotate: 0 }, 
//         { rotateX: 380, duration: 1 }
//     );
//     });
//   });
  
//   gsap.fromTo(".ianima",
//     { rotate: 180 }, 
//     { rotateX: 380, duration: 1, repeat: 2 }
// );



const letters = document.querySelectorAll(".animation");
const letters2 = document.querySelector(".animation1");

console.log(letters);

gsap.fromTo(
  letters,
  {
    x: -200,
  },
  {
    duration: 0.5,
    x: 0,
    stagger: 0.3,
  }
);

gsap.fromTo(
  letters2,
  {
    opacity: 0,
    x: 0,
    y: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    y: 0,
  }
);



