const products = [
  {
    category: 'Торти',
    categoryId: 'torts',
    categoryDescription: [
      'Без цукру, без лактози, без глютену!',
      'Цей десерт містить велику кількість білка. У його складі є протеїн, завдяки чому, з`ївши шматочок брауні, ви можете легко поповнити запаси білка в організмі.',
      'Білок — це макронутрієнт, який ми часто не добираємо у щоденному раціоні. А його дефіцит може негативно впливати на стан шкіри, фігуру, тіло та м’язи.',
      'Тому цей десерт — чудовий варіант для всіх, а особливо для тих, хто займається спортом, стежить за калорійністю раціону та балансом макронутрієнтів.',
    ],
    categoryList: [
      {
        назва: 'Медівник',
        ціна: 700,
        склад: '',
        кбжв: '',
        варіанти: [0.5, 0.8, 1, 1.5, 2],
        images: ['tort-medivnyk1.webp'],
      },
      {
        назва: 'Наполеон',
        ціна: 650,
        склад: '',
        кбжв: '',
        варіанти: [0.5, 0.8, 1, 1.5, 2],
        images: ['tort-napoleon1.webp'],
      },
      {
        назва: 'Естерхазі',
        ціна: 650,
        склад: '',
        кбжв: '',
        варіанти: [0.5, 0.8, 1, 1.5, 2],
        images: ['tort-esterhazi1.webp'],
      },
      {
        назва: 'Морквяний',
        ціна: 650,
        склад: '',
        кбжв: '200 / 6.3 / 15 / 10.3',
        варіанти: [0.5, 0.8, 1, 1.5, 2],
        images: ['tort-morkva1.webp'],
      },
    ],
  },
  {
    category: 'Бенто-Торти',
    categoryId: 'bento-torts',
    categoryDescription: [
      'Мініторти вагою 650 г — це ідеальний подарунок чи десерт на двох.',
      'Виготовлені без цукру, з якісних інгредієнтів, вони поєднують користь і насолоду.',
    ],
    categoryList: [
      {
        назва: 'Ванільний бісквіт',
        ціна: 1000,
        склад: '',
        кбжв: '',
        варіанти: [0.65],
        images: ['bento-tort-vanil1.jpg'],
      },
      {
        назва: 'Шоколадний бісквіт',
        ціна: 1000,
        склад: '',
        кбжв: '',
        варіанти: [0.65],
        images: ['bento-tort-shokolad1.jpg'],
      },
      {
        назва: 'Малина-ваніль',
        ціна: 1000,
        склад:
          'борошно з вівсяних висівок, мигдалеве борошно, рисове борошно, сухе молоко, яйця, молоко, цукрозамінники (еритрол, стевія), розпушувач, лимонний сік, крем-сир, вершковий сир, вершки 30%, малина, крохмаль',
        кбжв: '212 / 7.9 / 16.4 / 8',
        варіанти: [0.65],
        images: ['bento-tort-malyna1.jpg'],
      },
      {
        назва: 'Вишня-шоколад',
        ціна: 1000,
        склад:
          'Вівсяні висівки, мигдалеве борошно, яйця, кефір, какао, цукрозамінники (еритрол, стевія), вишня, крохмаль, крем-сир, сир рікота, вершки',
        кбжв: '187 / 7.2 / 14.8 / 6.5',
        варіанти: [0.65],
        images: ['bento-tort-vyshnia1.jpg'],
      },
    ],
  },
  {
    category: 'Fit-Паски',
    categoryId: 'fit-pasky',
    categoryDescription: [
      'Паски без цукру, з високим вмістом білка — це смачна й корисна альтернатива традиційній випічці.',
      'Підходять для тих, хто дотримується здорового харчування.',
    ],
    categoryList: [
      {
        назва: 'Шоколадна',
        ціна: 450,
        склад:
          'Яйця, еритрол, кокосове масло, молоко, сметана, кукурудзяний крохмаль, розпушувач, рисове борошно, мигдалеве борошно, кукурудзяне борошно, како, сухе знежирене молоко',
        кбжв: '156.7 / 10.6 / 5.9 / 14.7',
        варіанти: [0.4, 0.6, 0.9],
        images: ['fit-paska-shokolad1.jpg'],
      },
      {
        назва: 'Сирна',
        ціна: 450,
        склад:
          'кисломолочний сир, яйця, кокосове масло, еритрол, розпушувач, рисове борошно, кукурудзяне борошно, мигдалеве борошно, сухе знежирене молоко',
        кбжв: '156.7 / 10.6 / 5.9 / 14.7',
        варіанти: [0.4, 0.6, 0.9],
        images: ['fit-paska-syrna1.jpg'],
      },
      {
        назва: 'Апельсинова з маком',
        ціна: 450,
        склад:
          'сік апельсиновий, рисове борошно, кукурудзяний крохмаль, кукурудзяне борошно, мигдалеве борошно, розпушувач, молоко, кокосове масло, еритрол, стевія, мак, сухе знежирене молоко',
        кбжв: '223 / 12.9 / 7.8 / 25',
        варіанти: [0.4, 0.6, 0.9],
        images: ['fit-paska-apelsyn1.jpg'],
      },
      {
        назва: 'З курагою та білим шоколадом',
        ціна: 450,
        склад:
          'цільнозернове пшеничне борошно, мигдалеве борошно, кукурудзяне борошно, яйця, ряженка, стевія, еритрол, розпушувач, кукурудзяний крохмаль, сухе знежирене молоко',
        кбжв: '172 / 8.1 / 4.7 / 27.8',
        варіанти: [0.5, 1],
        images: ['fit-paska-kuraha1.jpg'],
      },
      {
        назва: 'Крафін',
        ціна: 450,
        склад:
          'Кисломолочний сир, кокосове масло, яйця, рисове борошно, кукурудзяне борошно, цільнозернове пшеничне борошно, како, розпушувач, еритрол, стевія, волоські горіхи, білий шоколад без цукру, вершки, арахісова паста',
        кбжв: '306 / 13.6 / 17 / 29.8',
        варіанти: [0.5, 1],
        images: ['fit-paska-krafin1.webp'],
      },
    ],
  },
  {
    category: 'Мадлени',
    categoryId: 'madleny',
    categoryDescription: [
      'Французьке печиво у новому здоровому форматі.',
      'Мадлени — легкий, ніжний десерт без цукру з унікальними смаками.',
    ],
    categoryList: [
      {
        назва: 'Снікерс',
        ціна: 75,
        склад: 'Карамель, арахісова паста',
        кбжв: '97 / 2.8 / 5.6 / 8.5',
        images: ['madlen-snikers1.webp'],
      },
      {
        назва: 'Вишня-шоколад',
        ціна: 75,
        склад: '',
        кбжв: '78 / 2 / 6.1 / 10',
        images: ['madlen-vyshnia1.webp'],
      },
      {
        назва: 'Кокос',
        ціна: 75,
        склад: '',
        кбжв: '88 / 2.1 / 7 / 9.8',
        images: ['madlen-kokos1.jpg'],
      },
    ],
  },
  {
    category: 'Cookies',
    categoryId: 'cookies',
    categoryDescription: [
      'Корисне печиво без цукру — ідеальний перекус з балансом макроелементів, яке поєднує смак і користь.',
    ],
    categoryList: [
      {
        назва: 'Морквяне',
        ціна: 50,
        склад: '',
        кбжв: '161 / 4.5 / 7.7 / 20.5',
        images: ['cookies-morkva1.jpg'],
      },
      {
        назва: 'Мигдаль-кокос',
        ціна: 50,
        склад: '',
        кбжв: '219 / 7.5 / 12.1 / 21.5',
        images: ['cookies-myhdal-kokos1.jpg'],
      },
      {
        назва: 'Баунті',
        ціна: 50,
        склад: '',
        кбжв: '203 / 6.1 / 10.8 / 25',
        images: ['cookies-bounti1.jpg'],
      },
      {
        назва: 'Снікерс',
        ціна: 50,
        склад: '',
        кбжв: '212 / 7.6 / 9.3 / 24.4',
        images: ['cookies-snikers1.jpg'],
      },
      {
        назва: 'Вишня-шоколад',
        ціна: 50,
        склад: '',
        кбжв: '172 / 4.9 / 8.2 / 23',
        images: ['cookies-vyshnia1.jpg'],
      },
    ],
  },
  {
    category: 'Fit MOTI',
    categoryId: 'fit-moti',
    categoryDescription: [
      'Корисна версія традиційних японських солодощів.',
      'Справжня насолода з екзотичними смаками, білком та натуральними складниками.',
    ],
    categoryList: [
      {
        назва: 'Манго-маракуя-кокос',
        ціна: 70,
        склад:
          'Пюре манго, пюре маракуї, кокосова стружка, протеїн, сир рікотта, вершкови   сир, білий шоколад без цукру, желатин, борошно клейкого рису, оливкова олія, пектин, соєвий білок, стевія, еритрол',
        кбжв: '100 / 6.6 / 3.4 / 11.2',
        images: ['fit-moti-mango1.jpg'],
      },
      {
        назва: 'Rafaello',
        ціна: 70,
        склад:
          'Кокосова стружка, кокосові вершки, мигдаль, сир рікотта, вершковий сир, протеїн, соєвий білок, шоколад без цукру, желатин, борошно клейкого рису, оливкова олія, стевія, еритрол',
        кбжв: '126 / 7 / 6.6 / 9.7',
        images: ['fit-moti-rafaello1.jpg'],
      },
      {
        назва: 'Фісташка',
        ціна: 70,
        склад:
          'Фісташка, вершковий сир, желатин, сир рікотта, протеїн, соєвий білок, крем-сир, шоколад без цукру, борошно клейкого рису, оливкова олія, стевія, еритрол',
        кбжв: '133 / 7.5 / 6.3 / 11.8',
        images: ['fit-moti-fistashka1.jpg'],
      },
      {
        назва: 'Кава-карамель',
        ціна: 70,
        склад:
          'Карамель без цукру, кава, желатин, кокосове масло, сир рікотта, вершковий сир, протеїн, яєчний білок, соєвий білок, протеїн, молоко, білий шоколад без цукру, борошно клейкого рису, оливкова олія, стевія, еритрол',
        кбжв: '100 / 6.6 / 3.4 / 11.2',
        images: ['fit-moti-kava1.jpg'],
      },
    ],
  },
  {
    category: 'Брауні протеїнове',
    categoryId: 'protein-brownies',
    categoryDescription: [
      'Протеїнові брауні — ситний і корисний десерт без цукру.',
      'Ідеальний для спортсменів і прихильників здорового способу життя.',
      'Цей десерт містить велику кількість білка. У його складі є протеїн, завдяки чому, з`ївши шматочок брауні, ви можете легко поповнити запаси білка в організмі.',
      'Білок — це макронутрієнт, який ми часто не добираємо у щоденному раціоні. А його дефіцит може негативно впливати на стан шкіри, фігуру, тіло та м’язи.',
      'Тому цей десерт — чудовий варіант для всіх, а особливо для тих, хто займається спортом, стежить за калорійністю раціону та балансом макронутрієнтів.',
    ],
    categoryList: [
      {
        назва: 'Дубайська начинка',
        ціна: 60,
        склад:
          'Мигдалеве борошно, протеїн, какао, розпушувач, яйця, солосвіт, еритрол, йогурт, рисове борошно, кукурудзяний крохмаль, фісташкова паста, шоколад без цукру',
        кбжв: '100 / 5.1 / 6 / 8',
        images: ['protein-browny-dubais1.jpg'],
      },
      {
        назва: 'Rafaello',
        ціна: 60,
        склад:
          'Мигдалеве борошно, протеїн, какао, розпушувач, яйця, солосвіт, еритрол, йогурт, кокосова стружка, кокосове згущене молоко без цукру, кокосове борошно, шоколад без цукру',
        кбжв: '84 / 7 / 4 / 5',
        images: ['protein-browny-rafaello1.jpg'],
      },
      {
        назва: 'Фінікова карамель',
        ціна: 60,
        склад:
          'Мигдалеве борошно, протеїн, какао, розпушувач, яйця, солосвіт, еритрол, йогурт, арахісова паста, фініки, шоколад без цукру',
        кбжв: '98 / 6.4 / 5 / 6.3',
        images: ['protein-browny-finik1.jpg'],
      },
    ],
  },
];

