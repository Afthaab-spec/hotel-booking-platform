(function enforceSingleOrigin() {
  if (window.location.protocol !== 'file:') return;

  const pathSegments = window.location.pathname.split('/hotel-booking/');
  const appPath = pathSegments.length > 1 ? `/${pathSegments[pathSegments.length - 1]}` : '/index.html';

  if (appPath && appPath !== '/index.html' && !appPath.startsWith('/index')) {
    window.location.replace(`http://localhost:8000${appPath}`);
    return;
  }

  window.location.replace('http://localhost:8000/index.html');
})();

const DEFAULT_HOTELS = [
  {
    id: 1,
    name: 'Taj Krishna',
    location: 'Hyderabad',
    type: 'Luxury city hotel',
    price: 14500,
    rooms: 5,
    vibes: ['Romantic', 'Heritage', 'Business'],
    amenities: ['WiFi', 'Pool', 'Gym', 'Breakfast'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Taj_Krishna_hotel_in_hyderabad.jpg/1280px-Taj_Krishna_hotel_in_hyderabad.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Hyderabad%2C_taj_krishna%2C_interno_02.jpg/1280px-Hyderabad%2C_taj_krishna%2C_interno_02.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Hyderabad%2C_taj_krishna%2C_interno_03.jpg/1280px-Hyderabad%2C_taj_krishna%2C_interno_03.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Hyderabad%2C_taj_krishna%2C_interno_04.jpg/1280px-Hyderabad%2C_taj_krishna%2C_interno_04.jpg'
    ]
  },
  {
    id: 2,
    name: 'ITC Grand Chola',
    location: 'Chennai',
    type: 'Luxury palace hotel',
    price: 18000,
    rooms: 4,
    vibes: ['Heritage', 'Business', 'Family'],
    amenities: ['WiFi', 'Pool', 'Gym', 'Spa'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/ITC-Grand-Chola-Chennai-2.JPG/1280px-ITC-Grand-Chola-Chennai-2.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/ITC-Grand-Chola-Chennai-4.JPG/1280px-ITC-Grand-Chola-Chennai-4.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/ITC-Grand-Chola-Chennai-7.JPG/1280px-ITC-Grand-Chola-Chennai-7.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/ITC-Grand-Chola-Chennai-12.JPG/1280px-ITC-Grand-Chola-Chennai-12.JPG'
    ]
  },
  {
    id: 3,
    name: 'Taj Fort Aguada Resort & Spa',
    location: 'Goa',
    type: 'Beach resort',
    price: 19000,
    rooms: 3,
    vibes: ['Romantic', 'Beach', 'Family'],
    amenities: ['WiFi', 'Pool', 'Spa', 'Beach access'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Taj_Fort_Aguada_Resort.jpg/1280px-Taj_Fort_Aguada_Resort.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Fort_Aguada_Beach_Resort_Hotel_Goa_1.JPG/1280px-Taj_Fort_Aguada_Beach_Resort_Hotel_Goa_1.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Taj_Fort_Aguada_Beach_Resort_Hotel_Goa_2.JPG/1280px-Taj_Fort_Aguada_Beach_Resort_Hotel_Goa_2.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Taj_Fort_Aguada_Beach_Resort_Hotel_Goa_3.JPG/1280px-Taj_Fort_Aguada_Beach_Resort_Hotel_Goa_3.JPG'
    ]
  },
  {
    id: 4,
    name: 'The Leela Palace Bengaluru',
    location: 'Bengaluru',
    type: 'Luxury palace hotel',
    price: 26000,
    rooms: 3,
    vibes: ['Romantic', 'Heritage', 'Business', 'Family'],
    amenities: ['WiFi', 'Pool', 'Gym', 'Spa'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hotel_Leela_Palace_%284353404470%29.jpg/1280px-Hotel_Leela_Palace_%284353404470%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Hotel_Leela_Palace_%284352657669%29.jpg/1280px-Hotel_Leela_Palace_%284352657669%29.jpg',
      'https://theleelaassets.com/static/webp/tl-503-360/2021-09/exterior-3-eb304f826b871412.webp'
    ]
  },
  {
    id: 5,
    name: 'Hyatt Hyderabad, Gachibowli',
    location: 'Hyderabad',
    type: 'Luxury city hotel',
    price: 12500,
    rooms: 4,
    vibes: ['Business', 'Family'],
    amenities: ['WiFi', 'Pool', 'Gym', 'Breakfast'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/2/2c/Hotel_Hyatt_Hyderabad%2C_at_Gachibowli_in_2023_01.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b7/Hotel_Hyatt_Hyderabad%2C_at_Gachibowli_in_2023_02.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/9/95/Hotel_Hyatt_Hyderabad%2C_at_Gachibowli_in_2023_04.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e9/Hotel_Hyatt_Hyderabad%2C_at_Gachibowli_in_2023_05.jpg'
    ]
  },
  {
    id: 6,
    name: 'Taj Coromandel',
    location: 'Chennai',
    type: 'Luxury city hotel',
    price: 16000,
    rooms: 4,
    vibes: ['Heritage', 'Business'],
    amenities: ['WiFi', 'Pool', 'Gym', 'Spa'],
    images: [
      'https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/eb07c710ac4635e1f43fa583e85727aaf357a9ec-3840x1860.jpg?w=1024&auto=format&dpr=2',
      'https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/19ba791ac57db27864dd126e2c8c7460265ee849-3840x1860.jpg?w=1024&auto=format&dpr=2',
      'https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/fba716f792b1aa3f28343d85349e1452f59b6d9d-3840x1860.jpg?w=1024&auto=format&dpr=2',
      'https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/625178965a6922d37307618d35f18d695dfe7732-3840x1860.jpg?w=1024&auto=format&dpr=2'
    ]
  },
  {
    id: 7,
    name: 'Taj Exotica Resort & Spa',
    location: 'Goa',
    type: 'Beach resort',
    price: 23000,
    rooms: 3,
    vibes: ['Romantic', 'Beach', 'Family'],
    amenities: ['WiFi', 'Pool', 'Spa', 'Beach access'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Fountain_at_Taj_Exotica_Goa%2C_2010.JPG/1280px-Fountain_at_Taj_Exotica_Goa%2C_2010.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Illuminated_fountain%2C_Taj_Exotica_Goa_2010.JPG/1280px-Illuminated_fountain%2C_Taj_Exotica_Goa_2010.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/6/6e/Taj_Spa_4.jpg'
    ]
  },
  {
    id: 8,
    name: 'The Oberoi, Bengaluru',
    location: 'Bengaluru',
    type: 'Luxury garden hotel',
    price: 22000,
    rooms: 4,
    vibes: ['Romantic', 'Heritage', 'Business', 'Family'],
    amenities: ['WiFi', 'Pool', 'Gym', 'Spa'],
    images: [
      'https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-bengaluru/gallery/01-exterior-and-interior/820x646/banner-1.jpg',
      'https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-bengaluru/gallery/01-exterior-and-interior/820x646/banner-2.jpg',
      'https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-bengaluru/gallery/01-exterior-and-interior/820x646/hotelfacadeentrance.jpg',
      'https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-bengaluru/gallery/01-exterior-and-interior/820x646/raintreenightshot.jpg'
    ]
  }
];

const LEGACY_DEMO_HOTEL_NAMES = new Set([
  'Grand Palace Hotel',
  'Royal Stay',
  'Comfort Inn',
  'Lakeview Suites',
  'City Lights Hotel',
  'The Taj Residency',
  'Blue Horizon Inn',
  'Oasis Retreat',
  'Hill Crest Hotel',
  'The Leela Palace',
  'ITC Grand Chola',
  'Taj Banjara',
  'Taj Coromandel',
  'Taj Exotica Resort & Spa',
  'The Oberoi, Bengaluru',
  'Hyatt Hyderabad, Gachibowli',
  'Marriott Hotel'
]);
const BUILT_IN_HOTEL_NAMES = new Set([
  ...LEGACY_DEMO_HOTEL_NAMES,
  ...DEFAULT_HOTELS.map((hotel) => hotel.name)
]);
const HOTEL_INVENTORY_VERSION = 6;

