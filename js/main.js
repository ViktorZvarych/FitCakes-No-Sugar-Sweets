const products = [
  {
    category: 'Торти',
    categoryId: 'torts',
    categoryImg: 'torts.webp',
    акція: '', // Додано порожнє поле акція
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
        categoryId: 'torts',
      },
      {
        назва: 'Наполеон',
        ціна: 650,
        склад: '',
        кбжв: '',
        варіанти: [0.5, 0.8, 1, 1.5, 2],
        images: ['tort-napoleon1.webp'],
        акція: {
          термін: '31.09.2025',
          ціна: 600,
        },
        categoryId: 'torts',
      },
      {
        назва: 'Естерхазі',
        ціна: 650,
        склад: '',
        кбжв: '',
        варіанти: [0.5, 0.8, 1, 1.5, 2],
        images: ['tort-esterhazi1.webp'],
        categoryId: 'torts',
      },
      {
        назва: 'Морквяний',
        ціна: 650,
        склад: '',
        кбжв: '200 / 6.3 / 15 / 10.3',
        варіанти: [0.5, 0.8, 1, 1.5, 2],
        images: ['tort-morkva1.webp'],
        categoryId: 'torts',
      },
    ],
  },
  {
    category: 'Бенто-Торти',
    categoryId: 'bento-torts',
    categoryImg: 'bento-torts.webp',
    акція: '', // Додано порожнє поле акція
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
        categoryId: 'bento-torts',
      },
      {
        назва: 'Шоколадний бісквіт',
        ціна: 1000,
        склад: '',
        кбжв: '',
        варіанти: [0.65],
        images: ['bento-tort-shokolad1.jpg'],
        categoryId: 'bento-torts',
      },
      {
        назва: 'Малина-ваніль',
        ціна: 1000,
        склад:
          'борошно з вівсяних висівок, мигдалеве борошно, рисове борошно, сухе молоко, яйця, молоко, цукрозамінники (еритрол, стевія), розпушувач, лимонний сік, крем-сир, вершковий сир, вершки 30%, малина, крохмаль',
        кбжв: '212 / 7.9 / 16.4 / 8',
        варіанти: [0.65],
        images: ['bento-tort-malyna1.jpg'],
        categoryId: 'bento-torts',
      },
      {
        назва: 'Вишня-шоколад',
        ціна: 1000,
        склад:
          'Вівсяні висівки, мигдалеве борошно, яйця, кефір, какао, цукрозамінники (еритрол, стевія), вишня, крохмаль, крем-сир, сир рікота, вершки',
        кбжв: '187 / 7.2 / 14.8 / 6.5',
        варіанти: [0.65],
        images: ['bento-tort-vyshnia1.jpg'],
        categoryId: 'bento-torts',
      },
    ],
  },
  {
    category: 'Fit-Паски',
    categoryId: 'fit-pasky',
    categoryImg: 'fit-pasky.webp',
    акція: '', // Додано порожнє поле акція
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
        categoryId: 'fit-pasky',
      },
      {
        назва: 'Сирна',
        ціна: 450,
        склад:
          'кисломолочний сир, яйця, кокосове масло, еритрол, розпушувач, рисове борошно, кукурудзяне борошно, мигдалеве борошно, сухе знежирене молоко',
        кбжв: '156.7 / 10.6 / 5.9 / 14.7',
        варіанти: [0.4, 0.6, 0.9],
        images: ['fit-paska-syrna1.jpg'],
        categoryId: 'fit-pasky',
      },
      {
        назва: 'Апельсинова з маком',
        ціна: 450,
        склад:
          'сік апельсиновий, рисове борошно, кукурудзяний крохмаль, кукурудзяне борошно, мигдалеве борошно, розпушувач, молоко, кокосове масло, еритрол, стевія, мак, сухе знежирене молоко',
        кбжв: '223 / 12.9 / 7.8 / 25',
        варіанти: [0.4, 0.6, 0.9],
        images: ['fit-paska-apelsyn1.jpg'],
        categoryId: 'fit-pasky',
      },
      {
        назва: 'З курагою та білим шоколадом',
        ціна: 450,
        склад:
          'цільнозернове пшеничне борошно, мигдалеве борошно, кукурудзяне борошно, яйця, ряженка, стевія, еритрол, розпушувач, кукурудзяний крохмаль, сухе знежирене молоко',
        кбжв: '172 / 8.1 / 4.7 / 27.8',
        варіанти: [0.5, 1],
        images: ['fit-paska-kuraha1.jpg'],
        categoryId: 'fit-pasky',
      },
      {
        назва: 'Крафін',
        ціна: 450,
        склад:
          'Кисломолочний сир, кокосове масло, яйця, рисове борошно, кукурудзяне борошно, цільнозернове пшеничне борошно, како, розпушувач, еритрол, стевія, волоські горіхи, білий шоколад без цукру, вершки, арахісова паста',
        кбжв: '306 / 13.6 / 17 / 29.8',
        варіанти: [0.5, 1],
        images: ['fit-paska-krafin1.webp'],
        categoryId: 'fit-pasky',
      },
    ],
  },
  {
    category: 'Мадлени',
    categoryId: 'madleny',
    categoryImg: 'madleny.webp',
    акція: '', // Додано порожнє поле акція
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
        вага: '80',
        images: ['madlen-snikers1.webp'],
        акція: {
          термін: '31.08.2025',
          ціна: 60,
          умова: 'За умови придбання 6 шт. і більше',
        },
        categoryId: 'madleny',
      },
      {
        назва: 'Вишня-шоколад',
        ціна: 75,
        склад: '',
        кбжв: '78 / 2 / 6.1 / 10',
        вага: '80',
        images: ['madlen-vyshnia1.webp'],
        categoryId: 'madleny',
      },
      {
        назва: 'Кокос',
        ціна: 75,
        склад: '',
        кбжв: '88 / 2.1 / 7 / 9.8',
        вага: '80',
        images: ['madlen-kokos1.jpg'],
        categoryId: 'madleny',
      },
    ],
  },
  {
    category: 'Cookies',
    categoryId: 'cookies',
    categoryImg: 'cookies.webp',
    акція: '', // Додано порожнє поле акція
    categoryDescription: [
      'Корисне печиво без цукру — ідеальний перекус з балансом макроелементів, яке поєднує смак і користь.',
    ],
    categoryList: [
      {
        назва: 'Морквяне',
        ціна: 50,
        склад: '',
        кбжв: '161 / 4.5 / 7.7 / 20.5',
        вага: '80',
        images: ['cookies-morkva1.jpg'],
        categoryId: 'cookies',
      },
      {
        назва: 'Мигдаль-кокос',
        ціна: 50,
        склад: '',
        кбжв: '219 / 7.5 / 12.1 / 21.5',
        вага: '80',
        images: ['cookies-myhdal-kokos1.jpg'],
        categoryId: 'cookies',
      },
      {
        назва: 'Баунті',
        ціна: 50,
        склад: '',
        кбжв: '203 / 6.1 / 10.8 / 25',
        вага: '80',
        images: ['cookies-bounti1.jpg'],
        categoryId: 'cookies',
      },
      {
        назва: 'Снікерс',
        ціна: 50,
        склад: '',
        кбжв: '212 / 7.6 / 9.3 / 24.4',
        вага: '80',
        images: ['cookies-snikers1.jpg'],
        categoryId: 'cookies',
      },
      {
        назва: 'Вишня-шоколад',
        ціна: 50,
        склад: '',
        кбжв: '172 / 4.9 / 8.2 / 23',
        вага: '80',
        images: ['cookies-vyshnia1.jpg'],
        categoryId: 'cookies',
      },
    ],
  },
  {
    category: 'Fit MOTI',
    categoryId: 'fit-moti',
    categoryImg: 'fit-moti.webp',
    акція: {
      термін: '31.08.2025',
      умови: [
        'від 4 шт - 82.5 ₴/шт',
        'від 6 шт - 80 ₴/шт',
        'від 8 шт - 77.5 ₴/шт',
        'від 12 шт - 75 ₴/шт',
      ],
    },
    categoryDescription: [
      'Корисна версія традиційних японських солодощів.',
      'Справжня насолода з екзотичними смаками, білком та натуральними складниками.',
      'Легкий, ніжний десерт, тане у роті немов розтоплене морозиво.',
      'Але у порівнянні з морозивом - низькокалорійне, без цукру та збалансоване.',
      'Улюблений десерт літа багатьох🍚🍧🍨',
      'Термін зберігання після розморозки - 48годин у холодильнику.',
      'Зберігати в упаковці або герметично закриті плівкою.',
      'У морозильній камері - 2 тижні, але також герметично запаковані харчовою плівкою',
    ],
    categoryList: [
      {
        назва: 'Полуничний пломбір',
        ціна: 90,
        склад:
          'Борошно клейкого рису, кукурудзяний крохмаль, оливкова олія, крем-сир, полуниця, протеїн, вершки, протеїновий полуничний йогури, шоколад без цукру, стевія, еритрол',
        кбжв: '100.5 / 3.5 / 5.14 / 11.7',
        вага: '80',
        images: ['fit-moti-polunytsia1.jpg'],
        categoryId: 'fit-moti',
      },
      {
        назва: 'Орео',
        ціна: 90,
        склад:
          'Борошно клейкого рису, кукурудзяний крохмаль, оливкова олія, крем-сир, печиво орео без цукру, протеїн, желатин, вершки, згущене кокосове молоко, стевія, еритрол',
        кбжв: '115.6 / 5.8 / 4.9 / 12.4',
        вага: '80',
        images: ['fit-moti-oreo1.jpg'],
        categoryId: 'fit-moti',
      },
      {
        назва: 'Манго-чіа',
        ціна: 90,
        склад:
          'Борошно клейкого рису, пюре манго, кукурудзяний крохмаль, оливкова олія, крем-сир, вершки, протеїн, молоко, зерна чіа, желатин, стевія, еритрол',
        кбжв: '92.6 / 4 / 3.8 / 10.2',
        вага: '80',
        images: ['fit-moti-mango-сhia1.jpg'],
        categoryId: 'fit-moti',
      },
      {
        назва: 'Манго-маракуя-кокос',
        ціна: 90,
        склад:
          'Борошно клейкого рису, смородина, кукурудзяний крохмаль, оливкова олія, крем-сир, протеїн, вершки, желатин, ваніль, шоколад без цукру, стевія, еритрол',
        кбжв: '108.6 / 3.5 / 5.9 / 16.3',
        вага: '80',
        images: ['fit-moti-mango-smorodyna1.jpg'],
        categoryId: 'fit-moti',
      },
      {
        назва: 'Манго-маракуя-кокос',
        ціна: 90,
        склад:
          'Пюре манго, пюре маракуї, кокосова стружка, протеїн, сир рікотта, вершкови   сир, білий шоколад без цукру, желатин, борошно клейкого рису, оливкова олія, пектин, соєвий білок, стевія, еритрол',
        кбжв: '100 / 6.6 / 3.4 / 11.2',
        вага: '80',
        images: ['fit-moti-mango-kokos1.jpg'],
        categoryId: 'fit-moti',
      },
      {
        назва: 'Rafaello',
        ціна: 90,
        склад:
          'Кокосова стружка, кокосові вершки, мигдаль, сир рікотта, вершковий сир, протеїн, соєвий білок, шоколад без цукру, желатин, борошно клейкого рису, оливкова олія, стевія, еритрол',
        кбжв: '126 / 7 / 6.6 / 9.7',
        вага: '80',
        images: ['fit-moti-rafaello1.jpg'],
        categoryId: 'fit-moti',
      },
      {
        назва: 'Фісташка',
        ціна: 90,
        склад:
          'Фісташка, вершковий сир, желатин, сир рікотта, протеїн, соєвий білок, крем-сир, шоколад без цукру, борошно клейкого рису, оливкова олія, стевія, еритрол',
        кбжв: '133 / 7.5 / 6.3 / 11.8',
        вага: '80',
        images: ['fit-moti-fistashka1.jpg'],
        categoryId: 'fit-moti',
      },
      {
        назва: 'Кава-карамель',
        ціна: 90,
        склад:
          'Карамель без цукру, кава, желатин, кокосове масло, сир рікотта, вершковий сир, протеїн, яєчний білок, соєвий білок, протеїн, молоко, білий шоколад без цукру, борошно клейкого рису, оливкова олія, стевія, еритрол',
        кбжв: '100 / 6.6 / 3.4 / 11.2',
        вага: '80',
        images: ['fit-moti-kava1.jpg'],
        categoryId: 'fit-moti',
      },
    ],
  },
  {
    category: 'Брауні',
    categoryId: 'protein-brownies',
    categoryImg: 'protein-brownies.webp',
    акція: '', // Додано порожнє поле акція
    categoryDescription: [
      'Протеїнові брауні — ситний і корисний десерт без цукру.',
      'Ідеальний для спортсменів і прихильників здорового способу життя.',
      'Цей десерт містить велику кількість білка. У його складі є протеїн, завдяки чому, з`ївши шматочок брауні, ви можете легко поповнити запаси білка в організмі.',
      'Білок — це макронутрієнт, який ми часто не добираємо у щоденному раціоні. А його дефіцит може негативно впливати на стан шкіри, фігуру, тіло та м`язи.',
      'Тому цей десерт — чудовий варіант для всіх, а особливо для тих, хто займається спортом, стежить за калорійністю раціону та балансом макронутрієнтів.',
    ],
    categoryList: [
      {
        назва: 'Дубайська начинка',
        ціна: 60,
        склад:
          'Мигдалеве борошно, протеїн, какао, розпушувач, яйця, солосвіт, еритрол, йогурт, рисове борошно, кукурудзяний крохмаль, фісташкова паста, шоколад без цукру',
        кбжв: '100 / 5.1 / 6 / 8',
        вага: '80',
        images: ['protein-browny-dubais1.jpg'],
        categoryId: 'protein-brownies',
      },
      {
        назва: 'Rafaello',
        ціна: 60,
        склад:
          'Мигдалеве борошно, протеїн, какао, розпушувач, яйця, солосвіт, еритрол, йогурт, кокосова стружка, кокосове згущене молоко без цукру, кокосове борошно, шоколад без цукру',
        кбжв: '84 / 7 / 4 / 5',
        вага: '80',
        images: ['protein-browny-rafaello1.jpg'],
        categoryId: 'protein-brownies',
      },
      {
        назва: 'Фінікова карамель',
        ціна: 60,
        склад:
          'Мигдалеве борошно, протеїн, какао, розпушувач, яйця, солосвіт, еритрол, йогурт, арахісова паста, фініки, шоколад без цукру',
        кбжв: '98 / 6.4 / 5 / 6.3',
        вага: '80',
        images: ['protein-browny-finik1.jpg'],
        categoryId: 'protein-brownies',
      },
    ],
  },
  {
    category: 'Цукерки',
    categoryId: 'tsukerky',
    categoryImg: 'tsukerky.webp',
    акція: '', // Додано порожнє поле акція
    categoryDescription: [
      'Шоколадні цукерки, які на разі представлені у 2 смаках.',
      'Але такі різні як по складу, так і на смак.',
      'Проте, кожна з них потребує твоєї уваги.',
      'Протеїнова цукерка - це бомба ніжного протеїно-карамельного смаку.',
      'Містить велику кількість білку.💪',
      'Дубайська цукерка - хрусткий фісташковий смак, під хрустким молочним шоколадом.🍫',
      'Обирай, але ти оціниш обидва смаки.',
    ],
    categoryList: [
      {
        назва: 'Протеїнова',
        ціна: 60,
        склад:
          'шоколад без цукру, протеїн, арахісові паста, ізолят соєвого білка',
        кбжв: '140 / 9.4 / 10.8 / 11.7',
        вага: '80',
        images: ['tsukerky-protein.jpg'],
        categoryId: 'tsukerky',
      },
      {
        назва: 'Дубайська',
        ціна: 60,
        склад:
          'шоколад без цукру, арахісова паста, рисове борошно, оливкова олія, фісташкова паста, кукурудзяний крохмаль',
        кбжв: '158 / 3.2 / 11.4 / 21.6',
        вага: '80',
        images: ['tsukerky-dubai.jpg'],
        categoryId: 'tsukerky',
      },
    ],
  },
];

