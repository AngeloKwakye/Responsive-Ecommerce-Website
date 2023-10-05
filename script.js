// Script for navigation bar
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

let products = document.getElementById('pro-container');
let products2 = document.getElementById('pro-container2');

if (bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

let populateHTML = (itemsData) =>{
    return (products.innerHTML = itemsData.map((data)=>{
    let {id,title, price, description, category, image, rating} = data;
        return `
            <div class="pro"  id="product-id-${id}">
                <img width="150" src=${image} alt="">
                <div class="des">
                    <span>${category}</span>
                    <h5>${title}</h5>
                   <div class="star-price-cart">
                        <div class="star">
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <h4>GHc ${price}</h4>
                        </div>
                        <a href="#"> <i class="fal fa-shopping-cart cart"></i></a>
                        <div>
                        </div>     
                   </div>
                </div>
            </div>
        `
    }).join(""));
}

let getAllProducts = () =>{
    fetch('http://localhost:3000/products')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                populateHTML(data);
            });
}
getAllProducts();




