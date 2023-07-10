const text = document.getElementById('animated-text');
const message = text.innerHTML;
text.innerHTML = '';

let i = 0;
const textInterval = setInterval(() => {
    text.innerHTML += message[i];
    i++;
    if (i >= message.length) {
        clearInterval(textInterval);
    }
}, 100);

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = carousel.querySelectorAll('.slide');

let currentIndex = 0;
let carouselInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
function goToNextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}
function goToPrevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}
function startCarousel() {
  carouselInterval = setInterval(goToNextSlide, 3000); // Derulare automată la fiecare 3 secunde
}
function stopCarousel() {
  clearInterval(carouselInterval);
}
prevBtn.addEventListener('click', () => {
  stopCarousel();
  goToPrevSlide();
  startCarousel();
});
nextBtn.addEventListener('click', () => {
  stopCarousel();
  goToNextSlide();
  startCarousel();
});
// Start the carousel with the first slide
startCarousel();
function showLoadingAnimation() {
  const loadingDiv = document.createElement('div');
  loadingDiv.classList.add('loading');
  document.body.appendChild(loadingDiv);

  setTimeout(() => {
    loadingDiv.remove();
  }, 3000);
}
































document.addEventListener('DOMContentLoaded', () => {
  const emptyCartButton = document.getElementById('emptycart');
  const checkoutButton = document.getElementById('checkout');
  const backToShopButton = document.getElementById('backtoshop');

  // Funcția pentru gestionarea evenimentului de click pe butonul "Empty Cart"
  const handleEmptyCart = () => {
    const cartTable = document.getElementById('carttable');
    const itemsQuantityElement = document.getElementById('itemsquantity');
    const totalElement = document.getElementById('total');

    cartTable.innerHTML = '';
    itemsQuantityElement.innerText = '0';
    totalElement.innerText = '0.00';
  };

  // Funcția pentru gestionarea evenimentului de click pe butonul "Checkout"
  const handleCheckout = () => {
    // Aici puteți implementa logica de procesare a comenzii (de exemplu, afișarea unui formular de plată)
    console.log('Checkout');
  };

  // Funcția pentru gestionarea evenimentului de click pe butonul "Back to Shop"
  const handleBackToShop = () => {
    // Aici puteți implementa logica de redirecționare către pagina de produse
    console.log('Back to Shop');
  };

  // Adăugați evenimentele la elementele corespunzătoare
  emptyCartButton.addEventListener('click', handleEmptyCart);
  checkoutButton.addEventListener('click', handleCheckout);
  backToShopButton.addEventListener('click', handleBackToShop);
});