// --- Динамічна зміна року у футері ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Змінні DOM елементів ---
const body = document.body;
const themeToggleBtn = document.getElementById('theme-toggle');
const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const menuContent = document.getElementById('mobile-menu-content');
const mobileMenuCategories = document.querySelector('.mobile-menu-categories');
const burgerMenuIcon = burgerMenuBtn.querySelector('i');


const productsContainer = document.querySelector('.products-container');
const heroSlider = document.querySelector('.hero-slider');
const sliderDotsContainer = document.querySelector('.slider-dots');
const prevSlideBtn = document.querySelector('.prev-slide');
const nextSlideBtn = document.querySelector('.next-slide');

// Modals
const cartModal = document.getElementById('cart-modal');
const productDetailsModal = document.getElementById('product-details-modal');
const addToCartModal = document.getElementById('add-to-cart-modal');
const contactsModal = document.getElementById('contacts-modal');
const closeButtons = document.querySelectorAll('.modal .close-button');
const likedProductsModal = document.getElementById('likedProductsModal');
const openLikedProductsModalBtn = document.getElementById(
  'openLikedProductsModalBtn'
);

// Liked products
let likedProductsData = [];
const likedProductsList = document.getElementById('liked-products-list');
const likedProductsCountSpan = document.querySelector('.liked-products-count');
const confirmModal = document.getElementById('confirmModal');
const confirmRemoveYesBtn = document.getElementById('confirmRemoveYes');
const confirmRemoveNoBtn = document.getElementById('confirmRemoveNo');
let productToRemoveFromLiked = null; // Declare this variable globally or in a scope accessible by the modal handlers


