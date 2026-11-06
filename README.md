# StayEasy Hotel Booking Platform — SDC Project Review 1

## Problem Statement
Users need a simple way to search hotels, compare price/amenities and book a stay. Admins need to manage hotel listings and monitor bookings. StayEasy demonstrates this business workflow using HTML, CSS, JavaScript and React for the featured hotel galleries.

## Modules
### User Module
- Signup and Login
- Search by location
- Amenity filter and sorting
- Compare up to three different hotels in the same city
- Browse each hotel's photo gallery with previous/next controls
- View availability
- Book hotel
- View My Bookings
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
3. **Technologies:** HTML, CSS and JavaScript, with React 18 for the landing-page hotel cards and photo galleries. React is loaded from a CDN; other app pages retain their existing JavaScript behavior.
4. **UI:** CSS Grid and Flexbox are used throughout the responsive UI.
5. **Signup/Login:** Browser Local Storage stores users and current session.
6. **Module redirection:** JavaScript checks the role after login and redirects User → `user.html`, Admin → `admin.html`.
7. **Working features:** Search, filters, React-powered hotel photo galleries, same-city comparison, booking, room count, admin inventory and booking activity.
8. **GitHub:** Push the complete `hotel-booking` folder to your GitHub repository.
9. **Demo:** Use the review flow below.

## Local Storage Keys
- `stayeasy_users`
- `stayeasy_currentUser`
- `stayeasy_hotels`
- `stayeasy_bookings`

## Admin Demo Login
Email: `admin@stayeasy.com`
Password: `admin123`

## Run
Start a local web server from the `hotel-booking` project folder, then open `http://localhost:8000`:

```powershell
python -m http.server 8000
```

Keep the terminal running while you use the app. If port 8000 is already occupied, use another port and update the local redirect at the top of `script.js` to match. For the SDC demonstration, first create a User account, login and book a hotel. Then logout and use the Admin demo account to add/delete hotels and show booking activity.

## Featured Hotels and Photos
The starting inventory contains eight real properties: Taj Krishna and Hyatt Hyderabad, Gachibowli (Hyderabad), ITC Grand Chola and Taj Coromandel (Chennai), Taj Fort Aguada Resort & Spa and Taj Exotica Resort & Spa (Goa), and The Leela Palace Bengaluru and The Oberoi, Bengaluru. Each listing has a three- or four-photo gallery; use the arrow buttons on the photos to browse. Photo galleries are loaded from Wikimedia Commons or official hotel sites and require an internet connection. The app's sample rates and room counts are illustrative only; they are not live prices or availability. Comparisons are limited to different hotels in one city.

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
├── README.md
└── images/
    ├── hotel-skyline.svg
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