let comparedHotelIds = [];
const MAX_COMPARE_HOTELS = 3;
let showFavoritesOnly = false;
let selectedTripFilter = 'upcoming';
let activeBooking = null;
let bookingHoldTimer = null;
const ROOM_CATEGORIES = { Deluxe: 1, Suite: 1.7, 'Royal Suite': 2.6 };
const PRICE_TAX_RATE = 0.12;
const PRICE_LOCK_FEE = 299;
const PRICE_HOLD_SECONDS = 10 * 60;
const hotelPulse = new Map();

function hotelPhotos(hotel) {
  return Array.isArray(hotel.images) && hotel.images.length
    ? hotel.images
    : [hotel.image || 'images/hotel-skyline.svg'];
}

function renderHotelGallery(hotel) {
  const photos = hotelPhotos(hotel);

  return `
    <div class="hotel-gallery" data-photo-index="0">
      <img class="hotel-image" src="${photos[0]}" alt="${hotel.name} photo 1 of ${photos.length}" loading="lazy" decoding="async" />
      ${photos.length > 1 ? `
        <button class="gallery-arrow gallery-previous" type="button" aria-label="Previous ${hotel.name} photo" onclick="changeHotelPhoto(${hotel.id}, -1)">‹</button>
        <button class="gallery-arrow gallery-next" type="button" aria-label="Next ${hotel.name} photo" onclick="changeHotelPhoto(${hotel.id}, 1)">›</button>
        <span class="gallery-count" aria-live="polite">1 / ${photos.length}</span>
      ` : ''}
    </div>
  `;
}

function changeHotelPhoto(id, direction) {
  const hotel = hotels().find((item) => item.id === id);
  const card = document.querySelector(`.hotel[data-hotel-id="${id}"]`);
  const gallery = card?.querySelector('.hotel-gallery');
  if (!hotel || !gallery) return;

  const photos = hotelPhotos(hotel);
  const nextIndex = (Number(gallery.dataset.photoIndex || 0) + direction + photos.length) % photos.length;
  gallery.dataset.photoIndex = nextIndex;

  const image = gallery.querySelector('.hotel-image');
  image.src = photos[nextIndex];
  image.alt = `${hotel.name} photo ${nextIndex + 1} of ${photos.length}`;
  gallery.querySelector('.gallery-count').textContent = `${nextIndex + 1} / ${photos.length}`;
}

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    // ignore storage errors
  }

  return fallback;
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

const users = () => readStorage('stayeasy_users', []);
const hotels = () => readStorage('stayeasy_hotels', DEFAULT_HOTELS) || DEFAULT_HOTELS;
const bookings = () => readStorage('stayeasy_bookings', []);
const save = (key, value) => writeStorage(key, value);
const formatINR = (amount) => Number(amount).toLocaleString('en-IN');

function hotelVibes(hotel) {
  if (Array.isArray(hotel.vibes) && hotel.vibes.length) return hotel.vibes;

  const searchText = `${hotel.name} ${hotel.location} ${hotel.type || ''} ${(hotel.amenities || []).join(' ')}`.toLowerCase();
  const vibes = [];
  if (/beach|goa|coast|sea/.test(searchText)) vibes.push('Beach');
  if (/palace|heritage|taj|fort|chola/.test(searchText)) vibes.push('Heritage');
  if (/resort|spa|pool|garden/.test(searchText)) vibes.push('Romantic');
  if (/business|city|wifi|gym|hyderabad|chennai|bengaluru/.test(searchText)) vibes.push('Business');
  if (/pool|breakfast|family|resort/.test(searchText)) vibes.push('Family');
  return [...new Set(vibes)];
}

function liveHotelPrice(hotel) {
  return hotelPulse.get(hotel.id)?.price ?? hotel.price;
}

function liveRoomsRemaining(hotel) {
  const actualRooms = Math.max(0, Number(hotel.rooms) || 0);
  const simulatedRooms = hotelPulse.get(hotel.id)?.rooms;
  return simulatedRooms === undefined ? actualRooms : Math.min(actualRooms, simulatedRooms);
}

function updateHotelPricePulse() {
  const hotelList = hotels();
  hotelList.forEach((hotel) => {
    const state = hotelPulse.get(hotel.id) || {
      price: hotel.price,
      visitors: 3 + Math.floor(Math.random() * 12),
      rooms: hotel.rooms,
      trend: 0
    };
    const previousPrice = state.price;
    const nextPrice = Math.max(
      hotel.price * 0.85,
      Math.min(hotel.price * 1.25, previousPrice * (1 + (Math.random() - 0.5) * 0.03))
    );
    state.price = Math.round(nextPrice);
    state.trend = state.price === previousPrice ? 0 : state.price > previousPrice ? 1 : -1;
    state.visitors = Math.max(1, Math.min(25, state.visitors + Math.round((Math.random() - 0.5) * 4)));
    if (hotel.rooms > 0 && Math.random() < 0.3) {
      state.rooms = Math.max(1, Math.min(hotel.rooms, state.rooms - (Math.random() < 0.6 ? 1 : -1)));
    } else {
      state.rooms = Math.min(hotel.rooms, Math.max(1, state.rooms));
    }
    hotelPulse.set(hotel.id, state);
  });

  const liveLabel = document.getElementById('livePriceStatus');
  if (liveLabel) {
    liveLabel.textContent = `Demo prices updated ${new Date().toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    })}`;
  }
  searchHotels();
}

(function seedDefaultData() {
  const allUsers = users();

  if (!allUsers.some((user) => user.email === 'admin@stayeasy.com')) {
    allUsers.push({
      name: 'Administrator',
      email: 'admin@stayeasy.com',
      password: 'admin123',
      role: 'admin'
    });

    save('stayeasy_users', allUsers);
  }

  const savedHotels = readStorage('stayeasy_hotels', null);
  if (!Array.isArray(savedHotels)) {
    save('stayeasy_hotels', DEFAULT_HOTELS);
  } else if (readStorage('stayeasy_inventory_version', 0) < HOTEL_INVENTORY_VERSION) {
    const customHotels = savedHotels.filter((hotel) => !BUILT_IN_HOTEL_NAMES.has(hotel.name));
    const updatedHotels = DEFAULT_HOTELS.map((defaultHotel) => {
      const savedHotel = savedHotels.find((hotel) => hotel.name === defaultHotel.name);
      return {
        ...defaultHotel,
        rooms: savedHotel?.rooms ?? defaultHotel.rooms
      };
    });
    save('stayeasy_hotels', [...updatedHotels, ...customHotels]);
  }
  save('stayeasy_inventory_version', HOTEL_INVENTORY_VERSION);
})();

const me = () => readStorage('stayeasy_currentUser', null);
const favoriteStorageKey = (user) => `stayeasy_favorites_${user.email}`;
const savedHotelIds = () => {
  const currentUser = me();
  if (!currentUser) return [];
  const saved = readStorage(favoriteStorageKey(currentUser), []);
  return Array.isArray(saved) ? saved : [];
};

function logout() {
  try {
    localStorage.removeItem('stayeasy_currentUser');
  } catch (error) {
    // ignore
  }

  try {
    sessionStorage.removeItem('stayeasy_currentUser');
  } catch (error) {
    // ignore
  }

  location.href = 'login.html';
}

