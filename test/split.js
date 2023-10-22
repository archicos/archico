// Get elements from the DOM
const wrapper = document.querySelector('.split-screen');
const topLayer = document.querySelector('.left');

// Add mouse move event
wrapper.addEventListener('mousemove', e => {
    topLayer.style.width = e.clientX + 'px';
});

