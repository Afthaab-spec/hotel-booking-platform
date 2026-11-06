(function mountFeaturedHotels() {
  const container = document.getElementById('featuredHotels');
  const hotels = window.STAYEASY_FEATURED_HOTELS;

  if (!container || !Array.isArray(hotels)) return;

  if (!window.React || !window.ReactDOM) {
    renderFeaturedHotels();
    return;
  }

  const { createElement: h, useState } = React;

  function HotelGallery({ hotel }) {
    const [photoIndex, setPhotoIndex] = useState(0);
    const images = hotel.images;

    function movePhoto(direction) {
      setPhotoIndex((currentIndex) => (currentIndex + direction + images.length) % images.length);
    }

    return h(
      'div',
      { className: 'hotel-gallery', 'data-photo-index': photoIndex },
      h('img', {
        className: 'hotel-image',
        src: images[photoIndex],
        alt: `${hotel.name} photo ${photoIndex + 1} of ${images.length}`
      }),
      images.length > 1 && h(
        'button',
        {
          className: 'gallery-arrow gallery-previous',
          type: 'button',
          'aria-label': `Previous ${hotel.name} photo`,
          onClick: () => movePhoto(-1)
        },
        '‹'
      ),
      images.length > 1 && h(
        'button',
        {
          className: 'gallery-arrow gallery-next',
          type: 'button',
          'aria-label': `Next ${hotel.name} photo`,
          onClick: () => movePhoto(1)
        },
        '›'
      ),
      images.length > 1 && h(
        'span',
        { className: 'gallery-count', 'aria-live': 'polite' },
        `${photoIndex + 1} / ${images.length}`
      )
    );
  }

  function FeaturedHotel({ hotel }) {
    return h(
      'article',
      { className: 'hotel', 'data-hotel-id': hotel.id },
      h(HotelGallery, { hotel }),
      h(
        'div',
        { className: 'hotel-body' },
        h('p', { className: 'location' }, `📍 ${hotel.location}`),
        h('h3', null, hotel.name),
        h(
          'div',
          { className: 'hotel-bottom' },
          h('span', { className: 'hotel-type' }, hotel.type),
          h('a', { className: 'hotel-visit', href: 'login.html' }, 'Explore ', h('span', null, '→'))
        )
      )
    );
  }

  function FeaturedHotelList() {
    return hotels.map((hotel) => h(FeaturedHotel, { hotel, key: hotel.id }));
  }

  ReactDOM.createRoot(container).render(h(FeaturedHotelList));
})();
