const gallery = document.getElementById('gallery');
const template = document.getElementById('animal-card-template');
const filterButtons = Array.from(document.querySelectorAll('.chip'));

let currentAudio = null;
let currentAnimal = null;

function buildAssetUrl(fileName) {
  return `./assets/${fileName}`;
}

function applyFallback(card, name) {
  card.classList.add('has-fallback');
  const image = card.querySelector('.animal-image');
  image.alt = `${name} placeholder image`;
}

function attachImageWithFallback(card, imageName, animalName) {
  const image = card.querySelector('.animal-image');
  const assetUrl = buildAssetUrl(imageName);

  image.src = assetUrl;
  image.alt = `${animalName} image`;
  image.onerror = () => {
    applyFallback(card, animalName);
  };
}

function makeMeta(animal) {
  if (!animal.sounds || animal.sounds.length === 0) {
    return 'Sound archive entry';
  }

  if (animal.sounds.length === 1) {
    return `1 sound available`;
  }

  return `${animal.sounds.length} sounds available`;
}

function renderAnimal(animal) {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector('.card');
  const nameEl = fragment.querySelector('.animal-name');
  const countEl = fragment.querySelector('.animal-count');
  const metaEl = fragment.querySelector('.animal-meta');
  const button = fragment.querySelector('.play-button');

  nameEl.textContent = animal.name;
  countEl.textContent = animal.sounds.length;
  metaEl.textContent = makeMeta(animal);
  attachImageWithFallback(card, animal.image, animal.name);

  button.addEventListener('click', () => {
    const file = animal.sounds[Math.floor(Math.random() * animal.sounds.length)];
    const url = buildAssetUrl(file);

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(url);
    currentAnimal = animal.name;

    currentAudio.play().catch(() => {
      const fallbackText = `${animal.name} sound file is not available in this archive yet.`;
      button.textContent = fallbackText;
      setTimeout(() => {
        button.textContent = 'Play sound';
      }, 1800);
    });
  });

  return fragment;
}

function filterAnimals(animals, filter) {
  if (filter === 'all') {
    return animals;
  }

  return animals.filter((animal) => animal.group === filter);
}

async function loadAnimals() {
  try {
    const response = await fetch('./animals.json');
    const animals = await response.json();

    function renderByFilter(filter) {
      gallery.innerHTML = '';
      const visibleAnimals = filterAnimals(animals, filter);

      visibleAnimals.forEach((animal) => {
        gallery.appendChild(renderAnimal(animal));
      });
    }

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((chip) => chip.classList.toggle('active', chip === button));
        renderByFilter(button.dataset.filter);
      });
    });

    renderByFilter('all');
  } catch (error) {
    gallery.innerHTML = '<p class="error">The animal archive could not be loaded. Please check the JSON file and assets folder.</p>';
    console.error(error);
  }
}

loadAnimals();
