# 🧭 CurrencyCompass

**CurrencyCompass** is a modern currency converter that helps users *navigate exchange rates from a new perspective*.
It fetches real-time currency data and provides a clean, interactive interface for quick and intuitive conversions.

---

## 🚀 Features

* 💱 Real-time currency conversion using live API data
* 🔍 Searchable currency dropdown (type to filter currencies)
* 🎯 Dynamic dropdown generated from API data (no hardcoding)
* ⚡ Instant conversion based on selected currencies and input amount
* 🖱 Manual conversion trigger using arrow button
* 🌗 Light / Dark mode toggle

---

## 🔌 API Used

This project uses the **Open Exchange Rate API (Open ER API)**:

**Base URL:**
https://open.er-api.com/v6/latest/USD

The app fetches exchange rates once (with USD as base) and performs all conversions locally for better performance.
{Was Previously using Frankfurter API, but it was producing some errors while building later, so switched}
---

## 🛠 Tech Stack

* HTML
* CSS
* JavaScript
* Fetch API

---

## 🧠 What This Project Demonstrates

* Fetching and storing API data
* Using `Object.keys()` to dynamically generate UI elements
* Using `.filter()` for real-time search functionality
* Using `.map()` to render dropdown UI dynamically
* DOM manipulation and event handling
* Building interactive UI without external libraries

---

## ⚙️ How It Works

1. Fetch exchange rates from API
2. Store data inside a global `rates` object
3. Generate currency list dynamically from API
4. Filter currencies as user types
5. Select currency from dropdown
6. Convert using formula:

```
amount (from currency) → USD → target currency
```

---

## 📌 How to Run

1. Clone this repository
2. Open `index.html` in your browser

---

## ✨ Concept

The idea behind *CurrencyCompass* is simple:

> Just like a compass helps you find direction, this web app helps you understand currency values from different perspectives.

---