function guard(role) {
  const currentUser = me();

  if (!currentUser || currentUser.role !== role) {
    location.href = 'login.html';
    return null;
  }

  return currentUser;
}

function getLandingSearch() {
  try {
    return JSON.parse(sessionStorage.getItem('stayeasy_search') || 'null');
  } catch (error) {
    return null;
  }
}

function startLandingSearch(event, hotelId = null, selectedDestination = null) {
  if (event) event.preventDefault();

  const checkin = document.getElementById('landingCheckin').value;
  const checkout = document.getElementById('landingCheckout').value;
  if (checkin && checkout && checkout <= checkin) {
    document.getElementById('landingCheckout').setCustomValidity('Check-out must be after check-in.');
    document.getElementById('landingCheckout').reportValidity();
    return;
  }
  document.getElementById('landingCheckout').setCustomValidity('');

  const search = {
    destination: selectedDestination ?? document.getElementById('landingDestination').value,
    checkin,
    checkout,
    guests: Number(document.getElementById('landingGuests').value || 2),
    hotelId
  };

  try {
    sessionStorage.setItem('stayeasy_search', JSON.stringify(search));
  } catch (error) {
    // Continue to the booking flow if session storage is unavailable.
  }

  const currentUser = me();
  window.location.href = currentUser?.role === 'user' ? 'user.html' : 'login.html';
}

function startFeaturedBooking(hotelId) {
  const hotel = hotels().find((item) => item.id === hotelId);
  startLandingSearch(null, hotelId, hotel?.location || '');
}

function chooseTravelMood(button, destination, mood) {
  document.getElementById('landingDestination').value = destination;
  document.querySelectorAll('.mood-card').forEach((card) => {
    const selected = card === button;
    card.classList.toggle('selected', selected);
    card.setAttribute('aria-pressed', String(selected));
  });
  document.getElementById('moodStatus').textContent = `${mood} selected — your search is set to ${destination}.`;
  document.getElementById('landingCheckin').focus({ preventScroll: true });
}

const signupForm = document.getElementById('signupForm');

if (signupForm) {
  signupForm.onsubmit = (event) => {
    event.preventDefault();

    const allUsers = users();
    const email = signupEmail.value.trim().toLowerCase();
    signupMessage.classList.remove('is-success');

    if (signupPassword.value !== signupConfirm.value) {
      signupMessage.classList.add('is-error');
      return (signupMessage.textContent = 'Passwords do not match.');
    }

    if (allUsers.some((user) => user.email === email)) {
      signupMessage.classList.add('is-error');
      return (signupMessage.textContent = 'Email already registered.');
    }

    allUsers.push({
      name: signupName.value.trim(),
      email,
      password: signupPassword.value,
      role: 'user'
    });

    save('stayeasy_users', allUsers);
    signupMessage.classList.remove('is-error');
    signupMessage.classList.add('is-success');
    signupMessage.style.color = '#15803d';
    signupMessage.textContent = 'Signup successful! Redirecting...';

    setTimeout(() => {
      location.href = 'login.html';
    }, 700);
  };
}

const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.onsubmit = (event) => {
    event.preventDefault();

    const user = users().find(
      (item) =>
        item.email === loginEmail.value.trim().toLowerCase() &&
        item.password === loginPassword.value
    );

    if (!user) {
      loginMessage.classList.add('is-error');
      return (loginMessage.textContent = 'Invalid email or password.');
    }

    loginMessage.classList.remove('is-error');
    loginMessage.classList.add('is-success');
    save('stayeasy_currentUser', user);
    location.href = user.role === 'admin' ? 'admin.html' : 'user.html';
  };
}

function renderHotels(list) {
  const hotelBox = document.getElementById('hotels');

  if (!hotelBox) return;

  const favorites = savedHotelIds();
  resultCount.textContent = `${list.length} ${list.length === 1 ? 'hotel' : 'hotels'} found`;
  const favoritesFilter = document.getElementById('favoritesFilter');
  if (favoritesFilter) {
    favoritesFilter.textContent = `♡ Saved stays (${favorites.length})`;
    favoritesFilter.setAttribute('aria-pressed', String(showFavoritesOnly));
    favoritesFilter.classList.toggle('selected', showFavoritesOnly);
  }

  hotelBox.innerHTML = list.length
    ? list
        .map(
          (hotel) => `
            <article class="hotel" data-hotel-id="${hotel.id}">
              ${renderHotelGallery(hotel)}

              <div class="hotel-body">
                <div class="hotel-top">
                  <div>
                    <h3>${hotel.name}</h3>
                    <p class="location">📍 ${hotel.location}</p>
                  </div>
                  <span class="hotel-type">${hotel.type || 'Hotel'}</span>
                  <button
                    class="favorite-toggle ${favorites.includes(hotel.id) ? 'selected' : ''}"
                    type="button"
                    aria-label="${favorites.includes(hotel.id) ? 'Remove' : 'Save'} ${hotel.name} ${favorites.includes(hotel.id) ? 'from' : 'to'} saved stays"
                    aria-pressed="${favorites.includes(hotel.id)}"
                    onclick="toggleHotelFavorite(${hotel.id})"
                  >${favorites.includes(hotel.id) ? '♥ Saved' : '♡ Save'}</button>
                </div>

                <div class="amenities">
                  ${hotel.amenities
                    .map((amenity) => `<span class="chip">${amenity}</span>`)
                    .join('')}
                </div>

                <div class="hotel-vibes">
                  ${hotelVibes(hotel).map((vibe) => `<span class="vibe-chip">${vibe}</span>`).join('')}
                </div>

                <div class="hotel-pulse" aria-live="polite">
                  <span><i class="pulse-dot" aria-hidden="true"></i>${hotelPulse.get(hotel.id)?.visitors || 3} viewing</span>
                  <span class="pulse-trend ${hotelPulse.get(hotel.id)?.trend > 0 ? 'up' : hotelPulse.get(hotel.id)?.trend < 0 ? 'down' : ''}">
                    ${hotelPulse.get(hotel.id)?.trend > 0 ? '↑' : hotelPulse.get(hotel.id)?.trend < 0 ? '↓' : '•'} Price pulse
                  </span>
                </div>

                <div class="hotel-bottom">
                  <div class="price">
                    <strong>₹${formatINR(liveHotelPrice(hotel))}</strong>
                    <span>/ night</span>
                    <div class="rooms">🛏 ${liveRoomsRemaining(hotel)} rooms left · demo estimate</div>
                  </div>

                  <div class="hotel-actions">
                    <button
                      class="compare-toggle ${comparedHotelIds.includes(hotel.id) ? 'selected' : ''}"
                      data-hotel-id="${hotel.id}"
                      type="button"
                      aria-pressed="${comparedHotelIds.includes(hotel.id)}"
                      onclick="toggleHotelComparison(${hotel.id})"
                    >${comparedHotelIds.includes(hotel.id) ? 'Added' : 'Compare'}</button>
                    <button
                      class="book-btn"
                      onclick="openBooking(${hotel.id})"
                      ${hotel.rooms < 1 ? 'disabled' : ''}
                    >
                      ${hotel.rooms ? 'Book Now' : 'Sold Out'}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          `
        )
        .join('')
    : `<div class="card">${showFavoritesOnly ? 'No saved stays yet. Tap ♡ Save on a hotel to keep it here.' : 'No hotels match those filters. Try another destination or amenity.'}</div>`;
}

