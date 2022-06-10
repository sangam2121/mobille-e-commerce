var productBox = document.getElementById("productBox");
var frontImage = document.getElementById("front-image");
var backImage = document.getElementById("back-image");


// Function to Flip the Card to The right
flipRight = () => {
        productBox.style.transform = "rotateY(180deg)";
        frontImage.style.left = "650px";
        backImage.style.left = "20px";
        frontImage.style.transform = "rotate(-30deg)";
        backImage.style.transform = "rotate(0deg)";
    }
    // function to flip the card to the left
flipLeft = () => {
    productBox.style.transform = "rotateY(0deg)";
    frontImage.style.left = "20px";
    backImage.style.left = "-650px";
    frontImage.style.transform = "rotate(0deg)";
    backImage.style.transform = "rotate(-30deg)";
}