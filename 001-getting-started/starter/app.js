const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  h1.textContent = "Welcome Bigi";

  console.log("Click");
});
// const myImages = document.querySelector("img");

// myImages.onclick = () => {
//   const mySrc = myImages.getAttribute("src");
//   console.log(mySrc, "ss");

//   if (mySrc === "setup.jpg") {
//     myImages.setAttribute("src", "setup-2.jpg");

//     console.log("click");
//   } else {
//     myImages.setAttribute("src", "setup.jpg");
//     console.log("click");
//   }
// };
