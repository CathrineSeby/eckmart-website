const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));

const filters=document.querySelectorAll('.filter');
const products=document.querySelectorAll('.product-card');
filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  const category=button.dataset.filter;
  products.forEach(product=>{
    product.style.display=category==='all'||product.dataset.category===category?'':'none';
  });
}));

let cart=0;
const cartCount=document.getElementById('cartCount');
const toast=document.getElementById('toast');
function showToast(message){
  toast.textContent=message;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2200);
}
document.querySelectorAll('.add-to-cart').forEach(button=>button.addEventListener('click',()=>{
  cart++;
  cartCount.textContent=cart;
  showToast('Product added to your bag');
}));
document.getElementById('bagButton').addEventListener('click',()=>showToast(`Your bag has ${cart} item(s)`));
document.getElementById('searchButton').addEventListener('click',()=>{
  const query=prompt('Search products');
  if(query) showToast(`Search feature demo: ${query}`);
});
document.getElementById('newsletter').addEventListener('submit',event=>{
  event.preventDefault();
  showToast('Thank you for subscribing!');
  event.target.reset();
});
document.querySelectorAll('.hero-arrow').forEach(button=>button.addEventListener('click',()=>{
  showToast('Featured collection');
}));
