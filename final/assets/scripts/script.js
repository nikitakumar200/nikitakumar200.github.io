let numImages = 78;
let firstPic = 75;

let book1 = document.getElementById("carousel-image-1");
let book2 = document.getElementById("carousel-image-2");
let book3 = document.getElementById("carousel-image-3");
let book4 = document.getElementById("carousel-image-4");
let book5 = document.getElementById("carousel-image-5");
let book6 = document.getElementById("carousel-image-6");
let book7 = document.getElementById("carousel-image-7");

let books = [book1, book2, book3, book4, book5, book6, book7];

function nextImage() {
    document.getElementsByClassName("three")[0].animate([
        { opacity: 0 },
        { opacity: .25 }
      ], {
        duration: 600,
      });
      document.getElementsByClassName("four")[0].animate([
        { opacity: .25},
        { opacity: 0 }
      ], {
        duration: 600,
      });
      document.getElementsByClassName("five")[0].animate([
        { opacity: .5},
        { opacity: .25 }
      ], {
        duration: 600,
      });
    for (let i = 0; i < 7; i++) {
        let picNum = (firstPic + i + 1) % numImages;
        let pic = "url(assets/img/books/book" + (picNum + 1) + ".jpeg)";
       /*books[i].style.backgroundImage = pic; */
       books[i].style.backgroundImage = pic;
    }
    firstPic = (firstPic + 1) % numImages;
}

function prevImage() {
    document.getElementsByClassName("three")[0].animate([
        { opacity: .5 },
        { opacity: .25 }
      ], {
        duration: 600,
      });
      document.getElementsByClassName("four")[0].animate([
        { opacity: .25},
        { opacity: 0}
      ], {
        duration: 600,
      });
      document.getElementsByClassName("five")[0].animate([
        { opacity: 0},
        { opacity: .25 }
      ], {
        duration: 600,
      });
    for (let i = 0; i < 7; i++) {
        let picNum = (firstPic + i + numImages - 1) % numImages;
        let pic = "url(assets/img/books/book" + (picNum + 1) + ".jpeg)";
       /*books[i].style.backgroundImage = pic; */
       books[i].style.backgroundImage = pic;
    }
    firstPic = (firstPic + numImages - 1) % numImages;
}

document.getElementById("next-button").onclick = nextImage;
document.getElementById("previous-button").onclick = prevImage;