// Cart elements
const cartIcon = document.querySelector('.cart-icon');
const cartCountSpan = document.querySelector('.cart-count');
const cartItemsContainer = cartModal.querySelector('.cart-items');
const cartTotalItemsSpan = cartModal.querySelector('.cart-total-items');
const cartTotalPriceSpan = cartModal.querySelector('.cart-total-price');

// Add to Cart Modal elements
const addToCartProductName = addToCartModal.querySelector(
  '.add-to-cart-product-name'
);
const addToCartProductPrice = addToCartModal.querySelector(
  '.add-to-cart-product-price'
);
const quantityInput = addToCartModal.querySelector('#quantity-input');
const weightSelect = addToCartModal.querySelector('#weight-select');
const addToCartButton = addToCartModal.querySelector('.add-to-cart-btn');

// Add to Cart Message
const addToCartMessage = document.getElementById('add-to-cart-message');
const messageTimerBar = addToCartMessage.querySelector('.message-timer-bar');
const goToCartBtn = addToCartMessage.querySelector('.go-to-cart-btn');


let currentProductToAdd = null; // Зберігає поточний продукт, що додається в кошик

// Checkout
const checkoutButton = document.getElementById('checkout-button');
const orderModal = document.getElementById('order-modal');
const editOrder = document.getElementById('edit-order-button');

//! --- Функції для роботи з Local Storage та кошиком ---

/**
 * Завантажує кошик з Local Storage.
 * @returns {Array} Масив товарів у кошику.
 */
const loadCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem('fitcakes-cart')) || [];
    return cart;
  } catch (e) {
    console.error('Error loading cart from Local Storage:', e);
    return [];
  }
};

/**
 * Зберігає кошик у Local Storage.
 * @param {Array} cart - Масив товарів у кошику.
 */
const saveCart = (cart) => {
  try {
    localStorage.setItem('fitcakes-cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Error saving cart to Local Storage:', e);
  }
};

let cart = loadCart();

/**
 * Оновлює відображення кількості товарів на іконці кошика (обох).
 */
const updateCartCount = () => {
  const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountSpan.textContent = totalItemsInCart;
  

  if (totalItemsInCart > 0) {
    cartCountSpan.style.display = 'flex';
  } else {
    cartCountSpan.style.display = 'none';
  }
};

/**
 * Додає товар до кошика або оновлює його кількість.
 * @param {Object} product - Об'єкт товару.
 * @param {number} quantity - Кількість товару.
 * @param {string|number} [variant=null] - Обраний варіант (вага/кількість).
 */
const addToCart = (product, quantity, variant = null) => {
  // Генеруємо унікальний ID для елемента кошика, враховуючи варіант
  const itemId = `${product.id}-${variant !== null ? variant : quantity}`;

  const existingItemIndex = cart.findIndex((item) => item.itemId === itemId);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
    cart[existingItemIndex].totalPrice =
      cart[existingItemIndex].quantity * product.ціна;
  } else {
    cart.push({
      itemId: itemId, // Унікальний ID для цього елемента кошика
      id: product.id, // Оригінальний ID продукту
      name: product.назва,
      price: product.ціна,
      quantity: quantity,
      variant: variant,
      image: product.images[0] || 'placeholder.jpg',
      totalPrice: quantity * product.ціна,
    });
  }
  saveCart(cart);
  updateCartCount();
  displayCartItems();
  showAddToCartMessage();
};

/**
 * Видаляє товар з кошика.
 * @param {string} itemId - Унікальний ID елемента кошика.
 */
