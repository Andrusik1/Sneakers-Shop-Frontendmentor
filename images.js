// ======================= Variable Assigment  =======================
const images = document.querySelectorAll('.active-slider');

const sliderbox = document.querySelector('.slider');
const imageWhenSlideron =  document.querySelectorAll(".active-slideron");
const mainImage = document.querySelector('.slider__image--main');
const nextImage = document.querySelector('.next');
const prevImage = document.querySelector('.prev');
const mainImageMobile = document.querySelector('.img-main');
const imgArray = ['images/image-product-1.jpg','images/image-product-2.jpg','images/image-product-3.jpg','images/image-product-4.jpg'];
// ======================= Enter to slider-mode  =======================
images.forEach(element => {
    element.addEventListener("click", ()=>{
        
        sliderbox.style.display = 'flex';
       imageWhenSlideron.style.fliter = 'brightness(100%)';
    })
});
const exit = () => sliderbox.style.display = 'none';
// ======================= Change image on click  =======================
imageWhenSlideron.forEach(element =>
    {
        element.addEventListener("click", () =>{
                let text = element.src;
                text = text.replaceAll(/-thumbnail/g,"");
                mainImage.src = text;
        })
        
    });
    // ======================= Change image on buttonclick =======================
const findimg = element => {
let text = mainImage.src;
text =text.replaceAll('https://andrusik1.github.io/Sneakers-Shop-Frontendmentor/',"");
console.log(text);
return text;
};
const changeImgArrows = type =>
{
    let acutalImg = imgArray.indexOf(findimg());
    console.log(acutalImg);
   
      
    if (type == "prev" || type ==  "prev_mobile")
    {
        if(acutalImg == 0 || acutalImg == -1 )
        {
            acutalImg = 4;
        }
        mainImage.src = imgArray[acutalImg - 1];
    }
    else
    {
        if(acutalImg == 3 )
        {
            acutalImg = -1;
        }
        mainImage.src = imgArray[acutalImg + 1];
    }
    
};

const findimgm = element => {
let text = mainImageMobile.src;
text =text.replaceAll('https://andrusik1.github.io/Sneakers-Shop-Frontendmentor/',"");
console.log(text);
return text;
};

const changeImgArrowsmobile = type =>
{
    let acutalImg = imgArray.indexOf(findimgm());
    if (type == "prev_mobile")
    {
        if(acutalImg == 0 || acutalImg == -1 )
        {
            acutalImg = 4;
        }
        mainImageMobile.src = imgArray[acutalImg - 1];
    }
    else
    {
        if(acutalImg == 3 )
        {
            acutalImg = -1;
        }
        mainImageMobile.src = imgArray[acutalImg + 1];
    }
    
};
