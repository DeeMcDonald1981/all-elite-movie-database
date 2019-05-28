let i = 0;
let images = [];
let time = 3000;

images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';
images[3] = 'image4.jpg';



function changeImg(){
    document.querySelectorAll('.movies');
    if(i < images.length -1){
        i++;
    }else{
        i =0;
    }

    setTimeout('changeImg()', time);
}

