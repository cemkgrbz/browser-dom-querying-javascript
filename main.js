
const body = document.querySelector("body");
body.style.fontFamily = "Arial"

const title = document.querySelector(".title");
title.style.textAlign = "center"

// document.querySelector(".title").style.textAlign = "center"

const main = document.querySelector("main");
main.style.display = "flex"
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.gap = "4rem";
main.style.flexFlow = "row wrap";

const category = document.querySelectorAll(".category");
category.forEach(el => {
    el.style.color = 'black';
    el.style.fontStyle = 'italic';
    el.style.textDecoration = 'underline';
    el.style.fontSize = "1.5rem"
  });

const foodCategory = document.querySelectorAll(".food-category");
foodCategory.forEach(el => {
    el.style.backgroundColor = getRandomColor();
    el.style.width = '18rem';
    el.style.paddingTop = "1rem"
    el.style.paddingBottom= "1rem"
  });


const foodItem = document.querySelectorAll(".food-item");
foodItem.forEach(el => {
    el.style.marginTop = '1rem';
  });

const allergyWarning = document.querySelector(".allergy-warning");
allergyWarning.style.textAlign = "center"

const allergyInfo = document.querySelectorAll(".allergy-info");
allergyInfo.forEach(el => {
    el.style.textAlign = "left"
    el.style.width = "15rem"
    el.style.listStyle = "none"
    el.style.marginBottom = "5px"
});

const allergyInfoEven = document.querySelectorAll(".allergy-info:nth-child(even)")
allergyInfoEven.forEach(el => {
    el.style.backgroundColor = "lightBlue"
    el.style.marginBottom = "lightBlue"
})

const allergies = document.querySelector(".allergies")
allergies.style.display = "flex"
allergies.style.flexFlow = "column";
allergies.style.justifyContent = "center";
allergies.style.alignItems = "center";

document.getElementById("warning").style.fontSize = "2rem"

const footer = document.querySelector("footer")
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.gap = "10rem";
footer.style.flexFlow = "row wrap";


const foodDesc = document.querySelectorAll(".food-desc");
foodDesc.forEach(el => {
    el.style.border = '2px solid red';
    el.style.borderRadius = '100%';
    el.style.height = "6rem";
    el.style.width = "6rem";
    el.style.display = "flex";
    el.style.justifyContent = "center";
    el.style.alignItems = "center";
    el.style.marginTop = "2rem";
  });



  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //or 

  const getRandomColorV2 = () => {
    const r1 = Math.ceil(Math.random() * 255);
    const r2 = Math.ceil(Math.random() * 255);
    const r3 = Math.ceil(Math.random() * 255);
    const r4 = Math.random().toFixed(1);
  
    return `rgba(${r1}, ${r2}, ${r3}, ${r4})`;
  };