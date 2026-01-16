// Dropdown menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const dropdownContainer = document.querySelector('.dropdown-container');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  // Remove click-to-toggle logic for hover-based dropdown
});
// Navbar logic removed: site is now pre-navbar
// Navbar logic removed: site is now pre-navbar
// Animated two-line headline typewriter effect, each line appears separately
const headlineEn = "VISIT TANZANIA WITH FURAHAYAO SAFARIS, SEE THE BEST OF THE WORLD";
const headlineSw = "TEMBELEA TANZANIA NA FURAHAYAO SAFARIS, TAZAMA UZURI WA DUNIA";
const headlineEnEl = document.querySelector('.headline-en');
const headlineSwEl = document.querySelector('.headline-sw');
let idxEn = 0;
let idxSw = 0;

function showEnglishLine() {
  if (!headlineEnEl || !headlineSwEl) return;
  headlineEnEl.textContent = '';
  headlineSwEl.textContent = '';
  idxEn = 0;
  typeEnglishLine();
}

function typeEnglishLine() {
  if (!headlineEnEl) return;
  headlineEnEl.textContent = headlineEn.slice(0, idxEn);
  if (idxEn < headlineEn.length) {
    idxEn++;
    setTimeout(typeEnglishLine, 55);
  } else {
    setTimeout(() => {
      headlineEnEl.textContent = '';
      setTimeout(showSwahiliLine, 400);
    }, 1800);
  }
}

function showSwahiliLine() {
  if (!headlineEnEl || !headlineSwEl) return;
  headlineEnEl.textContent = '';
  headlineSwEl.textContent = '';
  idxSw = 0;
  typeSwahiliLine();
}

function typeSwahiliLine() {
  if (!headlineSwEl) return;
  headlineSwEl.textContent = headlineSw.slice(0, idxSw);
  if (idxSw < headlineSw.length) {
    idxSw++;
    setTimeout(typeSwahiliLine, 55);
  } else {
    setTimeout(() => {
      headlineSwEl.textContent = '';
      setTimeout(showEnglishLine, 400);
    }, 1800);
  }
}

showEnglishLine();


// Tanzanian words and translations for animation
const words = [
  {
    sw: 'Jambo',
    en: 'Hi',
    fr: 'Salut',
    de: 'Hallo',
    es: 'Hola'
  },
  {
    sw: 'Simba',
    en: 'Lion',
    fr: 'Lion',
    de: 'Löwe',
    es: 'León'
  },
  {
    sw: 'Twiga',
    en: 'Giraffe',
    fr: 'Girafe',
    de: 'Giraffe',
    es: 'Jirafa'
  },
  {
    sw: 'Tembo',
    en: 'Elephant',
    fr: 'Éléphant',
    de: 'Elefant',
    es: 'Elefante'
  },
  {
    sw: 'Mlima',
    en: 'Mountain',
    fr: 'Montagne',
    de: 'Berg',
    es: 'Montaña'
  },
  {
    sw: 'Bahari',
    en: 'Sea',
    fr: 'Mer',
    de: 'Meer',
    es: 'Mar'
  },
  {
    sw: 'Ndovu',
    en: 'Elephant',
    fr: 'Éléphant',
    de: 'Elefant',
    es: 'Elefante'
  },
  {
    sw: 'Kilimanjaro',
    en: 'Kilimanjaro',
    fr: 'Kilimandjaro',
    de: 'Kilimandscharo',
    es: 'Kilimanjaro'
  },
  {
    sw: 'Serengeti',
    en: 'Serengeti',
    fr: 'Sérengéti',
    de: 'Serengeti',
    es: 'Serengeti'
  },
  {
    sw: 'Karibu',
    en: 'Welcome',
    fr: 'Bienvenue',
    de: 'Willkommen',
    es: 'Bienvenido'
  }
];

const langs = ['en', 'fr', 'de', 'es'];
const langNames = ['English', 'Français', 'Deutsch', 'Español'];

const swahiliWordEl = document.querySelector('.swahili-word');
const translationsRowEl = document.querySelector('.translations-row');
let wordIndex = 0;

function showRowWord(idx) {
  if (!swahiliWordEl || !translationsRowEl) return;
  const word = words[idx];
  // Animate swahili word
  swahiliWordEl.textContent = '';
  translationsRowEl.innerHTML = '';
  setTimeout(() => {
    swahiliWordEl.textContent = word.sw;
    // Animate translations
    langs.forEach((lang, i) => {
      setTimeout(() => {
        const badge = document.createElement('span');
        badge.className = 'translation-badge';
        badge.textContent = `${langNames[i]}: ${word[lang]}`;
        translationsRowEl.appendChild(badge);
      }, 350 * i);
    });
  }, 100);
  setTimeout(() => {
    wordIndex = (wordIndex + 1) % words.length;
    showRowWord(wordIndex);
  }, 350 * langs.length + 1800);
}

showRowWord(wordIndex);
// FurahaYao Safaris - Carousel Animation

const items = document.querySelectorAll('.carousel-item');
let current = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.style.opacity = i === index ? '1' : '0';
    item.style.zIndex = i === index ? '2' : '1';
    if (item.tagName === 'VIDEO') {
      if (i === index) {
        item.currentTime = 0;
        item.play();
      } else {
        item.pause();
      }
    }
  });
}

function nextItem() {
  current = (current + 1) % items.length;
  showItem(current);
}

// Initial state
showItem(current);

// Change every 4 seconds
setInterval(nextItem, 4000);