function renderFeaturedHotels() {
  const featuredHotels = document.getElementById('featuredHotels');
  if (!featuredHotels) return;

  featuredHotels.innerHTML = DEFAULT_HOTELS
    .map(
      (hotel) => `
        <article class="hotel" data-hotel-id="${hotel.id}">
          ${renderHotelGallery(hotel)}
          <div class="hotel-body">
            <p class="location">📍 ${hotel.location}</p>
            <h3>${hotel.name}</h3>
            <div class="hotel-bottom">
              <span class="hotel-type">${hotel.type}</span>
              <a class="hotel-visit" href="login.html">Explore <span>→</span></a>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function toggleHotelComparison(id) {
  const hotel = hotels().find((item) => item.id === id);
  if (!hotel) return;

  if (comparedHotelIds.includes(id)) {
    comparedHotelIds = comparedHotelIds.filter((hotelId) => hotelId !== id);
  } else if (
    comparedHotelIds.length &&
    hotels().find((item) => item.id === comparedHotelIds[0])?.location !== hotel.location
  ) {
    const selectedCity = hotels().find((item) => item.id === comparedHotelIds[0])?.location;
    if (!selectedCity) {
      comparedHotelIds = [];
      renderCompareTray();
      return;
    }

    showSuccessPopup(`Choose another hotel in ${selectedCity} to compare.`);
    return;
  } else if (comparedHotelIds.length >= MAX_COMPARE_HOTELS) {
    showSuccessPopup(`Compare up to ${MAX_COMPARE_HOTELS} hotels at a time.`);
    return;
  } else {
    comparedHotelIds.push(id);
  }

  updateHotelCompareButtons();
  renderCompareTray();
}

function updateHotelCompareButtons() {
  document.querySelectorAll('.compare-toggle').forEach((button) => {
    const selected = comparedHotelIds.includes(Number(button.dataset.hotelId));
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
    button.textContent = selected ? 'Added' : 'Compare';
  });
}

function renderCompareTray() {
  const tray = document.getElementById('compareTray');
  if (!tray) return;

  const availableHotels = hotels();
  comparedHotelIds = comparedHotelIds.filter((id) => availableHotels.some((hotel) => hotel.id === id));
  tray.hidden = comparedHotelIds.length === 0;
  const selectedCity = availableHotels.find((hotel) => hotel.id === comparedHotelIds[0])?.location;
  document.getElementById('compareCount').textContent = selectedCity
    ? `${selectedCity} • ${comparedHotelIds.length} selected`
    : '0 selected';
  document.getElementById('compareOpen').disabled = comparedHotelIds.length < 2;
}

function clearHotelComparison() {
  comparedHotelIds = [];
  updateHotelCompareButtons();
  renderCompareTray();
}

function openHotelComparison() {
  const selectedHotels = comparedHotelIds
    .map((id) => hotels().find((hotel) => hotel.id === id))
    .filter(Boolean);

  if (selectedHotels.length < 2 || new Set(selectedHotels.map((hotel) => hotel.location)).size !== 1) {
    showSuccessPopup('Choose at least two different hotels in the same city.');
    return;
  }

  modalContent.innerHTML = `
    <p class="eyebrow blue">SIDE-BY-SIDE</p>
    <h2>Compare your stays</h2>
    <div class="comparison-grid">
      ${selectedHotels.map((hotel) => `
        <article class="comparison-hotel">
          <img src="${hotelPhotos(hotel)[0]}" alt="${hotel.name}" />
          <h3>${hotel.name}</h3>
          <p class="location">📍 ${hotel.location}</p>
          <dl>
            <div><dt>Style</dt><dd>${hotel.type || 'Hotel'}</dd></div>
            <div><dt>Sample rate / night</dt><dd>₹${formatINR(hotel.price)}</dd></div>
            <div><dt>Rooms listed</dt><dd>${hotel.rooms}</dd></div>
            <div><dt>Amenities</dt><dd>${hotel.amenities.join(', ')}</dd></div>
          </dl>
          <button class="book-btn" onclick="closeModal(); openBooking(${hotel.id})" ${hotel.rooms < 1 ? 'disabled' : ''}>
            ${hotel.rooms ? 'Choose this stay' : 'Sold Out'}
          </button>
        </article>
      `).join('')}
    </div>
  `;
  modal.classList.add('comparison-open');
  modal.classList.remove('hidden');
}

function searchHotels() {
  let filteredHotels = hotels();
  const query = document.getElementById('location').value.trim().toLowerCase();
  const selectedAmenity = amenity.value;
  const sortBy = sort.value;
  const selectedVibe = document.getElementById('vibe').value;
  const favorites = savedHotelIds();

  filteredHotels = filteredHotels.filter(
    (hotel) => {
      const searchableText = `${hotel.name} ${hotel.location}`.toLowerCase();
      const queryMatches = !query || query.split(/\s+/).every((term) => searchableText.includes(term));
      return queryMatches &&
      (!selectedAmenity || hotel.amenities.includes(selectedAmenity)) &&
      (!selectedVibe || hotelVibes(hotel).includes(selectedVibe)) &&
      (!showFavoritesOnly || favorites.includes(hotel.id));
    }
  );

  if (sortBy === 'low') {
    filteredHotels.sort((a, b) => liveHotelPrice(a) - liveHotelPrice(b));
  }

  if (sortBy === 'high') {
    filteredHotels.sort((a, b) => liveHotelPrice(b) - liveHotelPrice(a));
  }

  renderHotels(filteredHotels);
}

function toggleHotelFavorite(id) {
  const currentUser = me();
  if (!currentUser) {
    location.href = 'login.html';
    return;
  }

  const favoriteIds = savedHotelIds();
  const nextFavorites = favoriteIds.includes(id)
    ? favoriteIds.filter((favoriteId) => favoriteId !== id)
    : [...favoriteIds, id];
  save(favoriteStorageKey(currentUser), nextFavorites);
  searchHotels();
}

function toggleFavoritesFilter() {
  showFavoritesOnly = !showFavoritesOnly;
  searchHotels();
}

function clearSearch() {
  document.getElementById('location').value = '';
  amenity.value = '';
  sort.value = 'recommended';
  document.getElementById('vibe').value = '';
  document.getElementById('searchCheckin').value = '';
  document.getElementById('searchCheckout').value = '';
  document.getElementById('searchGuests').value = '2';
  showFavoritesOnly = false;
  searchHotels();
}

function dateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

const landingSearchForm = document.getElementById('landingSearchForm');

if (landingSearchForm) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  landingCheckin.min = dateInputValue(today);
  landingCheckout.min = dateInputValue(tomorrow);

  const savedSearch = getLandingSearch();
  if (savedSearch) {
    landingDestination.value = savedSearch.destination || '';
    landingCheckin.value = savedSearch.checkin || '';
    landingCheckout.value = savedSearch.checkout || '';
    landingGuests.value = String(savedSearch.guests || 2);
    if (landingCheckin.value) updateCheckoutMinimum('landingCheckin', 'landingCheckout');
  }
  if (!landingCheckin.value) landingCheckin.value = dateInputValue(today);
  if (!landingCheckout.value || landingCheckout.value <= landingCheckin.value) {
    const defaultCheckout = new Date(`${landingCheckin.value}T00:00:00`);
    defaultCheckout.setDate(defaultCheckout.getDate() + 1);
    landingCheckout.value = dateInputValue(defaultCheckout);
  }
  landingCheckin.addEventListener('change', () => updateCheckoutMinimum('landingCheckin', 'landingCheckout'));
}

function stayNights(checkin, checkout) {
  if (!checkin || !checkout || checkout <= checkin) return 0;
  return Math.round((new Date(`${checkout}T00:00:00`) - new Date(`${checkin}T00:00:00`)) / 86400000);
}

function openBooking(id) {
  const hotel = hotels().find((item) => item.id === id);
  if (!hotel) return;
  const search = getLandingSearch();
  const currentUser = me();
  const today = dateInputValue(new Date());
  const checkin = document.getElementById('searchCheckin')?.value || search?.checkin || today;
  const defaultCheckoutDate = new Date(`${checkin}T00:00:00`);
  defaultCheckoutDate.setDate(defaultCheckoutDate.getDate() + 1);
  const checkout = document.getElementById('searchCheckout')?.value ||
    (search?.checkout > checkin ? search.checkout : dateInputValue(defaultCheckoutDate));

  activeBooking = {
    hotelId: id,
    rate: liveHotelPrice(hotel),
    roomCategory: 'Deluxe',
    guestCount: Number(document.getElementById('searchGuests')?.value || search?.guests || 2),
    guestName: currentUser?.name || '',
    guestEmail: currentUser?.email || '',
    checkin,
    checkout,
    priceLock: false,
    splitCount: 1,
    holdExpiresAt: Date.now() + PRICE_HOLD_SECONDS * 1000
  };

  modalContent.innerHTML = `
    <div class="booking-visual">
      <img src="${hotelPhotos(hotel)[0]}" alt="${hotel.name}" loading="lazy" decoding="async" />
      <div>
        <p class="eyebrow blue">PLAN YOUR STAY · DEMO RATE</p>
        <h2>${hotel.name}</h2>
        <p class="location">📍 ${hotel.location}</p>
      </div>
    </div>

    <form class="booking-form" data-hotel-id="${id}" onsubmit="confirmBooking(event, ${id})">
      <div class="booking-dates">
        <label>
          <span>Check-in</span>
          <input id="bookDate" type="date" min="${today}" value="${checkin}" onchange="updateCheckoutMinimum(); updateStayEstimate()" required />
        </label>
        <label>
          <span>Check-out</span>
          <input id="checkoutDate" type="date" min="${today}" value="${checkout}" onchange="updateStayEstimate()" required />
        </label>
      </div>

      <div class="booking-dates">
        <label>
          <span>Guest name</span>
          <input id="bookingGuestName" type="text" autocomplete="name" value="${escapeHTML(activeBooking.guestName)}" maxlength="80" required />
        </label>
        <label>
          <span>Contact email</span>
          <input id="bookingGuestEmail" type="email" autocomplete="email" value="${escapeHTML(activeBooking.guestEmail)}" maxlength="120" required />
        </label>
      </div>

      <div class="booking-dates">
        <label>
          <span>Guests</span>
          <select id="bookingGuestCount">${[1, 2, 3, 4, 5, 6].map((count) => `<option ${count === activeBooking.guestCount ? 'selected' : ''}>${count}</option>`).join('')}</select>
        </label>
        <label>
          <span>Room category</span>
          <select id="bookingRoomCategory">${Object.keys(ROOM_CATEGORIES).map((category) => `<option ${category === activeBooking.roomCategory ? 'selected' : ''}>${category}</option>`).join('')}</select>
        </label>
      </div>

      <div class="stay-rate-row">
        <span>Held demo rate · ${PRICE_HOLD_SECONDS / 60}:00</span>
        <strong>₹${formatINR(activeBooking.rate)} <small>/ night</small></strong>
      </div>
      <div id="bookingHold" class="booking-hold" aria-live="polite"></div>
      <label class="booking-option">
        <input id="priceLock" type="checkbox" />
        <span><b>24-hour price lock · ₹${formatINR(PRICE_LOCK_FEE)}</b><small>Demo add-on. Holds this rate for 24 hours.</small></span>
      </label>
      <label class="booking-option">
        <span><b>Split this booking</b><small>Equal demo shares for 2–6 people.</small></span>
        <select id="splitCount">${[1, 2, 3, 4, 5, 6].map((count) => `<option ${count === 1 ? 'selected' : ''}>${count}</option>`).join('')}</select>
      </label>
      <div id="stayEstimate" class="stay-estimate" aria-live="polite">
        <div class="stay-estimate-copy">
          <span>Estimated total · tax included</span>
          <small class="stay-estimate-detail"></small>
        </div>
        <strong class="stay-estimate-total"></strong>
      </div>
      <p class="demo-payment-note">Demo booking only. No real payment is processed.</p>
      <button class="confirm-btn" type="submit">Continue to demo payment <span aria-hidden="true">→</span></button>
    </form>
  `;

  modal.classList.remove('comparison-open');
  modal.classList.add('booking-modal-open');
  document.getElementById('priceLock').addEventListener('change', updateStayEstimate);
  document.getElementById('splitCount').addEventListener('change', updateStayEstimate);
  document.getElementById('bookingRoomCategory').addEventListener('change', updateStayEstimate);
  document.getElementById('bookingGuestCount').addEventListener('change', updateStayEstimate);
  document.getElementById('bookingGuestName').addEventListener('input', updateStayEstimate);
  document.getElementById('bookingGuestEmail').addEventListener('input', updateStayEstimate);
  activeBooking.detailsMarkup = modalContent.innerHTML;
  updateCheckoutMinimum();
  updateStayEstimate();
  updateBookingHold();
  clearInterval(bookingHoldTimer);
  bookingHoldTimer = setInterval(updateBookingHold, 1000);
  modal.classList.remove('hidden');
}

function getBookingCalculation() {
  const booking = activeBooking;
  const nights = stayNights(booking.checkin, booking.checkout);
  const nightlyRate = Math.round(booking.rate * ROOM_CATEGORIES[booking.roomCategory]);
  const subtotal = nightlyRate * nights;
  const tax = Math.round(subtotal * PRICE_TAX_RATE);
  const lockFee = booking.priceLock ? PRICE_LOCK_FEE : 0;
  return { nights, nightlyRate, subtotal, tax, lockFee, total: subtotal + tax + lockFee };
}

function syncBookingForm() {
  if (!activeBooking) return;
  activeBooking.checkin = document.getElementById('bookDate').value;
  activeBooking.checkout = document.getElementById('checkoutDate').value;
  activeBooking.guestName = document.getElementById('bookingGuestName').value.trim();
  activeBooking.guestEmail = document.getElementById('bookingGuestEmail').value.trim().toLowerCase();
  activeBooking.guestCount = Number(document.getElementById('bookingGuestCount').value);
  activeBooking.roomCategory = document.getElementById('bookingRoomCategory').value;
  activeBooking.priceLock = document.getElementById('priceLock').checked;
  activeBooking.splitCount = Number(document.getElementById('splitCount').value);
}

function updateStayEstimate() {
  const estimate = document.getElementById('stayEstimate');
  if (!activeBooking || !estimate) return;
  syncBookingForm();

  const { nights, nightlyRate, subtotal, tax, lockFee, total } = getBookingCalculation();
  estimate.querySelector('.stay-estimate-total').textContent = `₹${formatINR(total)}`;
  estimate.querySelector('.stay-estimate-detail').textContent = nights
    ? `${activeBooking.roomCategory} · ${activeBooking.guestCount} guest${activeBooking.guestCount === 1 ? '' : 's'} · ${nights} night${nights === 1 ? '' : 's'} at ₹${formatINR(nightlyRate)}/night · ₹${formatINR(subtotal)} + ₹${formatINR(tax)} tax${lockFee ? ` + ₹${formatINR(lockFee)} price lock` : ''}${activeBooking.splitCount > 1 ? ` · ₹${formatINR(splitShare(total, activeBooking.splitCount, 0))} per share` : ''}`
    : 'Choose valid dates to see your total';
}

function updateBookingHold() {
  if (!activeBooking) return;
  const remaining = Math.max(0, Math.ceil((activeBooking.holdExpiresAt - Date.now()) / 1000));
  const hold = document.getElementById('bookingHold');
  if (hold) hold.textContent = `Rate held for ${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, '0')}`;
  if (remaining === 0) {
    clearInterval(bookingHoldTimer);
    bookingHoldTimer = null;
    activeBooking = null;
    closeModal();
    showSuccessPopup('Your 10-minute demo price hold expired. Reopen this stay to see the latest rate.');
  }
}

function updateCheckoutMinimum(checkinId = 'bookDate', checkoutId = 'checkoutDate') {
  const checkinInput = document.getElementById(checkinId);
  const bookingDate = checkinInput?.value;
  const checkoutInput = document.getElementById(checkoutId);

  if (!bookingDate || !checkoutInput) return;

  const minimumCheckout = new Date(`${bookingDate}T00:00:00`);
  minimumCheckout.setDate(minimumCheckout.getDate() + 1);
  checkoutInput.min = dateInputValue(minimumCheckout);

  if (checkoutInput.value && checkoutInput.value < checkoutInput.min) {
    checkoutInput.value = '';
  }
}

function closeModal() {
  clearInterval(bookingHoldTimer);
  bookingHoldTimer = null;
  activeBooking = null;
  modal.classList.add('hidden');
  modal.classList.remove('comparison-open');
  modal.classList.remove('booking-modal-open');
}

function showSuccessPopup(message) {
  let popup = document.getElementById('successPopup');

  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'successPopup';
    popup.className = 'success-popup';
    popup.innerHTML = '<div class="success-card"><span>✓</span><p></p></div>';
    document.body.appendChild(popup);
  }

  popup.querySelector('p').textContent = message;
  popup.classList.add('show');

  setTimeout(() => popup.classList.remove('show'), 2200);
}

function confirmBooking(event, hotelId) {
  event.preventDefault();
  if (!activeBooking || activeBooking.hotelId !== hotelId) return;
  syncBookingForm();
  const { nights } = getBookingCalculation();

  if (activeBooking.holdExpiresAt <= Date.now()) {
    return updateBookingHold();
  }
  if (!activeBooking.checkin || activeBooking.checkin < dateInputValue(new Date())) {
    return showSuccessPopup('Choose a check-in date from today onward.');
  }

  if (!nights) {
    return showSuccessPopup('Check-out must be after check-in.');
  }

  if (!activeBooking.guestName || !/^\S+@\S+\.\S+$/.test(activeBooking.guestEmail)) {
    return showSuccessPopup('Enter the guest name and a valid contact email.');
  }

  const hotel = hotels().find((item) => item.id === hotelId);
  if (!hotel || hotel.rooms < 1) {
    return showSuccessPopup('No rooms available right now.');
  }

  activeBooking.detailsMarkup = modalContent.innerHTML;
  renderDemoPayment();
}

function renderBookingDetails() {
  if (!activeBooking || activeBooking.holdExpiresAt <= Date.now()) return updateBookingHold();
  modalContent.innerHTML = activeBooking.detailsMarkup;
  document.getElementById('bookDate').value = activeBooking.checkin;
  document.getElementById('checkoutDate').value = activeBooking.checkout;
  document.getElementById('bookingGuestName').value = activeBooking.guestName;
  document.getElementById('bookingGuestEmail').value = activeBooking.guestEmail;
  document.getElementById('bookingGuestCount').value = String(activeBooking.guestCount);
  document.getElementById('bookingRoomCategory').value = activeBooking.roomCategory;
  document.getElementById('priceLock').checked = activeBooking.priceLock;
  document.getElementById('splitCount').value = String(activeBooking.splitCount);
  document.getElementById('priceLock').addEventListener('change', updateStayEstimate);
  document.getElementById('splitCount').addEventListener('change', updateStayEstimate);
  document.getElementById('bookingRoomCategory').addEventListener('change', updateStayEstimate);
  document.getElementById('bookingGuestCount').addEventListener('change', updateStayEstimate);
  document.getElementById('bookingGuestName').addEventListener('input', updateStayEstimate);
  document.getElementById('bookingGuestEmail').addEventListener('input', updateStayEstimate);
  updateStayEstimate();
  updateBookingHold();
}

function splitShare(total, count, shareIndex) {
  const base = Math.floor(total / count);
  return base + (shareIndex < total % count ? 1 : 0);
}

function renderDemoPayment() {
  const calculation = getBookingCalculation();
  const share = splitShare(calculation.total, activeBooking.splitCount, 0);
  modalContent.innerHTML = `
    <p class="eyebrow blue">DEMO PAYMENT</p>
    <h2>Choose how to simulate payment</h2>
    <p class="payment-summary">${activeBooking.splitCount > 1 ? `Your first share: ₹${formatINR(share)} of ₹${formatINR(calculation.total)}` : `Total: ₹${formatINR(calculation.total)}`}</p>
    <div class="booking-hold" id="bookingHold" aria-live="polite"></div>
    <label class="filter-field payment-method-field">
      <span>Payment method</span>
      <select id="paymentMethod">
        <option value="Card">Card</option>
        <option value="UPI">UPI</option>
        <option value="Net Banking">Net Banking</option>
      </select>
    </label>
    <div id="paymentFields"></div>
    <p class="demo-payment-note">Simulation only—no money is charged, and payment details are not stored or sent.</p>
    <button class="confirm-btn" type="button" onclick="completeDemoPayment()">Simulate payment <span aria-hidden="true">→</span></button>
    <button class="secondary-btn payment-back" type="button" onclick="renderBookingDetails()">Back to booking</button>
  `;
  modal.classList.add('booking-modal-open');
  document.getElementById('paymentMethod').addEventListener('change', renderPaymentFields);
  renderPaymentFields();
  updateBookingHold();
}

function renderPaymentFields() {
  const method = document.getElementById('paymentMethod').value;
  const fields = document.getElementById('paymentFields');
  if (method === 'Card') {
    fields.innerHTML = `
      <div class="booking-dates payment-fields">
        <label><span>Test card number</span><input id="cardNumber" inputmode="numeric" autocomplete="off" placeholder="4242 4242 4242 4242" maxlength="19" /></label>
        <label><span>Expiry (MM/YY)</span><input id="cardExpiry" inputmode="numeric" autocomplete="off" placeholder="12/29" maxlength="5" /></label>
        <label><span>CVV</span><input id="cardCvv" type="password" inputmode="numeric" autocomplete="off" placeholder="123" maxlength="4" /></label>
        <label class="card-name-field"><span>Name on card</span><input id="cardName" autocomplete="off" maxlength="80" /></label>
      </div>
    `;
    document.getElementById('cardNumber').addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    });
    document.getElementById('cardExpiry').addEventListener('input', (event) => {
      const digits = event.target.value.replace(/\D/g, '').slice(0, 4);
      event.target.value = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
    });
  } else if (method === 'UPI') {
    fields.innerHTML = '<label class="filter-field payment-method-field"><span>Demo UPI ID</span><input id="upiId" autocomplete="off" placeholder="name@okbank" /></label>';
  } else {
    fields.innerHTML = `
      <label class="filter-field payment-method-field">
        <span>Bank</span>
        <select id="netBank">
          <option>State Bank of India</option><option>HDFC Bank</option><option>ICICI Bank</option><option>Axis Bank</option>
        </select>
      </label>
    `;
  }
}

function isValidDemoCard(number) {
  let sum = 0;
  let doubleDigit = false;
  for (let index = number.length - 1; index >= 0; index -= 1) {
    let digit = Number(number[index]);
    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    doubleDigit = !doubleDigit;
  }
  return number.length >= 13 && sum % 10 === 0;
}

function validateDemoPayment() {
  const method = document.getElementById('paymentMethod').value;
  if (method === 'Card') {
    const number = document.getElementById('cardNumber').value.replace(/\D/g, '');
    const expiryValue = document.getElementById('cardExpiry').value;
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryValue)) return 'Enter a valid future expiry date in MM/YY format.';
    const expiry = expiryValue.split('/');
    const month = Number(expiry[0]);
    const year = 2000 + Number(expiry[1]);
    const cvv = document.getElementById('cardCvv').value;
    if (!isValidDemoCard(number)) return 'Enter a valid test card number (4242 4242 4242 4242 is accepted).';
    const now = new Date();
    if (year < now.getFullYear() || (year === now.getFullYear() && month < now.getMonth() + 1)) {
      return 'Enter a valid future expiry date in MM/YY format.';
    }
    if (!/^\d{3,4}$/.test(cvv)) return 'Enter a 3- or 4-digit test CVV.';
    if (!document.getElementById('cardName').value.trim()) return 'Enter the name on the test card.';
  }
  if (method === 'UPI' && !/^[\w.-]{2,}@[a-z\d.-]{2,}$/i.test(document.getElementById('upiId').value.trim())) {
    return 'Enter a demo UPI ID such as name@okbank.';
  }
  return '';
}

function completeDemoPayment() {
  if (!activeBooking || activeBooking.holdExpiresAt <= Date.now()) {
    return updateBookingHold();
  }
  const validationMessage = validateDemoPayment();
  if (validationMessage) return showSuccessPopup(validationMessage);

  const currentUser = me();
  const allHotels = hotels();
  const hotel = allHotels.find((item) => item.id === activeBooking.hotelId);
  if (!hotel || hotel.rooms < 1) return showSuccessPopup('No rooms available right now.');

  const calculation = getBookingCalculation();
  const allBookings = bookings();
  const paidAmount = splitShare(calculation.total, activeBooking.splitCount, 0);
  const bookingId = `SE${Date.now().toString(36).toUpperCase()}`;
  const bookingRecord = {
    id: bookingId,
    hotelId: hotel.id,
    hotelName: hotel.name,
    location: hotel.location,
    guest: activeBooking.guestName,
    guestEmail: activeBooking.guestEmail,
    email: currentUser.email,
    guestCount: activeBooking.guestCount,
    roomCategory: activeBooking.roomCategory,
    date: activeBooking.checkin,
    checkoutDate: activeBooking.checkout,
    price: activeBooking.rate,
    nights: calculation.nights,
    subtotal: calculation.subtotal,
    taxAmount: calculation.tax,
    lockFee: calculation.lockFee,
    totalAmount: calculation.total,
    priceLockExpiresAt: activeBooking.priceLock ? new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() : null,
    splitCount: activeBooking.splitCount,
    paidShares: 1,
    paidAmount,
    paymentMethod: document.getElementById('paymentMethod').value,
    paymentStatus: activeBooking.splitCount > 1 ? `1 of ${activeBooking.splitCount} demo shares recorded` : 'Demo payment simulated',
    status: activeBooking.splitCount > 1 ? 'Partially paid' : 'Confirmed',
    roomsReserved: 1,
    bookedAt: new Date().toISOString()
  };

  const originalHotels = hotels();
  hotel.rooms -= 1;
  if (!save('stayeasy_hotels', allHotels)) {
    return showSuccessPopup('Could not save room availability. Please try again.');
  }
  if (!save('stayeasy_bookings', [...allBookings, bookingRecord])) {
    save('stayeasy_hotels', originalHotels);
    return showSuccessPopup('Could not save the booking. No demo payment was recorded.');
  }
  save('stayeasy_lastBooking', bookingRecord);

  try {
    sessionStorage.removeItem('stayeasy_search');
  } catch (error) {
    // The booking is saved even if the temporary search cannot be cleared.
  }

  renderBookingConfirmation(bookingRecord);
  searchHotels();
  renderMyBookings();
}

function renderBookingConfirmation(booking) {
  clearInterval(bookingHoldTimer);
  bookingHoldTimer = null;
  activeBooking = null;
  const paymentText = booking.splitCount > 1
    ? `${booking.paidShares} of ${booking.splitCount} demo shares recorded. Remaining friends' shares can be marked in My Trips.`
    : 'Demo payment simulated. No real payment was processed.';
  modalContent.innerHTML = `
    <div class="booking-confirmation">
      <div class="confirmation-mark" aria-hidden="true">✓</div>
      <p class="eyebrow blue">STAYEASY DEMO TICKET</p>
      <h2>${booking.status === 'Confirmed' ? 'Booking confirmed' : 'Booking reserved'}</h2>
      <p class="demo-payment-note">${paymentText}</p>
      <div class="ticket-card">
        <b>${escapeHTML(booking.hotelName)}</b>
        <span>${escapeHTML(booking.location)} · ${escapeHTML(booking.roomCategory)}</span>
        <span>${booking.date} to ${booking.checkoutDate} · ${booking.guestCount} guest${booking.guestCount === 1 ? '' : 's'}</span>
        <span>Booking ID: <b>${booking.id}</b></span>
        <strong>₹${formatINR(booking.totalAmount)} total · ₹${formatINR(booking.paidAmount)} demo share recorded</strong>
        ${booking.priceLockExpiresAt ? `<span>₹${formatINR(PRICE_LOCK_FEE)} demo price lock active until ${new Date(booking.priceLockExpiresAt).toLocaleString('en-IN')}</span>` : ''}
      </div>
      <button class="confirm-btn" type="button" onclick="downloadBookingTicket('${booking.id}')">Download ticket</button>
      <button class="secondary-btn payment-back" type="button" onclick="closeModal()">Done</button>
    </div>
  `;
}