const removeFromCart = (itemId) => {
  cart = cart.filter((item) => item.itemId !== itemId);
  saveCart(cart);
  updateCartCount();
  displayCartItems();
};

/**
 * Оновлює кількість товару в кошику.
 * @param {string} itemId - Унікальний ID елемента кошика.
 * @param {number} newQuantity - Нова кількість.
 */
const updateCartItemQuantity = (itemId, newQuantity) => {
  const itemIndex = cart.findIndex((item) => item.itemId === itemId);
  if (itemIndex > -1) {
    cart[itemIndex].quantity = newQuantity;
    cart[itemIndex].totalPrice = newQuantity * cart[itemIndex].price;
    saveCart(cart);
    updateCartCount();
    displayCartItems();
  }
};

/**
 * Відображає товари в модальному вікні кошика.
 */
const displayCartItems = () => {
  cartItemsContainer.innerHTML = '';
  let totalItems = 0;
  let totalPrice = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Ваш кошик порожній.</p>';
  } else {
    cart.forEach((item) => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
      const variantText =
        item.variant !== null
          ? `${item.variant} ${
              item.variant.toString().includes('.') ? 'кг' : 'шт.'
            }`
          : `${item.quantity} шт.`;

      cartItemDiv.innerHTML = `
                      <img src="img/products/${item.image}" alt="${item.name}">
                      <div class="cart-item-details">
                          <h4>${item.name} (${variantText})</h4>
                          <p>${item.price} грн</p>
                      </div>
                      <div class="cart-item-controls">
                          <input type="number" class="item-quantity" value="${item.quantity}" min="1" data-item-id="${item.itemId}">
                          <button class="remove-item-btn" data-item-id="${item.itemId}">X</button>
                      </div>
                  `;
      cartItemsContainer.appendChild(cartItemDiv);

      totalItems += 1; // Кожен унікальний товар (з варіантом) вважаємо як 1 позицію
      totalPrice += item.totalPrice;
    });

    // Додаємо обробники для зміни кількості
    cartItemsContainer.querySelectorAll('.item-quantity').forEach((input) => {
      input.addEventListener('change', (e) => {
        const itemId = e.target.dataset.itemId;
        const newQuantity = parseInt(e.target.value);
        if (newQuantity > 0) {
          updateCartItemQuantity(itemId, newQuantity);
        } else {
          removeFromCart(itemId);
        }
      });
    });

    // Додаємо обробники для кнопки "Видалити"
    cartItemsContainer
      .querySelectorAll('.remove-item-btn')
      .forEach((button) => {
        button.addEventListener('click', (e) => {
          const itemId = e.target.dataset.itemId;
          removeFromCart(itemId);
        });
      });
  }

  cartTotalItemsSpan.textContent = totalItems;
  cartTotalPriceSpan.textContent = totalPrice.toFixed(2);
};

//! --- Функції для обраних товарів ---

/**
 * Отримує список обраних продуктів з Local Storage.
 * @returns {Array} Масив ID обраних продуктів.
 */
const getLikedProducts = () => {
  try {
    const likedProducts =
      JSON.parse(localStorage.getItem('fitcakes-liked-products')) || [];
    return likedProducts;
  } catch (e) {
    console.error('Error loading likedProducts from Local Storage:', e);
    return [];
  }
};

/**
 * Зберігає список обраних продуктів у Local Storage.
 * @param {Array} likedProducts - Масив ID обраних продуктів.
 */
const saveLikedProducts = (likedProducts) => {
  localStorage.setItem(
    'fitcakes-liked-products',
    JSON.stringify(likedProducts)
  );
};

/**
 * Додає або видаляє продукт зі списку обраних.
 * @param {string} productId - ID продукту.
 * @returns {boolean} True, якщо продукт був доданий, False, якщо видалений.
 */
const toggleLikeProduct = (productId) => {
  let likedProducts = getLikedProducts();
  const index = likedProducts.indexOf(productId);

  if (index === -1) {
    likedProducts.push(productId);
    // Додаємо інформацію про продукт до likedProductsData, якщо її там немає
    const productToAdd = products
      .flatMap((cat) => cat.categoryList)
      .find((p) => p.id === productId);
    if (productToAdd && !likedProductsData.some((p) => p.id === productId)) {
      likedProductsData.push(productToAdd);
    }
    saveLikedProducts(likedProducts);
    return true; // Продукт додано
  } else {
    likedProducts.splice(index, 1);
    // Видаляємо продукт також з likedProductsData
    likedProductsData = likedProductsData.filter((p) => p.id !== productId);
    saveLikedProducts(likedProducts);
    return false; // Продукт видалено
  }
};

/**
 * Оновлює іконку "лайк" для картки продукту.
 * @param {HTMLElement} likeButton - Кнопка "лайк".
 * @param {string} productId - ID продукту.
 */
const updateLikeButtonIcon = (likeButton, productId) => {
  const likedProducts = getLikedProducts();
  if (likedProducts.includes(productId)) {
    likeButton.innerHTML = '<i class="fas fa-heart liked"></i>'; // Заповнене серце
  } else {
    likeButton.innerHTML = '<i class="far fa-heart"></i>'; // Порожнє серце
  }
};

/**
 * Оновлює відображення кількості товарів на іконці кошика (обох).
 */
const updateLikedProductsCount = () => {
  getLikedProducts();
  const totalItemsInLikedProductsList = likedProductsData.length;
  likedProductsCountSpan.textContent = totalItemsInLikedProductsList;
  console.log('Update liked count:', totalItemsInLikedProductsList); // Added for debugging

  if (totalItemsInLikedProductsList > 0) {
    likedProductsCountSpan.style.display = 'flex';
  } else {
    likedProductsCountSpan.style.display = 'none';
  }

  console.log(likedProductsData);
  
};

/**
 * Відкриває модальне вікно "Обрані товари" та відображає їх.
 */