// --- Динамічна зміна року у футері ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Змінні DOM елементів ---
const body = document.body;

// Menu
const themeToggleBtn = document.getElementById('theme-toggle');
const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const menuContent = document.getElementById('mobile-menu-content');
const mobileMenuLinks = document.querySelector('.mobile-menu-links');
const mobileMenuCategories = document.querySelector('.mobile-menu-categories');
const burgerMenuIcon = burgerMenuBtn.querySelector('i');

// Products
const productsContainer = document.querySelector('.products-container');

// Slider
const heroSlider = document.querySelector('.hero-slider');
const sliderDotsContainer = document.querySelector('.slider-dots');
const prevSlideBtn = document.querySelector('.prev-slide');
const nextSlideBtn = document.querySelector('.next-slide');
const sliderInterval = 7000;

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

///! --- Функції для роботи з Local Storage та кошиком ---
const loadCart = () => {
  try {
    return JSON.parse(localStorage.getItem('fitcakes-cart')) || [];
  } catch (e) {
    console.error('Помилка завантаження кошика:', e);
    return [];
  }
};

/**
 * Перевіряє, чи акція ще дійсна
 * @param {string} endDate - Дата закінчення акції (DD.MM.YYYY або YYYY-MM-DD)
 * @param {Date} [currentDate] - Опціонально: дата для перевірки (за замовчуванням — поточна)
 * @returns {boolean} - true, якщо акція дійсна
 */