function downloadBookingTicket(bookingId) {
  const booking = bookings().find((item) => item.id === bookingId);
  if (!booking) return showSuccessPopup('Ticket could not be found.');
  const ticket = [
    'STAYEASY — DEMO BOOKING TICKET',
    `Booking ID: ${booking.id}`,
    `Hotel: ${booking.hotelName}`,
    `Location: ${booking.location}`,
    `Guest: ${booking.guest} (${booking.guestEmail || booking.email})`,
    `Stay: ${booking.date} to ${booking.checkoutDate}`,
    `Room: ${booking.roomCategory || 'Deluxe'} · ${booking.guestCount || 1} guest(s)`,
    `Total: ₹${formatINR(booking.totalAmount || booking.price)}`,
    `Demo payment: ${booking.paymentStatus || 'Not processed'}`,
    'No real payment was processed.'
  ].join('\r\n');
  const file = new Blob([ticket], { type: 'text/plain;charset=utf-8' });
  const fileUrl = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = `StayEasy-ticket-${booking.id}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(fileUrl), 1000);
}

function tripCategory(booking) {
  if (booking.status === 'Cancelled') return 'cancelled';
  return booking.checkoutDate && booking.checkoutDate < dateInputValue(new Date()) ? 'completed' : 'upcoming';
}

function setTripFilter(filter) {
  selectedTripFilter = filter;
  renderMyBookings();
}

function cancelBooking(bookingId) {
  const allBookings = bookings();
  const booking = allBookings.find((item) => item.id === bookingId && item.email === me()?.email);
  if (!booking || tripCategory(booking) !== 'upcoming') return;
  if (!window.confirm('Cancel this demo booking? No refund or real payment is involved.')) return;

  const originalHotels = hotels();
  const updatedHotels = hotels();
  const hotel = updatedHotels.find((item) => item.id === booking.hotelId);
  const inventoryChanged = Boolean(hotel && !booking.inventoryRestored);
  if (hotel && !booking.inventoryRestored) {
    hotel.rooms += booking.roomsReserved || 1;
    if (!save('stayeasy_hotels', updatedHotels)) {
      return showSuccessPopup('Could not restore room availability. Booking was not cancelled.');
    }
    booking.inventoryRestored = true;
  }
  booking.status = 'Cancelled';
  booking.cancelledAt = new Date().toISOString();
  booking.refundStatus = 'Demo only — no refund processed';
  if (!save('stayeasy_bookings', allBookings)) {
    if (inventoryChanged) save('stayeasy_hotels', originalHotels);
    return showSuccessPopup('Could not save cancellation. Please try again.');
  }
  showSuccessPopup('Demo booking cancelled. No refund was processed.');
  searchHotels();
  renderMyBookings();
}

function simulateFriendShare(bookingId) {
  const allBookings = bookings();
  const booking = allBookings.find((item) => item.id === bookingId && item.email === me()?.email);
  if (!booking || booking.status === 'Cancelled' || booking.paidShares >= booking.splitCount) return;
  booking.paidShares += 1;
  booking.paidAmount += splitShare(booking.totalAmount, booking.splitCount, booking.paidShares - 1);
  booking.paymentStatus = `${booking.paidShares} of ${booking.splitCount} demo shares recorded`;
  if (booking.paidShares === booking.splitCount) booking.status = 'Confirmed';
  if (!save('stayeasy_bookings', allBookings)) {
    return showSuccessPopup('Could not save the demo share. Please try again.');
  }
  showSuccessPopup(booking.paidShares === booking.splitCount ? 'All demo shares are recorded.' : 'Friend demo share recorded.');
  renderMyBookings();
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function renderMyBookings() {
  const currentUser = me();
  const userBookings = bookings().filter((booking) => booking.email === currentUser.email);
  const bookingsContainer = document.getElementById('myBookings');

  if (document.getElementById('bookingCount')) {
    bookingCount.textContent = userBookings.length;
  }

  if (bookingsContainer) {
    const visibleBookings = userBookings.filter((booking) => tripCategory(booking) === selectedTripFilter);
    document.querySelectorAll('[data-trip-filter]').forEach((button) => {
      const selected = button.dataset.tripFilter === selectedTripFilter;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    bookingsContainer.innerHTML = visibleBookings.length
      ? visibleBookings.map((booking) => {
        const category = tripCategory(booking);
        const parts = [
          `📍 ${escapeHTML(booking.location)}`,
          `Check-in: ${escapeHTML(booking.date)}`,
          booking.checkoutDate ? `Check-out: ${escapeHTML(booking.checkoutDate)}` : '',
          `${booking.nights || stayNights(booking.date, booking.checkoutDate) || 1} night(s)`,
          `${escapeHTML(booking.roomCategory || 'Deluxe')} · ${booking.guestCount || 1} guest(s)`,
          booking.guest ? `Guest: ${escapeHTML(booking.guest)}` : ''
        ].filter(Boolean).join(' • ');
        return `
          <article class="booking-item booking-item-featured">
            <div class="booking-item-info">
              <b>${escapeHTML(booking.hotelName)}</b>
              <small>${parts}</small>
              <small>Booking ${escapeHTML(booking.id)} · ${escapeHTML(booking.paymentStatus || 'Demo payment not processed')}</small>
            </div>
            <div class="booking-item-actions">
              <span class="status ${category === 'cancelled' ? 'status-cancelled' : category === 'completed' ? 'status-completed' : ''}">${category[0].toUpperCase() + category.slice(1)} · ₹${formatINR(booking.totalAmount || booking.price)} total</span>
              <button class="secondary-btn" type="button" onclick="downloadBookingTicket('${booking.id}')">Ticket</button>
              ${category === 'upcoming' && booking.status !== 'Confirmed' ? `<button class="secondary-btn" type="button" onclick="simulateFriendShare('${booking.id}')">Record friend share (${booking.paidShares}/${booking.splitCount})</button>` : ''}
              ${category === 'upcoming' ? `<button class="delete" type="button" onclick="cancelBooking('${booking.id}')">Cancel</button>` : ''}
              ${booking.refundStatus ? `<small>${escapeHTML(booking.refundStatus)}</small>` : ''}
            </div>
          </article>
        `;
      }).join('')
      : `<div class="booking-item"><small>No ${selectedTripFilter} trips yet.</small></div>`;
  }
}

if (document.getElementById('hotels')) {
  const user = guard('user');

  if (user) {
    const search = getLandingSearch();
    welcome.textContent = `Hi, ${user.name}`;
    if (search?.destination) {
      document.getElementById('location').value = search.destination;
    }
    document.getElementById('searchCheckin').value = search?.checkin || '';
    document.getElementById('searchCheckout').value = search?.checkout || '';
    document.getElementById('searchGuests').value = String(search?.guests || 2);
    document.getElementById('searchCheckin').min = dateInputValue(new Date());
    document.getElementById('searchCheckout').min = dateInputValue(new Date(Date.now() + 86400000));
    document.getElementById('searchCheckin').addEventListener('change', () => {
      updateCheckoutMinimum('searchCheckin', 'searchCheckout');
    });
    document.getElementById('searchCheckout').addEventListener('change', () => {
      const checkin = document.getElementById('searchCheckin').value;
      if (checkin) updateCheckoutMinimum('searchCheckin', 'searchCheckout');
    });
    searchHotels();
    renderMyBookings();
    renderCompareTray();

    if (search?.hotelId) {
      openBooking(Number(search.hotelId));
    }
    window.setInterval(updateHotelPricePulse, 5000);
  }
}

window.STAYEASY_FEATURED_HOTELS = DEFAULT_HOTELS;

if (document.getElementById('adminHotels')) {
  const adminUser = guard('admin');

  if (adminUser) {
    renderAdmin();

    hotelForm.onsubmit = (event) => {
      event.preventDefault();

      const hotelList = hotels();

      hotelList.push({
        id: Date.now(),
        name: hotelName.value,
        location: hotelLocation.value,
        price: +hotelPrice.value,
        rooms: +hotelRooms.value,
        amenities: hotelAmenities.value.split(',').map((item) => item.trim()),
        type: 'Hotel',
        images: ['images/hotel-skyline.svg']
      });

      save('stayeasy_hotels', hotelList);
      hotelForm.reset();
      renderAdmin();
    };
  }
}

function renderAdmin() {
  const hotelList = hotels();
  const bookingList = bookings();
  const allUsers = users();

  hotelCount.textContent = hotelList.length;
  roomCount.textContent = hotelList.reduce((total, hotel) => total + hotel.rooms, 0);
  adminBookingCount.textContent = bookingList.length;
  userCount.textContent = allUsers.filter((user) => user.role === 'user').length;
  inventoryCount.textContent = `${hotelList.length} listings`;

  adminHotels.innerHTML = hotelList
    .map(
      (hotel) => `
        <div class="admin-hotel">
          <div>
            <b>${hotel.name}</b>
            <small>${hotel.location} • ₹${formatINR(hotel.price)} • ${hotel.rooms} rooms</small>
          </div>
          <button class="delete" onclick="deleteHotel(${hotel.id})">Delete</button>
        </div>
      `
    )
    .join('');

  adminBookings.innerHTML = bookingList.length
    ? `
      <div class="table-scroll">
        <table class="table">
          <tr>
            <th>Guest</th>
            <th>Hotel</th>
            <th>Stay dates</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          ${bookingList
            .map(
              (booking) => `
                <tr>
                  <td>${booking.guest}</td>
                  <td>${booking.hotelName}</td>
                  <td>${booking.date}${booking.checkoutDate ? ` – ${booking.checkoutDate}` : ''}</td>
                  <td>₹${formatINR(booking.totalAmount || booking.price)}</td>
                  <td>${booking.status}</td>
                </tr>
              `
            )
            .join('')}
        </table>
      </div>
    `
    : '<p class="muted">No bookings yet.</p>';
}

function deleteHotel(id) {
  if (!confirm('Delete this hotel?')) {
    return;
  }

  save('stayeasy_hotels', hotels().filter((hotel) => hotel.id !== id));
  renderCompareTray();
  renderAdmin();
}
