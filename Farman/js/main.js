const videoLinks = [
    "https://youtu.be/WChqIKw7DZo",
    "https://youtu.be/WnjFpHLYmPk",
    "https://youtu.be/FmN8pQEP4v4",
    "https://youtu.be/eCeKX1sVg38",
    "https://youtu.be/vDPY00ePASQ",
    "https://youtu.be/qlbL8Ro1zmY",
]

document.querySelector("#video1").addEventListener("click", () => {
    window.open(videoLinks[1 - 1]);
});
document.querySelector("#video2").addEventListener("click", () => {
    window.open(videoLinks[2 - 1]);
});
document.querySelector("#video3").addEventListener("click", () => {
    window.open(videoLinks[3 - 1]);
});
document.querySelector("#video4").addEventListener("click", () => {
    window.open(videoLinks[4 - 1]);
});
document.querySelector("#video5").addEventListener("click", () => {
    window.open(videoLinks[5 - 1]);
});
document.querySelector("#video6").addEventListener("click", () => {
    window.open(videoLinks[6 - 1]);
});