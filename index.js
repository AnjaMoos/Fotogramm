let currentIndex = 0;

// Template Funktionen

let titles = ["Enrntereifes Gerstenfeld",
    "Sonne nach dem Regen über dem Weizenfeld",
    "Atemberaubendes Seeufer",
    "Schwarzer Schwan im Stausee",
    "Kreative Wohnung",
    "Burg Trausniz in Landshut",
    "Peter Fox Konzert in Wien 2024",
    "Salzgrotte in Landshut",
    "Frühstück in Basel",
    "Wake and Groove in Geisenfeld",
    "Ich im Pelzmantel",
    "Winterlandschaft"

];

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

function getNotesHtml(index) {
    return `
 <img onclick="openDialog(${index})" class="front_photo" src='./img/dialog/${myImages[index]}' alt='private photo'>
 `
}

// Dialog

function openDialog(index) {
currentIndex = index;

    let dialogRef = document.getElementById('myDialog');
    let imageRef = document.getElementById('dialogImage');
    let titleRef = document.getElementById('dialogTitle');


    titleRef.innerText = titles[currentIndex];


    imageRef.innerHTML = `
        <img class="dialog_img" src="./img/dialog/${myImages[currentIndex]}" alt="private photo">
    `;


    dialogRef.showModal();
    dialogRef.classList.add("opened");
}

function closeDialog() {
    let dialogRef = document.getElementById('myDialog')
    dialogRef.close();
    dialogRef.classList.remove("opened");
    dialogRef.classList.add("closed")
}

function nextPicture(){
       currentIndex++;

    if (currentIndex >= myImages.length) {
        currentIndex = 0; 
    }

    updateDialogImage();
}


function pictureBackwards(){
      currentIndex--;

    if (currentIndex < 0) {
        currentIndex = myImages.length - 1; // zum letzten Bild
    }

    updateDialogImage();
}

function updateDialogImage() {
    let imageRef = document.getElementById('dialogImage');
    let titleRef = document.getElementById('dialogTitle');

    titleRef.innerText = titles[currentIndex];

    imageRef.innerHTML = `
        <img class="dialog_img"
             src="./img/dialog/${myImages[currentIndex]}"
             alt="private photo">
    `;
}