function isPromotionActive(endDate, currentDate = new Date()) {
  if (!endDate) {
    return false;
  }

  let day, month, year;
  if (endDate.includes('.')) {
    [day, month, year] = endDate.split('.').map(Number); // DD.MM.YYYY
  } else {
    [year, month, day] = endDate.split('-').map(Number); // YYYY-MM-DD
  }

  const promotionEnd = new Date(year, month - 1, day, 23, 59, 59, 999);
  const isActive = currentDate <= promotionEnd;

  return isActive;
}

/**
 * Отримує акційну ціну для продукту (якщо є знижка на категорію або конкретний товар)
 * @param {string} categoryId - ID категорії
 * @param {string} productName - Назва продукту (опціонально, якщо потрібна знижка саме на нього)
 * @param {number} quantity - Кількість товару (для оптових знижок)
 * @returns {object|null} - Об'єкт з інформацією про знижку або `null`, якщо її немає
 *   Формат: {
 *     type: 'product' | 'category', // Тип знижки (на продукт чи категорію)
 *     originalPrice: number,        // Початкова ціна
 *     discountPrice: number,       // Ціна зі знижкою (за одиницю)
 *     validUntil: string,          // Термін дії знижки (дата)
 *     bulkDiscount: {              // Якщо є оптова знижка (необов'язково)
 *       bulkPrice: number,         // Сумарна ціна за партію
 *       bulkQuantity: number,      // Необхідна кількість
 *     }
 *   }
 */