const openLikedProductsModal = () => {
  likedProductsList.innerHTML = '';
  if (likedProductsData.length === 0) {
    likedProductsList.innerHTML = '<p>У вас немає обраних товарів.</p>';
  } else {
    likedProductsData.forEach((product) => {
      const likedItemDiv = document.createElement('div');
      likedItemDiv.classList.add('liked-product-item');
      likedItemDiv.innerHTML = `
        <img src="img/products/${
          product.images[0] || 'placeholder.jpg'
        }" alt="${product.назва}">
        <div class="liked-product-details">
          <h4>${product.назва}</h4>
          <p>${product.ціна} грн</p>
        </div>
        <div class="liked-product-actions">
          <button class="go-to-product-btn" data-product-id="${
            product.id
          }">Перейти до товару</button>
          <button class="remove-liked-btn" data-product-id="${
            product.id
          }">X</button>
        </div>
      `;
      likedProductsList.appendChild(likedItemDiv);
    });

    likedProductsList
      .querySelectorAll('.remove-liked-btn')
      .forEach((button) => {
        button.addEventListener('click', (e) => {
          productToRemoveFromLiked = e.target.dataset.productId;
          openModal(confirmModal);
        });
      });

    likedProductsList
      .querySelectorAll('.go-to-product-btn')
      .forEach((button) => {
        button.addEventListener('click', (e) => {
          const productId = e.target.dataset.productId;
          closeModal(likedProductsModal); // Assuming likedProductsModal is defined elsewhere
          const productElement = document.querySelector(
            `[data-product-id="${productId}"]`
          );
          if (productElement) {
            productElement.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
            productElement.classList.add('highlight-product');
            setTimeout(() => {
              productElement.classList.remove('highlight-product');
            }, 2000);
          }
        });
      });
  }
  openModal(likedProductsModal); // Assuming likedProductsModal is defined elsewhere
};

// Обробники для модального вікна підтвердження видалення
confirmRemoveYesBtn.addEventListener('click', () => {
  if (productToRemoveFromLiked) {
    toggleLikeProduct(productToRemoveFromLiked);
    // Find the specific like button for the product to update its icon
    const productLikeButton = document.querySelector(
      `.like-button[data-product-id="${productToRemoveFromLiked}"]`
    );
    if (productLikeButton) {
      updateLikeButtonIcon(productLikeButton, productToRemoveFromLiked);
    }
    displayLikedProducts(); // Оновлюємо список обраних товарів у модальному вікні
    productToRemoveFromLiked = null;
    closeModal(confirmModal); // Assuming closeModal is defined elsewhere
  }
});

confirmRemoveNoBtn.addEventListener('click', () => {
  productToRemoveFromLiked = null;
  closeModal(confirmModal); // Assuming closeModal is defined elsewhere
});

// Функція для оновлення відображення обраних продуктів (для використання після видалення)
const displayLikedProducts = () => {
  likedProductsList.innerHTML = '';
  if (likedProductsData.length === 0) {
    likedProductsList.innerHTML = '<p>У вас немає обраних товарів.</p>';
  } else {
    likedProductsData.forEach((product) => {
      const likedItemDiv = document.createElement('div');
      likedItemDiv.classList.add('liked-product-item');
      likedItemDiv.innerHTML = `
        <img src="img/products/${
          product.images[0] || 'placeholder.jpg'
        }" alt="${product.назва}">
        <div class="liked-product-details">
          <h4>${product.назва}</h4>
          <p>${product.ціна} грн</p>
        </div>
        <div class="liked-product-actions">
          <button class="go-to-product-btn" data-product-id="${
            product.id
          }">Перейти до товару</button>
          <button class="remove-liked-btn" data-product-id="${
            product.id
          }">X</button>
        </div>
      `;
      likedProductsList.appendChild(likedItemDiv);
    });

    likedProductsList
      .querySelectorAll('.remove-liked-btn')
      .forEach((button) => {
        button.addEventListener('click', (e) => {
          productToRemoveFromLiked = e.target.dataset.productId;
          openModal(confirmModal);
        });
      });

    likedProductsList
      .querySelectorAll('.go-to-product-btn')
      .forEach((button) => {
        button.addEventListener('click', (e) => {
          const productId = e.target.dataset.productId;
          closeModal(likedProductsModal);
          const productElement = document.querySelector(
            `[data-product-id="${productId}"]`
          );
          if (productElement) {
            productElement.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
            productElement.classList.add('highlight-product');
            setTimeout(() => {
              productElement.classList.remove('highlight-product');
            }, 2000);
          }
        });
      });
  }
  updateLikedProductsCount();
};

//! --- Функції для відображення товарів ---

/**
 * Генерує картку товару.
 * @param {Object} product - Об'єкт товару.
 * @returns {HTMLElement} HTML елемент картки товару.
 */
const createProductCard = (product, index) => {
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.classList.add(index % 2 === 0 ? 'animate-left' : 'animate-right'); // Анімація
  card.setAttribute('data-product-id', product.id); // Додаємо data-product-id до картки

  const imagePath = `img/products/${product.images[0] || 'placeholder.jpg'}`;

  card.innerHTML = `
    <div class="product-card-overlay-buttons">
      <button class="like-button" data-product-id="${product.id}"></button>
      <button class="details-button" data-product-id="${product.id}"><i class="fas fa-info"></i></button>
    </div>
    <img src="${imagePath}" alt="${product.назва}">
    <h3>${product.назва}</h3>
    <p class="price">${product.ціна} ₴</p>
    <div class="product-card-buttons">
      <button class="buy-button" data-product-id="${product.id}">Замовити</button>
    </div>
  `;

  const likeButton = card.querySelector('.like-button');
  updateLikeButtonIcon(likeButton, product.id); // Оновлюємо іконку при створенні картки

  likeButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Запобігаємо спливанню події, щоб не спрацьовували інші кліки на картці
    toggleLikeProduct(product.id);
    updateLikeButtonIcon(likeButton, product.id);
    updateLikedProductsCount();
  });

  card
    .querySelector('.buy-button')
    .addEventListener('click', () => openAddToCartModal(product));
  card
    .querySelector('.details-button')
    .addEventListener('click', () => openProductDetailsModal(product));

  return card;
};

