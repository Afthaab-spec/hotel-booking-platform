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
const HOTEL_INVENTORY_VERSION = 5;

let comparedHotelIds = [];
const MAX_COMPARE_HOTELS = 3;

function hotelPhotos(hotel) {
  return Array.isArray(hotel.images) && hotel.images.length
    ? hotel.images
    : [hotel.image || 'images/hotel-skyline.svg'];
}

function renderHotelGallery(hotel) {
  const photos = hotelPhotos(hotel);

  return `
    <div class="hotel-gallery" data-photo-index="0">
      <img class="hotel-image" src="${photos[0]}" alt="${hotel.name} photo 1 of ${photos.length}" />
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
  } catch (error) {
    // ignore storage errors
  }
}

const users = () => readStorage('stayeasy_users', []);
const hotels = () => readStorage('stayeasy_hotels', DEFAULT_HOTELS) || DEFAULT_HOTELS;
const bookings = () => readStorage('stayeasy_bookings', []);
const save = (key, value) => writeStorage(key, value);

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

  const search = {
    destination: selectedDestination ?? document.getElementById('landingDestination').value,
    checkin: document.getElementById('landingCheckin').value,
    checkout: document.getElementById('landingCheckout').value,
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

const signupForm = document.getElementById('signupForm');

if (signupForm) {
  signupForm.onsubmit = (event) => {
    event.preventDefault();

    const allUsers = users();
    const email = signupEmail.value.trim().toLowerCase();

    if (signupPassword.value !== signupConfirm.value) {
      return (signupMessage.textContent = 'Passwords do not match.');
    }

    if (allUsers.some((user) => user.email === email)) {
      return (signupMessage.textContent = 'Email already registered.');
    }

    allUsers.push({
      name: signupName.value.trim(),
      email,
      password: signupPassword.value,
      role: 'user'
    });

    save('stayeasy_users', allUsers);
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
      return (loginMessage.textContent = 'Invalid email or password.');
    }

    save('stayeasy_currentUser', user);
    location.href = user.role === 'admin' ? 'admin.html' : 'user.html';
  };
}

function renderHotels(list) {
  const hotelBox = document.getElementById('hotels');

  if (!hotelBox) return;

  resultCount.textContent = `${list.length} hotels found`;

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
                </div>

                <div class="amenities">
                  ${hotel.amenities
                    .map((amenity) => `<span class="chip">${amenity}</span>`)
                    .join('')}
                </div>

                <div class="hotel-bottom">
                  <div class="price">
                    <strong>₹${hotel.price}</strong>
                    <span>/ night (sample)</span>
                    <div class="rooms">🛏 ${hotel.rooms} rooms left</div>
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
    : '<div class="card">No hotels found.</div>';
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
            <div><dt>Sample rate / night</dt><dd>₹${hotel.price}</dd></div>
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

  filteredHotels = filteredHotels.filter(
    (hotel) =>
      hotel.location.toLowerCase().includes(query) &&
      (!selectedAmenity || hotel.amenities.includes(selectedAmenity))
  );

  if (sortBy === 'low') {
    filteredHotels.sort((a, b) => a.price - b.price);
  }

  if (sortBy === 'high') {
    filteredHotels.sort((a, b) => b.price - a.price);
  }

  renderHotels(filteredHotels);
}

function clearSearch() {
  document.getElementById('location').value = '';
  amenity.value = '';
  sort.value = 'recommended';
  renderHotels(hotels());
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
    if (landingCheckin.value) updateCheckoutMinimum('landingCheckin', 'landingCheckout');
  }
}

function openBooking(id) {
  const hotel = hotels().find((item) => item.id === id);
  if (!hotel) return;
  const search = getLandingSearch();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  modalContent.innerHTML = `
    <p class="eyebrow blue">PAYMENT</p>
    <h2>${hotel.name}</h2>
    <p class="location">📍 ${hotel.location} • sample rate ₹${hotel.price}/night</p>

    <form class="booking-form" onsubmit="processPayment(event, ${id})">
      <label>
        Check-in date
        <input id="bookDate" type="date" min="${dateInputValue(today)}" value="${search?.checkin || ''}" onchange="updateCheckoutMinimum()" required />
      </label>

      <label>
        Check-out date
        <input id="checkoutDate" type="date" min="${dateInputValue(tomorrow)}" value="${search?.checkout || ''}" required />
      </label>

      <label>
        UPI ID
        <input id="upiId" type="text" placeholder="yournumber@upi" required />
      </label>

      <button class="confirm-btn" type="submit">Pay & Book</button>
    </form>
  `;

  modal.classList.remove('comparison-open');
  if (search?.checkin) updateCheckoutMinimum();
  modal.classList.remove('hidden');
}

function updateCheckoutMinimum(checkinId = 'bookDate', checkoutId = 'checkoutDate') {
  const bookingDate = document.getElementById(checkinId).value;
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
  modal.classList.add('hidden');
  modal.classList.remove('comparison-open');
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

function processPayment(event, hotelId) {
  event.preventDefault();

  const hotelList = hotels();
  const hotel = hotelList.find((item) => item.id === hotelId);
  const upiId = document.getElementById('upiId').value.trim();
  const bookingDate = document.getElementById('bookDate').value;
  const checkoutDate = document.getElementById('checkoutDate').value;

  if (!bookingDate || bookingDate < dateInputValue(new Date())) {
    return showSuccessPopup('Choose a check-in date from today onward.');
  }

  if (!checkoutDate || checkoutDate <= bookingDate) {
    return showSuccessPopup('Check-out must be after check-in.');
  }

  if (!hotel || hotel.rooms < 1) {
    return showSuccessPopup('No rooms available right now.');
  }

  if (!upiId) {
    return showSuccessPopup('Please enter a valid UPI ID.');
  }

  hotel.rooms -= 1;
  save('stayeasy_hotels', hotelList);

  const currentUser = me();
  const allBookings = bookings();
  const newBooking = {
    id: Date.now(),
    hotelName: hotel.name,
    location: hotel.location,
    guest: currentUser.name,
    email: currentUser.email,
    date: bookingDate,
    checkoutDate,
    price: hotel.price,
    upiId,
    paymentStatus: 'Paid',
    status: 'Confirmed',
    bookedAt: new Date().toISOString()
  };

  allBookings.push(newBooking);

  save('stayeasy_bookings', allBookings);
  localStorage.setItem('stayeasy_lastBooking', JSON.stringify(newBooking));
  sessionStorage.removeItem('stayeasy_search');

  closeModal();
  renderHotels(hotelList);
  renderMyBookings();
  showSuccessPopup('Payment successful! Hotel booked successfully.');
}

function renderMyBookings() {
  const currentUser = me();
  const userBookings = bookings().filter((booking) => booking.email === currentUser.email);
  const bookingsContainer = document.getElementById('myBookings');

  if (document.getElementById('bookingCount')) {
    bookingCount.textContent = userBookings.length;
  }

  if (bookingsContainer) {
    bookingsContainer.innerHTML = userBookings.length
      ? userBookings
          .map(
            (booking) => `
              <div class="booking-item">
                <div>
                  <b>${booking.hotelName}</b>
                  <small>📍 ${booking.location} • Check-in: ${booking.date}${booking.checkoutDate ? ` • Check-out: ${booking.checkoutDate}` : ''}</small>
                </div>
                <span class="status">${booking.status}<br>₹${booking.price}</span>
              </div>
            `
          )
          .join('')
      : '<div class="booking-item"><small>No bookings yet.</small></div>';
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

    const visibleHotels = search?.destination
      ? hotels().filter((hotel) => hotel.location === search.destination)
      : hotels();

    renderHotels(visibleHotels);
    renderMyBookings();
    renderCompareTray();

    if (search?.hotelId) {
      openBooking(Number(search.hotelId));
    }
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
            <small>${hotel.location} • ₹${hotel.price} • ${hotel.rooms} rooms</small>
          </div>
          <button class="delete" onclick="deleteHotel(${hotel.id})">Delete</button>
        </div>
      `
    )
    .join('');

  adminBookings.innerHTML = bookingList.length
    ? `
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
                <td>₹${booking.price}</td>
                <td>${booking.status}</td>
              </tr>
            `
          )
          .join('')}
      </table>
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