const getDiscountInfo = (categoryId, productName = null, quantity = 1) => {
  const category = products.find((p) => p.categoryId === categoryId);
  if (!category) {
    console.log('Категорія не знайдена');
    return null;
  }

  // 1. Перевіряємо акцію на конкретний продукт (якщо вказано назву)
  if (productName) {
    const product = category.categoryList.find((p) => p.назва === productName);
    if (product?.акція) {
      if (isPromotionActive(product.акція.термін)) {
        // Перевіряємо умову кількості для акції продукту (якщо є)
        if (product.акція.умова) {
          const match = product.акція.умова.match(/придбання (\d+) шт/);
          if (match) {
            const requiredQty = parseInt(match[1]);

            if (quantity < requiredQty) return null;
          }
        }

        return {
          type: 'product',
          originalPrice: product.ціна,
          discountPrice: product.акція.ціна,
          validUntil: product.акція.термін,
        };
      }
    }
  }

  // 2. Перевіряємо оптову знижку на категорію
  if (category?.акція?.умови && isPromotionActive(category.акція.термін)) {

    const bulkConditions = category.акція.умови
      .map((condition) => {
        const [qtyStr, priceStr] = condition.split(' - ');
        return {
          quantity: parseInt(
            qtyStr.replace('від ', '').replace(' шт', '').trim()
          ),
          price: parseFloat(priceStr.replace(' ₴/шт', '').trim()),
        };
      })
      .sort((a, b) => b.quantity - a.quantity); // Сортуємо за спаданням кількості

    const bestDiscount = bulkConditions.find(
      (cond) => quantity >= cond.quantity
    );

    if (bestDiscount) {
      const productPrice = productName
        ? category.categoryList.find((p) => p.назва === productName)?.ціна
        : category.categoryList[0]?.ціна;

      return {
        type: 'category',
        originalPrice: productPrice,
        discountPrice: bestDiscount.price,
        validUntil: category.акція.термін,
        bulkDiscount: {
          bulkPrice: bestDiscount.price * quantity,
          bulkQuantity: bestDiscount.quantity,
        },
      };
    }
  }

  return null; // Акція не знайдена
};

const saveCart = (cart) => {
  localStorage.setItem('fitcakes-cart', JSON.stringify(cart));
};

let cart = loadCart();

const updateCartCount = () => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountSpan.textContent = totalItems;
  cartCountSpan.style.display = totalItems > 0 ? 'flex' : 'none';
};

/**
 * Отримує акційну ціну для продуктів зі знижкою за кількість
 * @param {string} categoryId - ID категорії
 * @param {number} quantity - Загальна кількість товарів у категорії
 * @returns {number|null} - Акційна ціна або null, якщо акція не застосовується
 */
const getBulkDiscountPrice = (categoryId, quantity) => {
  const category = products.find((p) => p.categoryId === categoryId);
  if (!category?.акція?.умови || !isPromotionActive(category.акція.термін))
    return null;

  const bulkConditions = category.акція.умови
    .map((condition) => {
      const [qtyStr, priceStr] = condition.split(' - ');
      return {
        quantity: parseInt(qtyStr),
        price: parseInt(priceStr.replace(' ₴', '')),
      };
    })
    .sort((a, b) => b.quantity - a.quantity); // Сортуємо за спаданням кількості

  for (const condition of bulkConditions) {
    if (quantity >= condition.quantity) {
      return {
        pricePerItem: condition.price / condition.quantity,
        bulkPrice: condition.price,
        bulkQuantity: condition.quantity,
      };
    }
  }
  return null;
};

