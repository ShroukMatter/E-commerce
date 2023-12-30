const productCategory = ['cars', 'phones', 'makeup'];
const carsList = [
  'Maruti',
  'Hyundai Verna',
  'Honda Amaze VX i-DTEC',
  'Audi',
  'Mercedes-Benz New C-Class 220 CDI AT',
  'Chevrolet',
  'Ford',
  'Ferrari',
];
const makeupList = ['Foundation', 'Mascara', 'Concealer', 'Lips', 'Contour'];
const phonesList = [
  'Iphone',
  'Samsung',
  'BlackBerry',
  'Real Me',
  'Nokia',
  'Oppo',
];
const body = document.getElementById('product-container');
var productId = 1,
  cartId = 0;

//---------Init products
function initProducts() {
  const cars = loadPrducts('cars');
  if (cars.length === 0) {
    for (let i = 0; i < carsList.length; i++) {
      const price = Math.floor(Math.random() * 10000);
      cars.push({
        id: `car${i}`,
        name: carsList[i],
        price,
        img: `imgs/cars/car${i + 1}.jpg`,
      });
    }
  }

  const makeup = loadPrducts('makeup');
  if (makeup.length === 0) {
    for (let i = 0; i < makeupList.length; i++) {
      const price = Math.floor(Math.random() * 10000);
      makeup.push({
        id: `makeup${i}`,
        name: makeupList[i],
        price,
        img: `imgs/makeup/makeup${i + 1}.jpg`,
      });
    }
  }

  const phones = loadPrducts('phones');
  if (phones.length === 0) {
    for (let i = 0; i < phonesList.length; i++) {
      const price = Math.floor(Math.random() * 10000);
      phones.push({
        id: `car${i}`,
        name: phonesList[i],
        price,
        img: `imgs/phones/phone${i + 1}.jpg`,
      });
    }
  }

  localStorage.setItem('cars', JSON.stringify(cars));
  localStorage.setItem('phones', JSON.stringify(phones));
  localStorage.setItem('makeup', JSON.stringify(makeup));
}
//-------Display all products
function displayProducts() {
  body.innerHTML = '';
  const products = [
    ...loadPrducts('cars'),
    ...loadPrducts('phones'),
    ...loadPrducts('makeup'),
  ];

  for (var i = 1; i < products.length; i++) {
    let prd = products[i];
    const card = createCard(prd.id, prd.img, prd.name, prd.price);
    body.append(card);
  }
}

//-------load products
function loadPrducts(category) {
  return JSON.parse(localStorage.getItem(category)) || [];
}

//------ Creat a card for the product
function createCard(id, imgSrc, prodName, prodPrice) {
  var productCard = document.createElement('div');
  productCard.classList = 'product-card';
  var productImage = document.createElement('img');
  productImage.classList = 'product-image';
  productImage.src = imgSrc;
  productCard.append(productImage);
  var productInfo = document.createElement('div');
  productInfo.classList = 'product-info';
  productInfo.innerHTML = prodName;
  var addToCartBtn = document.createElement('button');
  addToCartBtn.innerHTML = 'Add to Cart';
  addToCartBtn.classList = 'add-to-cart';
  // var previewProductBtn = document.createElement('button');
  // previewProductBtn.innerHTML = 'Quick View';
  // previewProductBtn.classList = 'view';
  var productPrice = document.createElement('p');
  productPrice.classList = 'product-price';
  productPrice.innerHTML = '$ ' + prodPrice;
  productInfo.append(productPrice, addToCartBtn);
  addToCartBtn.addEventListener('click', () =>
    addToCart(id, imgSrc, prodName, prodPrice)
  );
  productCard.append(productInfo);
  return productCard;
}

//-----add to cart
function addToCart(id, Image, Name, Price) {
  var cart = loadCart();

  cart.push({
    id: id,
    img: Image,
    productName: Name,
    productPrice: Price,
  });
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  var cartProducts = JSON.parse(localStorage.getItem('cart')) || [];
  return cartProducts;
}

function cart() {
  cartId = 0;
  window.open('./cart.html');
}

//------------slider
var image = document.getElementsByTagName('img')[0];
var images = [
  'imgs/phones/phone1.jpg',
  'imgs/cars/car2.jpg',
  'imgs/phones/phone3.jpg',
  'imgs/cars/car5.jpg',
  'imgs/makeup/makeup4.jpg',
];
var i = 0;
function goNext() {
  i++;
  if (i >= images.length) {
    i = 0;
    image.src = images[i];
  } else {
    image.src = images[i];
  }
}
function goPrevt() {
  i--;

  if (i < 0) {
    i = images.length - 1;
    image.src = images[i];
  } else {
    image.src = images[i];
  }
}
function play() {
  setInterval(goNext, 2500);
}

//-----------Filter products
function showCars() {
  body.innerHTML = '';
  const products = [...loadPrducts('cars')];

  for (var i = 1; i < products.length; i++) {
    let prd = products[i];
    const card = createCard(prd.id, prd.img, prd.name, prd.price);
    body.append(card);
  }
}
function showMakeup() {
  body.innerHTML = '';
  const products = [...loadPrducts('makeup')];

  for (var i = 1; i < products.length; i++) {
    let prd = products[i];
    const card = createCard(prd.id, prd.img, prd.name, prd.price);
    body.append(card);
  }
}
function showPhones() {
  body.innerHTML = '';
  const products = [...loadPrducts('phones')];

  for (var i = 1; i < products.length; i++) {
    let prd = products[i];
    const card = createCard(prd.id, prd.img, prd.name, prd.price);
    body.append(card);
  }
}

//------Calling
initProducts();
displayProducts();
play();
