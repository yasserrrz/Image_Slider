let productList = Array.from(document.querySelectorAll(".item img"));
let boxShow = document.querySelector("#boxShow");
let innerBox = document.querySelector(".innerBox");
let closeEle = document.querySelector(".xm");
let nextEle = document.querySelector(".next");
let previousEle = document.querySelector(".previous");
let currentIndex;

for (let i = 0; i < productList.length; i++) {
    productList[i].addEventListener("click", function (element) {
        currentIndex = i;
        let productSrc = element.target.getAttribute("src");
        boxShow.style.display = "flex";
        innerBox.style.backgroundImage = `url(${productSrc})`;
    })
}

nextEle.addEventListener("click", nextfun)
previousEle.addEventListener("click", prevfun);
document.addEventListener("keyup", function (ele) {

    if (ele.key == "ArrowRight") {
        nextfun()
    } else if (ele.key == "ArrowLeft") {
        prevfun()
    } else if (ele.key == "Escape") {
        closefun()
    }
})
function nextfun() {
    currentIndex++;
    if (currentIndex == productList.length) {
        currentIndex = 0;
    }
    let productSrc = productList[currentIndex].getAttribute("src");
    innerBox.style.backgroundImage = `url(${productSrc})`;

}

function prevfun() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = productList.length - 1;

    }
    let productSc = productList[currentIndex].getAttribute("src");
    innerBox.style.backgroundImage = `url(${productSc})`;

}

closeEle.addEventListener("click", closefun);
boxShow.addEventListener("click", function (ele) {
    if (ele.target.id == 'boxShow') {
        closefun()
    }
})

function closefun() {
    boxShow.style.display = "none";
}