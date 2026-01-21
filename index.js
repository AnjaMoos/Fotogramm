let currentIndex = 0;
const CONTENT = document.getElementById('content');

// Template Funktionen

let titles = ["Enrntereifes Gerstenfeld",
    "Sonne nach dem Regen über dem Weizenfeld",
    "Atemberaubendes Seeufer",
    "Schwarzer Schwan im Stausee",
    "Kreative Wohnung",
    "Burg Trausniz in Landshut",
    "Salzgrotte in Landshut",
    "Frühstück in Basel",
    "Wake and Groove in Geisenfeld",
    "Vollmond",
    "Blick von der Herreninsel am Chimsee",
    "Winterlandschaft"

];

let myImages = [
    "IMG20240710102643.jpg",
    "IMG20240722143955.jpg",
    "IMG20240726071653.jpg",
    "IMG20240730111029.jpg",
    "IMG20240731090051.jpg",
    "IMG20240815212431.jpg",
    "IMG20240926110250.jpg",
    "IMG20241006105006.jpg",
    "IMG20250404181141.jpg",
    "IMG20250906212443.jpg",
    "IMG20250918125203(1).jpg",
    "IMG20251229082106(1).jpg"
];


let descriptions = [
    "Barley field",
    "wheat field",
    "lakeside",
    "young swan",
    "creative apartment",
    "castle at night",
    "grotto",
    "breakfast outside",
    "wakeboarding",
    "Full moon",
    "bridge at the lakeside",
    "winter landscape",
];

function render() {
    for (let index = 0; index < myImages.length; index++) {
        CONTENT.innerHTML += getNotesHtml(index);
    }
}

function getNotesHtml(index) {
    return `
 <img onclick="openDialog(${index})" class="front_photo" src='./img/dialog/${myImages[index]}' alt='${descriptions[index]}'>
 `
}

// Dialog

function openDialog(index) {
    let dialogRef = document.getElementById('myDialog');
    let imageRef = document.getElementById('dialogImage');
    let titleRef = document.getElementById('dialogTitle');


    currentIndex = index;
    dialogRef.showModal();

    titleRef.innerText = titles[currentIndex];

    imageRef.innerHTML = dialogImageHtml(currentIndex);

    dialogRef.classList.add("opened");
}

function closeDialog() {
    let dialogRef = document.getElementById('myDialog');

    dialogRef.close();
    dialogRef.classList.remove("opened");
    dialogRef.classList.add("closed")
}

function closeDialogPrevention(event) {
    event.stopPropagation();
}

function nextPicture() {
    currentIndex++;

    if (currentIndex >= myImages.length) {
        currentIndex = 0;
    }

    updateDialogImage();
}


function pictureBackwards() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = myImages.length - 1;
    }

    updateDialogImage();
}

function updateDialogImage() {
    let imageRef = document.getElementById('dialogImage');
    let titleRef = document.getElementById('dialogTitle');


    titleRef.innerText = titles[currentIndex];

    imageRef.innerHTML = dialogImageHtml(currentIndex);
}

function dialogImageHtml(currentIndex) {
    return `
        <img class="dialog_img"
             src="./img/dialog/${myImages[currentIndex]}"
             alt="private photo">
    `;
}