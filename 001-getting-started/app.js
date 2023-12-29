const myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");

// myHeading.textContent = "Hello World";

// document
//   .querySelector("html")
//   .addEventListener("click", () => alert("Ouch! Uncle stop touching"));

const myImages = document.querySelector("img");

myImages.onclick = () => {
  const mySrc = myImages.getAttribute("src");
  console.log(mySrc, "ss");

  if (mySrc === "setup.jpg") {
    myImages.setAttribute("src", "setup-2.jpg");

    console.log("click");
  } else {
    myImages.setAttribute("src", "setup.jpg");
    console.log("click");
  }
};

function setUserName() {
  const username = prompt("Please enter your name");

  if (!username) {
    setUserName();
  } else {
    localStorage.setItem("user", username);

    myHeading.textContent = `Hello ${username}`;
  }
}

if (!localStorage.getItem("username")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("username");

  myHeading.textContent = `Hello ${username}`;
}

myButton.onclick = () => setUserName();
// myImages.addEventListener("click", () => {
//   const mySrc = myImages.getAttribute("src");
//   console.log(mySrc, "ss");

//   if (mySrc === "setup.jpg") {
//     myImages.setAttribute("src", "setup-2.jpg");
//   } else {
//     myImages.setAttribute("src", "setup.jpg");
//   }
// });
// console.log(myImages);