/**
 * Відображає всі товари на сторінці, розділені за категоріями.
 */
const getTruncatedText = (text) => {
  const sentenceEndRegex = /[.!?]/g;
  let match;
  let count = 0;
  let endIndex = -1;

  while ((match = sentenceEndRegex.exec(text)) !== null) {
    count++;
    if (count === 2) {
      endIndex = match.index + 1;
      break;
    }
  }

  return endIndex > 0 ? text.slice(0, endIndex).trim() : text.trim();
};

const displayProducts = () => {
  productsContainer.innerHTML = '';

  products.forEach((category) => {
    const categorySection = document.createElement('section');
    categorySection.classList.add('product-category');
    categorySection.id = category.categoryId;

    const fullDescription = category.categoryDescription.join(' ');
    const shortText = getTruncatedText(fullDescription);
    const isTruncated = shortText !== fullDescription;

    // Опис
    const descriptionContent = document.createElement('div');
    descriptionContent.classList.add('description-content');
    descriptionContent.innerHTML = `<p>${shortText}</p>`;

    const descriptionWrapper = document.createElement('div');
    descriptionWrapper.classList.add('product-category-description');
    descriptionWrapper.appendChild(descriptionContent);

    // Кнопка "Більше"
    if (isTruncated) {
      const readMoreBtn = document.createElement('button');
      readMoreBtn.classList.add('read-more-btn');
      readMoreBtn.dataset.categoryId = category.categoryId;
      readMoreBtn.textContent = 'Більше';
      descriptionWrapper.appendChild(readMoreBtn);
    }

    categorySection.innerHTML = `<h2>${category.category}</h2>`;
    categorySection.appendChild(descriptionWrapper);

    // Продукти
    const categoryCardsGrid = document.createElement('div');
    categoryCardsGrid.classList.add('category-cards-grid');

    category.categoryList.forEach((product, index) => {
      product.id = `${category.categoryId}-${product.назва.replace(
        /\s/g,
        '-'
      )}`;
      const card = createProductCard(product, index);
      categoryCardsGrid.appendChild(card);
    });

    categorySection.appendChild(categoryCardsGrid);
    productsContainer.appendChild(categorySection);
  });

  // Обробка кліку по "Більше"
  productsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('read-more-btn')) {
      const button = e.target;
      const categoryId = button.dataset.categoryId;
      const category = products.find((c) => c.categoryId === categoryId);
      const descriptionDiv = button.previousElementSibling;
      const full = category.categoryDescription.join(' ');

      const isExpanded = descriptionDiv.classList.toggle('expanded');
      descriptionDiv.innerHTML = `<p>${
        isExpanded ? full : getTruncatedText(full)
      }</p>`;

      button.textContent = isExpanded ? 'Згорнути' : 'Більше';

      if (!isExpanded) {
        const wrapper = button.closest('.product-category');
        wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
};

// --- Функції для слайдера Hero Section ---

let currentSlideIndex = 0;
let slideInterval;

/**
 * Створює слайд для Hero Section.
 * @param {Object} product - Об'єкт товару.
 * @returns {HTMLElement} HTML елемент слайда.
 */
const createHeroSlide = (product) => {
  const slide = document.createElement('div');
  slide.classList.add('hero-slide');
  // Змінено шлях до зображення для коректного відображення
  slide.style.backgroundImage = `url(img/products/${
    product.images[0] || 'placeholder.jpg'
  })`;
  slide.innerHTML = `
              <div class="hero-slide-content">
                  <h3>${product.назва}</h3>
                  <p>${product.ціна} грн</p>
              </div>
          `;
  return slide;
};

/**
 * Заповнює слайдер випадковими товарами.
 */
const populateHeroSlider = () => {
  heroSlider.innerHTML = '';
  sliderDotsContainer.innerHTML = '';

  const allProducts = products.flatMap((category) => category.categoryList);
  const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());
  const slidesToShow = Math.min(shuffledProducts.length, 3); // Показуємо максимум 3 випадкових товари

  for (let i = 0; i < slidesToShow; i++) {
    const slide = createHeroSlide(shuffledProducts[i]);
    heroSlider.appendChild(slide);

    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.slideIndex = i;
    dot.addEventListener('click', () => goToSlide(i));
    sliderDotsContainer.appendChild(dot);
  }
  updateSlider();
  startSlideShow();
};

/**
 * Оновлює відображення слайдера та крапок.
 */
const updateSlider = () => {
  const slides = heroSlider.querySelectorAll('.hero-slide');
  heroSlider.style.transform = `translateX(${-currentSlideIndex * 100}%)`;

  const dots = sliderDotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlideIndex);
  });
};

/**
 * Переходить до наступного слайда.
 */
const nextSlide = () => {
  const slides = heroSlider.querySelectorAll('.hero-slide');
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlider();
};

/**
 * Переходить до попереднього слайда.
 */
const prevSlide = () => {
  const slides = heroSlider.querySelectorAll('.hero-slide');
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlider();
};

/**
 * Переходить до конкретного слайда.
 * @param {number} index - Індекс слайда.
 */
const goToSlide = (index) => {
  currentSlideIndex = index;
  updateSlider();
  resetSlideShow();
};

/**
 * Запускає автоматичну зміну слайдів.
 */
const startSlideShow = () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000); // Змінюємо слайд кожні 5 секунд
};

/**
 * Перезапускає автоматичну зміну слайдів.
 */
const resetSlideShow = () => {
  clearInterval(slideInterval);
  startSlideShow();
};

// --- Функції для модальних вікон ---