const addToCart = (product, quantity, variant = null) => {
  const uniqueProductId = `${product.categoryId}-${product.назва}`;
  let price = product.ціна;
  let isPromo = false;
  let discountInfo = null;

  // Перевіряємо акцію на продукт
  discountInfo = getDiscountInfo(product.categoryId, product.назва, quantity);

  if (discountInfo) {
    price = discountInfo.discountPrice;
    isPromo = true;
  }

  // Для вагових товарів
  if (variant !== null) {
    price = price * variant; // Використовуємо вже акційну ціну (якщо є)
    quantity = 1;
  }

  const itemId =
    variant !== null ? `${uniqueProductId}-${variant}` : uniqueProductId;
  const existingItem = cart.find((item) => item.itemId === itemId);

  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.totalPrice = existingItem.quantity * price;
  } else {
    cart.push({
      itemId,
      id: uniqueProductId,
      name: product.назва,
      price: price,
      originalPrice: product.ціна,
      quantity,
      variant,
      image: product.images[0] || 'placeholder.jpg',
      totalPrice: price * quantity,
      category: product.categoryId,
      isWeighted: !!product.варіанти,
      isPromo: isPromo,
    });
  }

  // Перераховуємо ціни для всіх товарів категорії з урахуванням оптової знижки
  if (!variant) {
    const categoryItems = cart.filter(
      (item) => item.category === product.categoryId && !item.isWeighted
    );
    const totalQuantity = categoryItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    // Отримуємо інформацію про знижку для всієї категорії
    const categoryDiscount = getDiscountInfo(
      product.categoryId,
      null,
      totalQuantity
    );

    if (categoryDiscount) {
      categoryItems.forEach((item) => {
        item.price = categoryDiscount.discountPrice;
        item.totalPrice = item.quantity * item.price;
        item.isPromo = true;
      });
    }
  }

  saveCart(cart);
  updateCartCount();
  displayCartItems();
  showAddToCartMessage();
};

const removeFromCart = (itemId) => {
  cart = cart.filter((item) => item.itemId !== itemId);
  saveCart(cart);
  updateCartCount();
  displayCartItems();
};

const updateCartItemQuantity = (itemId, newQuantity) => {
  const item = cart.find((item) => item.itemId === itemId);
  if (item && !item.isWeighted) {
    item.quantity = newQuantity;

    // Спочатку перевіряємо акцію на конкретний товар
    const productDiscount = getDiscountInfo(
      item.category,
      item.name,
      newQuantity
    );

    if (productDiscount) {
      item.price = productDiscount.discountPrice;
      item.totalPrice = newQuantity * item.price;
      item.isPromo = true;
    } else {
      // Якщо немає акції на товар, перевіряємо акцію на категорію
      const categoryItems = cart.filter(
        (i) => i.category === item.category && !i.isWeighted
      );
      const totalQuantity = categoryItems.reduce(
        (sum, i) => sum + i.quantity,
        0
      );

      const categoryDiscount = getDiscountInfo(
        item.category,
        null,
        totalQuantity
      );

      if (categoryDiscount) {
        categoryItems.forEach((i) => {
          i.price = categoryDiscount.discountPrice;
          i.totalPrice = i.quantity * i.price;
          i.isPromo = true;
        });
      } else {
        // Якщо знижка більше не застосовується, повертаємо оригінальні ціни
        item.price = item.originalPrice;
        item.totalPrice = newQuantity * item.price;
        item.isPromo = false;
      }
    }

    saveCart(cart);
    updateCartCount();
    displayCartItems();
  }
};

const displayCartItems = () => {
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Ваш кошик порожній</p>';
    checkoutButton.style.display = 'none';
    return;
  }

  let totalPrice = 0;
  let totalItems = 0;

  // Групуємо товари по категоріям
  const categories = [...new Set(cart.map((item) => item.category))];

  categories.forEach((categoryId) => {
    const categoryItems = cart.filter((item) => item.category === categoryId);
    const totalCategoryQuantity = categoryItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    const bulkDiscount = getBulkDiscountPrice(
      categoryId,
      totalCategoryQuantity
    );

    // Додаємо заголовок категорії
    const categoryTitle = document.createElement('h3');
    categoryTitle.className = 'cart-category-title';
    categoryTitle.textContent =
      products.find((p) => p.categoryId === categoryId)?.category || categoryId;
    cartItemsContainer.appendChild(categoryTitle);

    // Додаємо інформацію про акцію, якщо є
    if (bulkDiscount) {
      const discountInfo = document.createElement('div');
      discountInfo.className = 'cart-discount-info';
      discountInfo.innerHTML = `
        <p>Акція: ${bulkDiscount.bulkQuantity} шт. за ${
        bulkDiscount.bulkPrice
      } ₴</p>
        <small>Діє до: ${
          products.find((p) => p.categoryId === categoryId)?.акція?.термін || ''
        }</small>
      `;
      cartItemsContainer.appendChild(discountInfo);
    }

    // Додаємо товари категорії
    categoryItems.forEach((item) => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';

      const variantText =
        item.variant !== null ? `${item.variant} кг` : `${item.quantity} шт.`;
      const pricePerUnit =
        item.variant !== null
          ? `${(item.price / item.variant).toFixed(2)} ₴/кг`
          : `${item.price} ₴/шт.`;

      itemElement.innerHTML = `
        <img src="./img/products/${item.image}" alt="${
        item.name
      }" onerror="this.onerror=null;this.src='./img/icons/heart-icon.svg'">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>${variantText}</p>
          <p class="cart-item-total">${item.totalPrice.toFixed(2)} ₴</p>
          <small>${pricePerUnit}</small>
          ${
            item.isPromo && !bulkDiscount
              ? '<span class="promo-badge">Акція</span>'
              : ''
          }
        </div>
        <div class="cart-item-controls">
          ${
            !item.isWeighted
              ? `
            <input type="number" min="1" value="${item.quantity}" class="item-quantity" data-item-id="${item.itemId}">
          `
              : ''
          }
          <button class="remove-item-btn" data-item-id="${
            item.itemId
          }">×</button>
        </div>
      `;

      cartItemsContainer.appendChild(itemElement);
      totalPrice += item.totalPrice;
      totalItems += item.quantity;
    });
  });

  // Обробники подій
  cartItemsContainer.querySelectorAll('.item-quantity').forEach((input) => {
    input.addEventListener('change', (e) => {
      const newQuantity = parseInt(e.target.value);
      if (newQuantity > 0) {
        updateCartItemQuantity(e.target.dataset.itemId, newQuantity);
      } else {
        removeFromCart(e.target.dataset.itemId);
      }
    });
  });

  cartItemsContainer.querySelectorAll('.remove-item-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      removeFromCart(e.target.dataset.itemId);
    });
  });

  cartTotalPriceSpan.textContent = totalPrice.toFixed(2);
  cartTotalItemsSpan.textContent = totalItems;
  checkoutButton.style.display = 'block';
};

