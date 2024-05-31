const parts = ["Elvin", "Aysel", "Fərid", "Səbinə"];

var exchange = document.getElementsByClassName("exchange")[0];

var addEnd = document.getElementById("add-end");
var addFront = document.getElementById("add-front");

var addEndBtn = document.getElementById("addEnd-btn");
var addFrontBtn = document.getElementById("addFront-btn");

var deleteEnd = document.getElementById("delete-end");
var deleteFront = document.getElementById("delete-front");

parts.forEach((element, index) => {
    exchange.innerHTML += `
    <div class="alert alert-danger" role="alert">
      ${index} - index ${element}
     </div>
`
})


//* PUSH
addEndBtn.addEventListener("click", function () {
    parts.push(addEnd.value);
    // console.log(parts);
    exchange.innerHTML = "";
    parts.forEach((element, index) => {
        exchange.innerHTML += `
    <div class="alert alert-danger" role="alert">
      ${index} - index ${element}
     </div>
     ${addEnd.value = ""}
`
    })
})


//* POP
deleteEnd.addEventListener("click", () => {
    parts.pop();
    // console.log(parts);
    exchange.innerHTML = "";
    parts.forEach((element, index) => {
        exchange.innerHTML += `
    <div class="alert alert-danger" role="alert">
      ${index} - index ${element}
     </div>
`
    });
})


//* UNSHİFT
addFrontBtn.addEventListener("click", function () {
    parts.unshift(addFront.value);
    // console.log(parts);
    exchange.innerHTML = "";
    parts.forEach((element, index) => {
        exchange.innerHTML += `
    <div class="alert alert-danger" role="alert">
      ${index} - index ${element}
     </div>
`
    })
})


//* SHİFT
deleteFront.addEventListener("click", () => {
    parts.shift();
    // console.log(parts);
    exchange.innerHTML = "";
    parts.forEach((element, index) => {
        exchange.innerHTML += `
    <div class="alert alert-danger" role="alert">
      ${index} - index ${element}
     </div>
`
    });
})