// Nécessite lottie.min.js

var animation = bodymovin.loadAnimation({
    container: document.querySelector('.js--loader'), // Required
    path: 'json/synchronize-cloud.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
})