/**
 * Відкриває модальне вікно додавання в кошик
 * @param {Object} product - Об'єкт товару
 */
const openAddToCartModal = (product, categoryId) => {
  currentProductToAdd = product;
  addToCartProductName.textContent = product.назва;

  // Додаємо categoryId до об'єкта продукту
  product.categoryId = categoryId;

  quantityInput.classList.add('hidden');
  weightSelect.classList.add('hidden');
  weightSelect.innerHTML = '';

  // Решта коду залишається без змін...
  if (product.варіанти && product.варіанти.length > 0) {
    weightSelect.classList.remove('hidden');

    product.варіанти.forEach((weight) => {
      const option = document.createElement('option');
      option.value = weight;
      option.textContent = `${weight} кг`;
      weightSelect.appendChild(option);
    });

    const initialWeight = product.варіанти[0];
    const discountInfo = getDiscountInfo(categoryId, product.назва, 1); // Використовуємо categoryId
    const price = discountInfo ? discountInfo.discountPrice : product.ціна;

    addToCartProductPrice.textContent = `${(initialWeight * price).toFixed(
      2
    )} ₴`;
    if (discountInfo) {
      addToCartProductPrice.innerHTML += ` <span class="original-price">(${(
        initialWeight * product.ціна
      ).toFixed(2)} ₴)</span>`;
    }

    weightSelect.addEventListener('change', (e) => {
      const selectedWeight = parseFloat(e.target.value);
      addToCartProductPrice.textContent = `${(selectedWeight * price).toFixed(
        2
      )} ₴`;
      if (discountInfo) {
        addToCartProductPrice.innerHTML += ` <span class="original-price">(${(
          selectedWeight * product.ціна
        ).toFixed(2)} ₴)</span>`;
      }
    });
  } else {
    quantityInput.classList.remove('hidden');
    quantityInput.value = 1;

    const discountInfo = getDiscountInfo(categoryId, product.назва, 1); // Використовуємо categoryId
    const price = discountInfo ? discountInfo.discountPrice : product.ціна;

    addToCartProductPrice.textContent = `${price} ₴`;
    if (discountInfo) {
      addToCartProductPrice.innerHTML += ` <span class="original-price">(${product.ціна} ₴)</span>`;
    }

    quantityInput.addEventListener('input', (e) => {
      const qty = parseInt(e.target.value);
      if (!isNaN(qty)) {
        const qtyDiscountInfo = getDiscountInfo(
          categoryId, // Використовуємо categoryId
          product.назва,
          qty
        );
        const qtyPrice = qtyDiscountInfo
          ? qtyDiscountInfo.discountPrice
          : product.ціна;

        addToCartProductPrice.textContent = `${(qty * qtyPrice).toFixed(2)} ₴`;
        if (qtyDiscountInfo) {
          addToCartProductPrice.innerHTML += ` <span class="original-price">(${(
            qty * product.ціна
          ).toFixed(2)} ₴)</span>`;
        }
      }
    });
  }

  openModal(addToCartModal);
};

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

  if (totalItemsInLikedProductsList > 0) {
    likedProductsCountSpan.style.display = 'flex';
  } else {
    likedProductsCountSpan.style.display = 'none';
  }
};

/**
 * Відображає список обраних товарів у вказаному контейнері.
 * @param {HTMLElement} container - Контейнер для відображення товарів.
 */
const renderLikedProducts = (container) => {
  container.innerHTML = '';
  
  if (likedProductsData.length === 0) {
    container.innerHTML = '<p>У вас немає обраних товарів.</p>';
    return;
  }

  likedProductsData.forEach((product) => {
    const likedItemDiv = document.createElement('div');
    likedItemDiv.classList.add('liked-product-item');
    likedItemDiv.innerHTML = `
      <img src="./img/products/${product.images[0]}" alt="${
      product.назва
    }" onerror="this.onerror=null;this.src='./img/icons/heart-icon.svg'">
      <div class="liked-product-details">
        <h4>${product.назва}</h4>
        ${
          product.кбжв ? `<p class="kbzhw">КБЖВ:</p><p>${product.кбжв}</p>` : ''
        }
        <p>Ціна: ${product.ціна} ₴${product.варіанти ? '/кг' : '/шт'}</p>
      </div>
      <div class="liked-product-actions">
        <button class="go-to-product-btn" data-product-id="${
          product.id
        }">До товару</button>
        <button class="remove-liked-btn" data-product-id="${
          product.id
        }">X</button>
      </div>
    `;
    container.appendChild(likedItemDiv);
  });

  // Додаємо обробники подій
  container.querySelectorAll('.remove-liked-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      productToRemoveFromLiked = e.target.dataset.productId;
      openModal(confirmModal);
    });
  });

  container.querySelectorAll('.go-to-product-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      const productId = e.target.dataset.productId;
      closeModal(likedProductsModal);
      const productElement = document.querySelector(`[data-product-id="${productId}"]`);
      if (productElement) {
        productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        productElement.classList.add('highlight-product');
        setTimeout(() => {
          productElement.classList.remove('highlight-product');
        }, 2000);
      }
    });
  });
};

/**
 * Відкриває модальне вікно "Обрані товари" та відображає їх.
 */
const openLikedProductsModal = () => {
  renderLikedProducts(likedProductsList);
  openModal(likedProductsModal);
  updateLikedProductsCount();
};

/**
 * Оновлює відображення обраних продуктів (для використання після видалення)
 */