/**
 * Відкриває модальне вікно.
 * @param {HTMLElement} modalElement - Елемент модального вікна.
 */
const openModal = (modalElement) => {
  modalElement.style.display = 'flex';
  // Додаємо клас для анімації (якщо потрібно, так як анімація вже в CSS)
  modalElement.querySelector('.modal-content').style.animation =
    'modalOpen 0.3s forwards ease-out';
  body.style.overflow = 'hidden'; // Забороняємо прокрутку фону
};

/**
 * Закриває модальне вікно.
 * @param {HTMLElement} modalElement - Елемент модального вікна.
 */
const closeModal = (modalElement) => {
  modalElement.style.display = 'none';
  body.style.overflow = ''; // Дозволяємо прокрутку фону
};

/**
 * Відкриває модальне вікно деталей продукту.
 * @param {Object} product - Об'єкт товару.
 */
const openProductDetailsModal = (product) => {
  const productDetailsContent = productDetailsModal.querySelector(
    '.product-details-content'
  );
  // Додаємо категорію до продукту для відображення опису
  const productCategory = products.find((cat) =>
    cat.categoryList.some((item) => item.id === product.id)
  );

  const kbzhvValues = product.кбжв ? product.кбжв.split(' / ') : [];

  productDetailsContent.innerHTML = `
            <img src="img/products/${
              product.images[0] || 'placeholder.jpg'
            }" alt="${product.назва}">
            <div class="product-details-text">
                <h3>${product.назва}</h3>
                <p><strong>Ціна:</strong> ${product.ціна} грн</p>
                ${
                  product.опис
                    ? `<p><strong>Опис:</strong> ${product.опис}</p>`
                    : ''
                }
                ${
                  product.склад
                    ? `<p><strong>Склад:</strong> ${product.склад}</p>`
                    : ''
                }
                ${product.кбжв ? `<p><strong>На 100г:</strong></p>` : ''}
                ${product.кбжв ? `<p>Калорій - ${kbzhvValues[0]}</p>` : ''}
                ${product.кбжв ? `<p>Білків - ${kbzhvValues[1]}</p>` : ''}
                ${product.кбжв ? `<p>Жирів - ${kbzhvValues[2]}</p>` : ''}
                ${product.кбжв ? `<p>Вуглеводів - ${kbzhvValues[3]}</p>` : ''}
                ${
                  productCategory && productCategory.categoryDescription
                    ? `<p><strong>Категорія:</strong> ${
                        productCategory.category
                      }</p>
                   <p>${productCategory.categoryDescription.join(' ')}</p>`
                    : ''
                }
                <button class="buy-button add-to-cart-from-details" data-product-id="${
                  product.id
                }">Додати до кошика</button>
            </div>
        `;

  productDetailsModal
    .querySelector('.add-to-cart-from-details')
    .addEventListener('click', () => {
      closeModal(productDetailsModal);
      openAddToCartModal(product);
    });

  openModal(productDetailsModal);
};

/**
 * Відкриває модальне вікно додавання в кошик.
 * @param {Object} product - Об'єкт товару.
 */
const openAddToCartModal = (product) => {
  currentProductToAdd = product;
  addToCartProductName.textContent = product.назва;
  addToCartProductPrice.textContent = `${product.ціна} грн`;

  // Очищаємо попередні опції
  quantityInput.classList.add('hidden');
  weightSelect.classList.add('hidden');
  weightSelect.innerHTML = '';

  if (product.вага && product.вага.length > 0) {
    weightSelect.classList.remove('hidden');
    product.вага.forEach((weight) => {
      const option = document.createElement('option');
      option.value = weight.value;
      option.textContent = weight.label;
      weightSelect.appendChild(option);
    });
    // Ініціалізуємо ціну на основі першого варіанту ваги
    addToCartProductPrice.textContent = `${
      product.вага[0].value * product.ціна
    } грн`;
    weightSelect.addEventListener('change', (e) => {
      const selectedWeight = parseFloat(e.target.value);
      addToCartProductPrice.textContent = `${(
        selectedWeight * product.ціна
      ).toFixed(2)} грн`;
    });
  } else {
    quantityInput.classList.remove('hidden');
    // Оновлюємо ціну, якщо це одиничний товар з інпутом кількості
    addToCartProductPrice.textContent = `${product.ціна} грн`;
    quantityInput.value = 1; // Скидаємо кількість до 1 при відкритті модалки
    quantityInput.addEventListener('input', (e) => {
      const qty = parseInt(e.target.value);
      if (!isNaN(qty) && qty > 0) {
        addToCartProductPrice.textContent = `${(qty * product.ціна).toFixed(
          2
        )} грн`;
      } else {
        addToCartProductPrice.textContent = `${product.ціна.toFixed(2)} грн`;
      }
    });
  }

  openModal(addToCartModal);
};

// --- Обробники подій ---

// Закриття модалок по кліку на X
closeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    closeModal(e.target.closest('.modal'));
  });
});

// Закриття модалок по кліку повз вікно
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeModal(e.target);
  }
});

// Обробники для іконок хедера
document
  .querySelector('[data-modal-target="contacts-modal"]')
  .addEventListener('click', (e) => {
    e.preventDefault();
    openModal(contactsModal);
    console.log('contacts clicked');
  });

document
  .querySelector('[data-modal-target="cart-modal"]')
  .addEventListener('click', (e) => {
    e.preventDefault();
    displayCartItems();
    openModal(cartModal);
  });

// Кнопка "Додати до кошика" в модалці
addToCartButton.addEventListener('click', () => {
  if (currentProductToAdd) {
    let quantity;
    let variant = null;

    if (weightSelect.classList.contains('hidden')) {
      // Додаємо за кількістю
      quantity = parseInt(quantityInput.value);
      if (isNaN(quantity) || quantity <= 0) {
        alert('Будь ласка, введіть дійсну кількість.');
        return;
      }
    } else {
      // Додаємо за вагою
      variant = parseFloat(weightSelect.value);
      quantity = 1; // Для варіантів ваги, кількість завжди 1, а вага - це "кількість"
      if (isNaN(variant) || variant <= 0) {
        alert('Будь ласка, виберіть дійсний варіант ваги.');
        return;
      }
    }
    addToCart(currentProductToAdd, quantity, variant);
    closeModal(addToCartModal);
  }
});

