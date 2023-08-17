document.addEventListener("DOMContentLoaded", function() {
const imageContainer = document.getElementById("imageContainer");
const randomImage = document.getElementById("randomImage");

const imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

const randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)];

randomImage.src = "./images/" + randomImageName;
}
);