const displayLikedProducts = () => {
  renderLikedProducts(likedProductsList);
  updateLikedProductsCount();
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

//! --- Функції для відображення товарів ---

/**
 * Генерує картку товару.
 * @param {Object} product - Об'єкт товару.
 * @returns {HTMLElement} HTML елемент картки товару.
 */
const createProductCard = (product, index) => {
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.classList.add(index % 2 === 0 ? 'animate-left' : 'animate-right');
  card.setAttribute('data-product-id', product.id);

  const imagePath = `./img/products/${product.images[0]}`;

  // Визначаємо акційну ціну
  const discountInfo = getDiscountInfo(product.categoryId, product.назва);
  const showOriginalPrice = discountInfo && discountInfo.type === 'product';
  const currentPrice = showOriginalPrice
    ? discountInfo.discountPrice
    : product.ціна;

  card.innerHTML = `
    <div class="product-card-overlay-buttons">
      <button class="like-button" data-product-id="${product.id}"></button>
      <button class="details-button" data-product-id="${
        product.id
      }"><i class="fas fa-info"></i></button>
    </div>
    <div>
      <img src="${imagePath}" alt="${
    product.назва
  }" onerror="this.onerror=null;this.src='./img/icons/heart-icon.svg'">
      <h3>${product.назва}</h3>
    </div>
    
    <div>
      <div class="price-container">
        ${
          showOriginalPrice
            ? `<span class="original-price">${product.ціна} ₴</span>`
            : ''
        }
        <p class="price">${currentPrice} ₴${product.варіанти ? '/кг' : '/шт'}</p>
      </div>
      ${product.кбжв ? `<p class="kbzhw">КБЖВ: <br>${product.кбжв}</p>` : ''}
      <div class="product-card-buttons">
        <button class="buy-button" data-product-id="${
          product.id
        }">Замовити</button>
      </div>
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
    .addEventListener('click', () => openAddToCartModal(product, product.categoryId));
  card
    .querySelector('.details-button')
    .addEventListener('click', () =>
      openProductDetailsModal(product, product.categoryId)
    );

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

//! --- Функції для слайдера Hero Section (акційні товари) ---
let currentSlide = 0;
let slideInterval;

/**
 * Оновлює стан слайдера (активний слайд та точки)
 */
const updateSlider = () => {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');

  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
};

/**
 * Переходить до певного слайду
 * @param {number} index - Індекс слайду
 */
const goToSlide = (index) => {
  const slides = document.querySelectorAll('.hero-slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  updateSlider();
};

/**
 * Переходить до наступного слайду
 */
const nextSlide = () => {
  goToSlide(currentSlide + 1);
};

/**
 * Переходить до попереднього слайду
 */
const prevSlide = () => {
  goToSlide(currentSlide - 1);
};

/**
 * Запускає автоматичну зміну слайдів
 */
const startSlideShow = () => {
  clearInterval(slideInterval); // Очищаємо попередній інтервал, якщо він був
  slideInterval = setInterval(() => {
    nextSlide();
  }, sliderInterval); // Змінюємо слайд кожні 5 секунд
};

/**
 * Скидає таймер автоматичної зміни слайдів
 */
const resetSlideShow = () => {
  clearInterval(slideInterval);
  startSlideShow();
};

/**
 * Знаходить продукт за ID
 * @param {string} productId - ID продукту
 * @returns {Object|null} Об'єкт продукту або null, якщо не знайдено
 */
const findProductById = (productId) => {
  for (const category of products) {
    const product = category.categoryList.find((p) => p.id === productId);
    if (product) return product;
  }
  return null;
};

/**
 * Створює слайд для Hero Section з акційним товаром.
 * @param {Object} product - Об'єкт товару.
 * @returns {HTMLElement} HTML елемент слайда.
 */
const createHeroSlide = (product) => {
  if (product.акція) {
    const slide = document.createElement('div');
    slide.classList.add('hero-slide');
    slide.style.backgroundImage = `url(./img/products/${
      product.images[0] || './img/icons/heart.svg'
    })`;

    // Визначаємо текст акції та умови (за наявності)
    let saleText = `(Знижка ${Math.round(
      (1 - product.акція.ціна / product.ціна) * 100
    )}%)`;

    slide.innerHTML = `
    <div class="hero-slide-content">
      <div class="hero-slide-header">   
        <h3>${product.назва}</h3>
        <h5>(Категорія: ${product.category})</h5>
        <div class="price-container">
          <span class="original-price">
            ${product.ціна}
          </span>
          <span class="current-price">
            ${product.акція.ціна} ${product.варіанти ? '₴/кг' : '₴/шт'}
          </span>
        </div>
        <p class="sale-text">${saleText}</p>
      </div>      

      
        <p class="sale-date">Термін дії акції: до ${product.акція.термін}</p>
      
      <button class="details-button" data-product-id="${product.id}">
        Детальніше
      </button>
    </div>
  `;

    return slide;
  } else {
    return null;
  }
};

/**
 * Отримує всі акційні товари
 * @returns {Array} Масив товарів з акціями
 */
const getProductsOnSale = () => {
  return products.flatMap((category) =>
    category.categoryList
      .filter((product) => product.акція)
      .map((product) => ({
        ...product,
        category: category.category,
      }))
  );
};

/**
 * Заповнює слайдер акційними товарами
 */
const populateHeroSlider = () => {
  heroSlider.innerHTML = '';
  sliderDotsContainer.innerHTML = '';

  const saleProducts = getProductsOnSale();

  if (saleProducts.length === 0) {
    // Якщо немає акційних товарів, показуємо заглушку
    heroSlider.innerHTML = `
      <div class="hero-slide no-sales">
        <div class="hero-slide-content">
          <h3>Наразі акційних пропозицій немає</h3>
          <p>Слідкуйте за нашими оновленнями</p>
        </div>
      </div>
    `;
    return;
  }

  saleProducts.forEach((product, index) => {
    const slide = createHeroSlide(product);
    heroSlider.appendChild(slide);

    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.slideIndex = index;
    dot.addEventListener('click', () => goToSlide(index));
    sliderDotsContainer.appendChild(dot);
  });

  // Додаємо обробники кліків для кнопок "Детальніше"
  document.querySelectorAll('.details-button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const productId = e.target.dataset.productId;
      const product = findProductById(productId);
      if (product) {
        openProductDetailsModal(product);
      }
    });
  });

  updateSlider();
  startSlideShow();
};

//! --- Функції для модальних вікон ---

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
  const productCategory = products.find((cat) =>
    cat.categoryList.some((item) => item.id === product.id)
  );

  const kbzhvValues = product.кбжв ? product.кбжв.split(' / ') : [];

  // Отримуємо інформацію про акцію
  const discountInfo = getDiscountInfo(product.categoryId, product.назва);

  let saleInfoHtml = '';

  // Акція на конкретний продукт
  if (product.акція && isPromotionActive(product.акція.термін)) {
    const discountPercent = Math.round(
      (1 - product.акція.ціна / product.ціна) * 100
    );
    saleInfoHtml = `
      <div class="sale-info">
        <h4>Акція: Знижка ${discountPercent}%</h4>
        ${
          product.акція.умова
            ? `<p class="sale-info-condition"><strong>${product.акція.умова}</strong></p>`
            : ''
        }
        <p class="sale-info-date">Термін дії акції: до ${
          product.акція.термін
        }</p>
      </div>
    `;
  }
  // Акція на категорію
  else if (
    productCategory?.акція &&
    isPromotionActive(productCategory.акція.термін)
  ) {
    saleInfoHtml = `
      <div class="sale-info">
        <h4>Акція на категорію "${productCategory.category}"</h4>
        ${productCategory.акція.умови
          .map((condition) => `<p>${condition}</p>`)
          .join('')}
        <p class="sale-info-date">Термін дії акції: до ${
          productCategory.акція.термін
        }</p>
      </div>
    `;
  }

  productDetailsContent.innerHTML = `
    <img src="./img/products/${product.images[0] || 'placeholder.jpg'}" alt="${
    product.назва
  }">
    <div class="product-details-text">
      <h3>${product.назва}</h3>
      <div class="price-container">
        ${
          discountInfo
            ? `<span class="original-price">${product.ціна} ₴</span>`
            : ''
        }
        <span class="current-price">${
          discountInfo ? discountInfo.discountPrice : product.ціна
        } ${product.варіанти ? '₴/кг' : '₴/шт'}</span>
      </div>
      ${saleInfoHtml}
      ${product.опис ? `<p><strong>Опис:</strong> ${product.опис}</p>` : ''}
      ${product.склад ? `<p><strong>Склад:</strong> ${product.склад}</p>` : ''}
      ${product.кбжв ? `<p><strong>На 100г:</strong></p>` : ''}
      ${product.кбжв ? `<p>Калорій - ${kbzhvValues[0]}</p>` : ''}
      ${product.кбжв ? `<p>Білків - ${kbzhvValues[1]}</p>` : ''}
      ${product.кбжв ? `<p>Жирів - ${kbzhvValues[2]}</p>` : ''}
      ${product.кбжв ? `<p>Вуглеводів - ${kbzhvValues[3]}</p>` : ''}
      ${
        productCategory && productCategory.categoryDescription
          ? `
        <p><strong>Категорія:</strong> ${productCategory.category}</p>
        <p>${productCategory.categoryDescription.join(' ')}</p>
      `
          : ''
      }
      <button class="buy-button add-to-cart-from-details" data-product-id="${
        product.id
      }">
        Додати до кошика
      </button>
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

