// Template Funktionen

let randomTitles = [];

let randomDescriptions = [];

let myImages = [
    "IMG20240710102643.jpg",
    "IMG20240722143955.jpg",
    "IMG20240726071653.jpg",
    "IMG20240730111029.jpg",
    "IMG20240731090051.jpg",
    "IMG20240815212431.jpg",
    "IMG20240915230112.jpg",
    "IMG20240926110250.jpg",
    "IMG20241006105006.jpg",
    "IMG20250404181141.jpg",
    "IMG20250912185329.jpg",
    "IMG20251229082106.jpg"];

function render() {
    let contentREf = document.getElementById('content');

    for (let index = 0; index < myImages.length; index++) {
        contentREf.innerHTML += getNotesHtml(index);
    }
}

function getNotesHtml(index){
 return `
 <img class="front_photo" src='./img/dialog/${myImages[index]}' alt='private photo'>
 `
}

// Dialog

function openDialog() {
    dialogRef.showModal();
    dialogRef.classList.add("opened");
}

function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove("opened");
    dialogRef.classList.add("closed")
}