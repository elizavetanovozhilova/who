const images = [
    'img/IMG_3533.PNG',
    'img/IMG_3693.JPG',
    'img/IMG_3694.PNG',
    'img/IMG_3695.PNG',
    'img/IMG_3693.PNG',
    'img/IMG_3694.PNG',
    'img/IMG_3695.PNG',
    'img/IMG_3697.PNG',
    'img/IMG_3698.PNG',
    'img/IMG_3699.PNG',
    'img/IMG_3700.PNG',
    'img/IMG_3701.PNG',
    'img/IMG_3703.PNG',
    'img/IMG_3704.PNG',
    'img/IMG_3705.PNG',
    'img/IMG_3706.PNG',
    'img/IMG_3708.PNG',
    'img/IMG_3709.PNG',
    'img/IMG_3710.JPG',
    'img/IMG_6858.PNG',
    'img/IMG_7720.PNG'
];

const button = document.getElementById('who-btn');
const image = document.getElementById('random-pic');
const title = document.getElementById('title')

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    
    image.src = randomImage;
    image.style.visibility = 'visible';
    title.style.visibility = 'hidden'
});