//! --- Обробники подій ---

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
  });

document
  .querySelector('[data-modal-target="cart-modal"]')
  .addEventListener('click', (e) => {
    e.preventDefault();
    displayCartItems();
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
const closeMobileMenuIfLinkClicked = (event) => {
  if (event.target.tagName === 'A') {
    mobileMenuOverlay.classList.remove('open');
    body.style.overflow = '';
    burgerMenuIcon.classList.remove('fa-times');
    burgerMenuIcon.classList.add('fa-bars');
  }
};

mobileMenuLinks.addEventListener('click', closeMobileMenuIfLinkClicked);

mobileMenuCategories.addEventListener('click', closeMobileMenuIfLinkClicked);

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

//! Theme toggle functionality
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

themeToggleBtn.addEventListener('click', () => {
  // Перемикаємо тему
  const isDark = body.classList.toggle('dark-theme');

  // Зберігаємо вибір користувача в localStorage
  if (isDark) {
    localStorage.setItem('fitcakes-theme', 'dark');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem('fitcakes-theme', 'light');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Функція для встановлення теми
const setTheme = () => {
  const savedTheme = localStorage.getItem('fitcakes-theme');

  // Якщо є збережена тема від користувача - використовуємо її
  if (savedTheme) {
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      body.classList.remove('dark-theme');
      themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }
  // Якщо немає збереженої теми - використовуємо тему пристрою
  else {
    if (prefersDarkScheme.matches) {
      body.classList.add('dark-theme');
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      body.classList.remove('dark-theme');
      themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }
};

// Встановлюємо тему при завантаженні сторінки
document.addEventListener('DOMContentLoaded', setTheme);

// Слухаємо зміни теми пристрою (якщо користувач не змінював тему вручну)
prefersDarkScheme.addListener((e) => {
  if (!localStorage.getItem('fitcakes-theme')) {
    setTheme();
  }
});

//! FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all other items
    document.querySelectorAll('.faq-item').forEach((item) => {
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
  addToCartMessage.classList.remove('hide');
  addToCartMessage.classList.add('show');
  messageTimerBar.style.width = '100%';
  messageTimerBar.style.transition = 'width 3s linear';

  setTimeout(() => {
    addToCartMessage.classList.remove('show');
    addToCartMessage.classList.add('hide');
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
});

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
});
