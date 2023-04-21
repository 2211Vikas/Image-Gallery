let imageListURL = 'imgData.json';
let imageData;
let htmltoReturn = " ";
let  i=0;
async function loadImages(ImageListURL){
    fetch(ImageListURL) //we took
    // checked data is coming
    .then(response => response.json())
    //perform action on data
    .then(json=>{
        imageData = json;
        console.log(imageData)
        imageData.imgDataArr.forEach(element => {
            htmltoReturn = `
            <div class="imgCard">
                <img src="${element.imgSrc}" alt="" class="cardimg">
                <div class="hover-part">
                    <p class="cardText">${element.name}</p>
                    <button class="cardBtn"><i class="fa-solid fa-download"></i></button>
                </div>   
            </div>`
        document.querySelector('#imgCardArea').innerHTML += htmltoReturn;
        });
    })
}

loadImages(imageListURL)