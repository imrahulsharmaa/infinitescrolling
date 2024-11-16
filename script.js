const container = document.getElementById("container");
const count = 10;
const apiKey = "5GuS9q3OeQ-ld-NwngoqK1U_4DzXDBgVwhvS5n4wjac";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let photosArray = [];
function setAttribute(element ,attributes){
    for(const key in attributes){
        element.setAttribute(key,attributes[key]);
    }

}
function displayImage(){
    photosArray.forEach((photo)=>{
        const item = document.createElement("a");
        setAttribute(item,{
            href:photo.links.html,
            target:"_blank",
        });
        const img = document.createElement("img");
        setAttribute(img,{
            src:photo.urls.regular,
            alt:`${photo.description}`,

        });

        item.append(img);
        container.append(item);
    });
}


async function getPhotos(){
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayImage();
}

window.addEventListener('scroll' , ()=>{
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight-5){
        getPhotos();
    }
})
getPhotos();
