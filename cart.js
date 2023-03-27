// ======================= Variable assigments =======================
const cart = document.querySelector(".header__cart--content");
const carticon = document.querySelector(".header__cart--icon");
const cartemptytext = document.querySelector(".header__cart--content2");
const number = document.querySelector(".number");
carticon.setAttribute("fill", "#69707D");
//  ======================= Cart Popup =======================
carticon.addEventListener("click", () =>{
if(cart.style.opacity == 0) 
{
cart.style.opacity = 1;
carticon.setAttribute("fill", "hsl(220, 13%, 13%)");
}
else{
  cart.style.opacity = 0;
  carticon.setAttribute("fill", "#69707D");
} 
});

// ======================= Increment and Decrement number of product =======================
const inc = () => number.innerHTML = parseFloat(number.innerHTML) + 1;
const dec = () => parseFloat(number.innerHTML) > 1? number.innerHTML = parseFloat(number.innerHTML) - 1 : console.log("liczba nie może być ujemna");

// ======================= Create/Delete Product Element in cart =======================
function additemtocart () {
  const numberofproducts = document.querySelector(".number");
    if(!document.querySelector(".header__cart--content3")){
      
    document.querySelector(".header__cart--productcounter").style.display = "flex";
    document.querySelector(".header__cart--productcounter").innerHTML = numberofproducts.innerHTML;
cartemptytext.style.display = 'none';

const Itemcomponent = document.createElement('div');
Itemcomponent.classList.add('header__cart--content3');

const img = document.createElement('img');
img.src = 'images/image-product-1-thumbnail.jpg';
img.alt = 'sneakers-thumbnail';

const Carttext = document.createElement('div');
Carttext.classList.add('cart-text');

const p1 = document.createElement('p');
p1.textContent = 'Fall Limited Edition Sneakers';

const p2 = document.createElement('p');
p2.classList.add('numberofproducts')
p2.innerHTML = `$125.00 x ${numberofproducts.innerHTML} <b>${125*numberofproducts.innerHTML}.00$</b>`;

Carttext.appendChild(p1);
Carttext.appendChild(p2);

const img2 = document.createElement("img");
img2.src= 'images/icon-delete.png';
img2.alt = "delete";
img2.classList.add('header__cart--content3bin');

const Checkout = document.createElement('div');
Checkout.classList.add('header__cart--checkout');

const Checkoutbutton = document.createElement('button');
Checkoutbutton.classList.add('header__cart--checkoutbutton');
Checkoutbutton.textContent = 'Checkout';

Itemcomponent.appendChild(img);
Itemcomponent.appendChild(Carttext);
Itemcomponent.appendChild(img2);
Checkout.appendChild(Checkoutbutton);
cart.appendChild(Itemcomponent);
cart.appendChild(Checkout);

document.querySelector('.header__cart--content3bin').addEventListener("click",() => {
    document.querySelector(".header__cart--content3").remove();
    document.querySelector(".header__cart--checkout").remove();
    cartemptytext.style.display = 'flex';
    document.querySelector(".header__cart--productcounter").style.display = "flex";
     document.querySelector(".header__cart--productcounter").style.display = "none";
  });
    }
    
    else
    {
     
    document.querySelector(".numberofproducts").innerHTML = `$125.00 x ${numberofproducts.innerHTML} <b>${125*numberofproducts.innerHTML}.00$</b>`;
        document.querySelector(".header__cart--productcounter").innerHTML = numberofproducts.innerHTML;
   
      }
}
// ======================= Cart Animation =======================
