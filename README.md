# Genshin Impact Material Calculator
This app uses Vue3.js, Vite, and Firebase in order create a simple material calculator with an embedded, live, chat! 

<div>
    <img src="images/gic-home.png" alt="Image 1" style="width: 80%; height: auto;">
</div>

## Features 
- OAuth login with Google through Firebase 
- Secure user database managment via Firebase
- Live chat
- Material calculator for Genshin Impact characters
- Customizable profile

## Screenshots
### _Click to expand/collapse the screenshots:_
<details>
  <summary>Characters Page</summary>
  <img src="images/gic-characters.png" alt="Characters Page" style="width: 100%; height: auto;">
  
</details>
<details>
  <summary>Chat Page</summary>
  <img src="images/gic-chat.png" alt="Chat Page" style="width: 100%; height: auto;">
  
</details>
<details>
  <summary>Profile Page</summary>
  <img src="images/gic-profile.png" alt="Profile Page" style="width: 100%; height: auto;">
  
</details>
<details>
  <summary>Material Calculator Page</summary>
  <img src="images/gic-calculator.png" alt="Material Calculator Page" style="width: 100%; height: auto;">
  
</details>


## Required Files

In order for the live chat and Oauth login to function, you must add this file in the `/src` directory. 

```js
// firebaseConfig.js

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

export default firebaseConfig;
```

---
---
# Vue 3 + Firebase Auth

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