// Перехід до кошика з повідомлення про додавання
goToCartBtn.addEventListener('click', () => {
  closeModal(addToCartMessage);
  openModal(cartModal);
});

//! Burger menu

// Helper function to set header height dynamically for CSS variable
function setHeaderHeightCssVariable() {
  const header = document.querySelector('.header');
  if (header) {
    document.documentElement.style.setProperty(
      '--header-height',
      `${header.offsetHeight}px`
    );
  }
}

// Call on load and resize
window.addEventListener('load', setHeaderHeightCssVariable);
window.addEventListener('resize', setHeaderHeightCssVariable);

burgerMenuBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  mobileMenuOverlay.classList.toggle('open'); // Toggle the 'open' class
  body.style.overflow = mobileMenuOverlay.classList.contains('open')
    ? 'hidden'
    : ''; // Disable/enable body scroll

  // Toggle burger/close icon
  if (mobileMenuOverlay.classList.contains('open')) {
    burgerMenuIcon.classList.remove('fa-bars');
    burgerMenuIcon.classList.add('fa-times'); // 'fa-times' is the close icon
    populateMobileMenuCategories(); // Populate only when opening
  } else {
    burgerMenuIcon.classList.remove('fa-times');
    burgerMenuIcon.classList.add('fa-bars');
  }
});

// Click outside to close mobile menu
document.addEventListener('click', (event) => {
  // Check if the menu is open AND if the click is outside both the burger button AND the menu content
  if (
    mobileMenuOverlay.classList.contains('open') && // Only try to close if it's open
    !menuContent.contains(event.target) &&
    !burgerMenuBtn.contains(event.target) // Prevent closing if the burger button itself was clicked
  ) {
    mobileMenuOverlay.classList.remove('open');
    body.style.overflow = ''; // Re-enable body scroll
    burgerMenuIcon.classList.remove('fa-times'); // Revert icon
    burgerMenuIcon.classList.add('fa-bars');
  }
});

// Close menu if a link inside is clicked
mobileMenuCategories.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    mobileMenuOverlay.classList.remove('open');
    body.style.overflow = '';
    burgerMenuIcon.classList.remove('fa-times');
    burgerMenuIcon.classList.add('fa-bars');
  }
});

// Додаємо обробники для мобільних іконок в хедері мобільного меню
// mobileMenuOverlay
//   .querySelector('[data-modal-target="contacts-modal"]')
//   .addEventListener('click', (e) => {
//     e.preventDefault();
//     openModal(contactsModal);
//   });

// Hero Slider navigation
prevSlideBtn.addEventListener('click', () => {
  prevSlide();
  resetSlideShow();
});
nextSlideBtn.addEventListener('click', () => {
  nextSlide();
  resetSlideShow();
});

// Додаємо обробник для кнопки "Обрані товари"
openLikedProductsModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openLikedProductsModal();
});

// Theme toggle functionality (if you have one)
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  // Зберігаємо вибір теми в localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('fitcakes-theme', 'dark');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem('fitcakes-theme', 'light');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Check for saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('fitcakes-theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.remove('dark-theme');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

//! FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all other items
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });
    
    // Toggle current item
    if (!isActive) {
      faqItem.classList.add('active');
    } else {
      faqItem.classList.remove('active');
    }
  });
});

//Open first FAQ item by default
document.querySelector('.faq-item')?.classList.add('active');

// --- Ініціалізація сторінки ---

// Функція для заповнення мобільного меню категоріями
const populateMobileMenuCategories = () => {
  mobileMenuCategories.innerHTML = '';
  products.forEach((category) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${category.categoryId}`;
    a.textContent = category.category;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.getElementById(category.categoryId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    li.appendChild(a);
    mobileMenuCategories.appendChild(li);
  });
};

/**
 * Відображає повідомлення "Товар додано до кошика!"
 */
const showAddToCartMessage = () => {
  addToCartMessage.classList.remove('hide'); // Ensure it's not hidden
  addToCartMessage.classList.add('show');
  messageTimerBar.style.width = '100%';
  messageTimerBar.style.transition = 'width 3s linear';
  console.log('timer');

  setTimeout(() => {
    addToCartMessage.classList.remove('show');
    addToCartMessage.classList.add('hide'); // Add hide class to trigger slideOutRight
    messageTimerBar.style.transition = 'none';
    messageTimerBar.style.width = '0%';
  }, 3000); // Повідомлення зникає через 3 секунди
};

// Логіка оформлення замовлення
// Checkout
checkoutButton.addEventListener('click', () => {
  closeModal(cartModal);
  openModal(orderModal);

});

editOrder.addEventListener('click', () => {
  closeModal(orderModal);
  openModal(cartModal);
});;

//! --- Ініціалізація сторінки ---

document.addEventListener('DOMContentLoaded', () => {
  displayProducts();

  // 1. Populate likedProductsData from Local Storage first
  const likedIds = getLikedProducts();
  likedProductsData = products
    .flatMap((cat) => cat.categoryList)
    .filter((p) => likedIds.includes(p.id));

  // 2. Now call all functions that depend on fully loaded data
  updateLikedProductsCount(); // Will now reflect the actual liked products
  updateCartCount(); // Ensure cart count is also updated (already correct based on `loadCart()`)

  populateHeroSlider();
  populateMobileMenuCategories();

  document.querySelectorAll('.like-button').forEach((button) => {
    const productId = button.dataset.productId;
    updateLikeButtonIcon(button, productId);
  });

  console.log(likedProductsData);
  
});