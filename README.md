# StayEasy Hotel Booking Platform

## Problem Statement
Users need a simple way to discover hotels, compare price/amenities and plan a stay. Admins need to manage hotel listings and monitor bookings. StayEasy demonstrates this workflow with a responsive, dependency-free HTML, CSS and JavaScript app.

## Modules
### User Module
- Signup and Login
- Search by hotel name or destination, with check-in/check-out dates and guest count
- Amenity and Vibe Match filters (Romantic, Heritage, Beach, Business, Family)
- Sort by nightly price
- Pick a destination by travel mood
- Save favourite stays and filter to saved hotels
- Compare up to three different hotels in the same city
- Browse each hotel's photo gallery with previous/next controls
- View room availability and simulated live price/viewer pulses
- Choose a room category, enter guest details, and see an automatic tax-inclusive total
- Hold a demo rate for 10 minutes or add a ₹299, 24-hour demo price lock
- Simulate Card, UPI or Net Banking payments; split a booking between 2–6 people
- Download a booking ticket and view upcoming, completed and cancelled trips
- Cancel an upcoming demo booking
- Logout

### Admin Module
- Admin Login
- Dashboard statistics
- Add hotel
- Delete hotel
- View hotel inventory
- View booking activity
- View registered users count
- Logout

## SDC Requirements Mapping
1. **Problem statement:** Hotel discovery and booking workflow.
2. **Business system:** Hotel Booking System with Admin and User modules.
3. **Technologies:** Plain HTML, CSS and JavaScript; no framework, build step, CDN or package installation is required.
4. **UI:** CSS Grid and Flexbox are used throughout the responsive UI.
5. **Signup/Login:** Browser Local Storage stores users and current session.
6. **Module redirection:** JavaScript checks the role after login and redirects User → `user.html`, Admin → `admin.html`.
7. **Working features:** Mood-based discovery, hotel/destination search, guest/date selection, filters, saved stays, photo galleries, same-city comparison, room categories, tax-inclusive demo totals, simulated payments, price holds/locks, split shares, downloadable tickets, trip status/cancellation, admin inventory and booking activity.
8. **GitHub:** Push the complete `hotel-booking` folder to your GitHub repository.
9. **Demo:** Use the review flow below.

## Local Storage Keys
- `stayeasy_users`
- `stayeasy_currentUser`
- `stayeasy_hotels`
- `stayeasy_bookings`
- `stayeasy_favorites_<user-email>`
- `stayeasy_lastBooking`

## Admin Demo Login
Email: `admin@stayeasy.com`
Password: `admin123`

## Run
**Windows one-click launch:** double-click `start.bat`. It starts the local server on port 8000, waits for it to be ready and opens the app in your browser. Python 3 must be installed. If port 8000 is already serving StayEasy, the launcher reuses it.

To start it manually from the project folder instead:

```powershell
python -m http.server 8000
```

For the SDC demonstration, create a User account, log in, search for a hotel or destination, choose a Vibe Match, save or compare a stay, then complete a demo booking. You can try the optional price lock, payment methods, split shares, ticket download and trip cancellation. Then log out and use the Admin demo account to add/delete hotels and show booking activity.

### Booking and payment demo rules
- Hotel rates, visitor counts and the displayed room pulse are illustrative simulations, not live inventory or market prices.
- The booking estimate applies a 12% demo tax. Room categories use sample rate multipliers: Deluxe ×1, Suite ×1.7 and Royal Suite ×2.6.
- The 10-minute rate hold starts when a booking is opened. The optional ₹299 price-lock add-on records a 24-hour demo lock with the booking.
- Split bookings divide the total as evenly as possible across 2–6 shares. The user records the first share during checkout; remaining shares can be marked as simulated in My Trips.
- Card, UPI and Net Banking are simulation options only. For the card flow, use the test number `4242 4242 4242 4242`, a future expiry, any 3- or 4-digit test CVV and a test cardholder name. Details are not stored or sent to a payment provider.
- Cancelling an upcoming trip restores its demo room count. No real payment, charge, refund or external booking is processed.

## Featured Hotels and Photos
The starting inventory contains eight real properties: Taj Krishna and Hyatt Hyderabad, Gachibowli (Hyderabad), ITC Grand Chola and Taj Coromandel (Chennai), Taj Fort Aguada Resort & Spa and Taj Exotica Resort & Spa (Goa), and The Leela Palace Bengaluru and The Oberoi, Bengaluru. Each listing has a three- or four-photo gallery; use the arrow buttons on the photos to browse. Photo galleries are loaded from Wikimedia Commons or official hotel sites and require an internet connection. The app itself and its search/booking flows run locally without CDN dependencies. Sample rates and room counts are illustrative only; they are not live prices or availability. Comparisons are limited to different hotels in one city.

Photo credits and licenses:
- Taj Krishna hotel in Hyderabad — Sajeev0101, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Taj_Krishna_hotel_in_hyderabad.jpg).
- ITC Grand Chola, Chennai — Destination8infinity, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ITC-Grand-Chola-Chennai-2.JPG).
- Taj Fort Aguada Resort — iMahesh, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Taj_Fort_Aguada_Resort.jpg).
- The Leela Palace Bengaluru — Darren Foreman, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hotel_Leela_Palace_(4353404470).jpg) and [second photo](https://commons.wikimedia.org/wiki/File:Hotel_Leela_Palace_(4352657669).jpg); third photo from [The Leela's official site](https://www.theleela.com/the-leela-palace-bengaluru).
- Hyatt Hyderabad, Gachibowli — Pinakpani, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [Wikimedia Commons hotel photo set](https://commons.wikimedia.org/wiki/Category:Hyatt_Hyderabad,_Gachibowli).
- ITC Grand Chola photo gallery — Destination8infinity, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:ITC_Grand_Chola).
- Taj Coromandel — photos from the hotel's [official website](https://www.tajhotels.com/en-in/hotels/taj-coromandel-chennai/).
- Taj Exotica Resort & Spa — Jagadhatri, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), [fountain](https://commons.wikimedia.org/wiki/File:Fountain_at_Taj_Exotica_Goa,_2010.JPG) and [illuminated fountain](https://commons.wikimedia.org/wiki/File:Illuminated_fountain,_Taj_Exotica_Goa_2010.JPG); Taj Hotels, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), [spa photo](https://commons.wikimedia.org/wiki/File:Taj_Spa_4.jpg).
- The Oberoi, Bengaluru — photos from the hotel's [official image gallery](https://www.oberoihotels.com/hotels-in-bengaluru/gallery/).

## Project Structure
```text
hotel-booking/
├── index.html
├── login.html
├── signup.html
├── user.html
├── admin.html
├── style.css
├── script.js
├── start.bat
├── README.md
└── images/
    ├── hotel-skyline.svg
    ├── stayeasy-hero.svg
    ├── grand-palace.svg
    ├── royal-stay.svg
    └── comfort-inn.svg
```

## Review Explanation
- HTML: page structure and forms.
- CSS: Grid/Flexbox responsive UI.
- JavaScript: validation, Local Storage, search/filter, booking logic and role-based navigation.
- Local Storage: acts as the browser-side data store for this academic demo.

The app replaces the previous built-in sample inventory with these eight properties on upgrade while preserving rooms already booked and hotels added by an admin.

login details 
Email: admin@stayeasy.com
Password: admin123