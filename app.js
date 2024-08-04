const genres = {
    shoes: [
        { url: 'ppp/Screenshot 2024-08-03 185034.png', link: 'https://www.sothebys.com/en/buy/private-sales/sneakers/_nike-air-jordan-1-off-white-chicago-sample-or-size-8-4aba', title: "Nike Air Jordan 1 Off-White Chicago Sample",
          description: "Exclusive Nike Air Jordan 1 Off-White Chicago Sample, size 8. A highly sought-after collector's item from Virgil Abloh's 'The Ten' collection.",
          price: "300000" },

        { url: 'ppp/Screenshot 2024-08-03 185155.png', link: 'https://www.sothebys.com/en/buy/private-sales/sneakers/_nike-x-louis-vuitton-air-force-1-pilot-case-size-7',
          title: "Nike x Louis Vuitton Air Force 1 Pilot Case",
          description: "Unique collaboration between Nike and Louis Vuitton, featuring the Air Force 1 in a special pilot case, size 7.",
          price: "1,60,000" },

        { url: 'ppp/Screenshot 2024-08-03 185241.png', link: 'https://www.sothebys.com/en/buy/private-sales/sneakers/_nike-dunk-high-coraline-or-size-12' ,
          title: "Nike Dunk High Coraline",
          description: "Nike Dunk High inspired by the Coraline movie, size 12. A rare collectible for fans of both sneakers and the film.",
          price: "2,50,000", }
    ],

    shirts: [
        { url: 'ppp/Screenshot 2024-08-03 185345.png', link: '1', title: "Signed Ronaldinho Barcelona Blue/Red Soccer Jersey Beckett BAS COA",
          description: "This autographed Ronaldinho jersey from his time at Barcelona comes with a Beckett BAS Certificate of Authenticity. A great collectible for any soccer fan.",
          price: 726.99 },

        { url: 'ppp/Screenshot 2024-08-03 185425.png', link: '2', title: "Autographed 1986-87 Chicago Bulls Red Authentic Mitchell and Ness Jersey",
          description: "An iconic jersey signed by Michael Jordan from his early years with the Chicago Bulls, authenticated by Upper Deck.",
          price: 3499.99 },

        { url: 'ppp/Screenshot 2024-08-03 185501.png', link: '3', title: "Sidney Crosby Autographed Pittsburgh Penguins Adidas Jersey",
          description: "A signed jersey by Sidney Crosby, a key player of the Pittsburgh Penguins, authenticated for collectors.",
          price: 799.99 }
    ],
    
    paintings: [
        { url: 'ppp/Screenshot 2024-08-03 185602.png', link: 'https://example.com/tech1', title: "Ukrainian Dancers by Edgar Degas",
          description: "This exquisite piece by Edgar Degas captures the graceful movement and vibrant energy of Ukrainian dancers. An iconic work of art, it brings a touch of elegance and history to any collection.",
          price: 3000000 },
          
        { url: 'ppp/Screenshot 2024-08-03 185635.png', link: 'https://example.com/tech2', title: "Fleurs dans un Vase avec Partition Musicale by Paul Gauguin",
          description: "Paul Gauguin's 'Fleurs dans un Vase avec Partition Musicale' is a beautiful still life painting that showcases his masterful use of color and composition. This piece is a testament to Gauguin's unique artistic vision.",
          price: 2500000 },

        { url: 'ppp/Screenshot 2024-08-03 185825.png', link: 'https://example.com/tech3', title: "Petite Mendiante by William-Adolphe Bouguereau",
          description: "William-Adolphe Bouguereau's 'Petite Mendiante' is a poignant depiction of a young beggar girl. Bouguereau's attention to detail and emotional depth make this painting a captivating addition to any art collection.",
          price: 1800000 }
    ]
};

let currentGenre = 'shoes';
let currentPhotoIndex = 0;

const photoElement = document.getElementById('photo');

function showPhoto() {
    const photos = genres[currentGenre];
    const photo = photos[currentPhotoIndex];
    
    // Apply fade-out effect
    document.getElementById('photo-container').style.opacity = 0;
    
    setTimeout(() => {
        // Update photo content
        photoElement.src = photo.url;
        document.getElementById('photo-title').textContent = photo.title;
        document.getElementById('photo-description').textContent = photo.description;
        document.getElementById('photo-price').textContent = photo.price;
        
        // Apply fade-in effect
        document.getElementById('photo-container').style.opacity = 1;
    }, 500); // Duration should match the CSS transition duration
}

function showNextPhoto() {
    const photos = genres[currentGenre];
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto();
}

function changeGenre() {
    const genreKeys = Object.keys(genres);
    const currentIndex = genreKeys.indexOf(currentGenre);
    const nextGenreIndex = (currentIndex + 1) % genreKeys.length;
    currentGenre = genreKeys[nextGenreIndex];
    currentPhotoIndex = 0;
    showPhoto();
}

function openPhotoLink() {
    const photos = genres[currentGenre];
    const photo = photos[currentPhotoIndex];
    window.open(photo.link, '_blank');
}

function handleSwipe(event) {
    if (event.offsetDirection === Hammer.DIRECTION_RIGHT) {
       showNextPhoto();
    } else if (event.offsetDirection === Hammer.DIRECTION_LEFT) {
        changeGenre();
    } else if (event.offsetDirection === Hammer.DIRECTION_UP) {
        openPhotoLink();
    }
}

function handleKeydown(event) {
    switch(event.key) {
        case 'ArrowLeft':
            showNextPhoto(); 
            break;
        case 'ArrowRight':
            changeGenre();
            break;
        case 'ArrowUp':
            openPhotoLink();
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPhoto();
    
    const hammer = new Hammer(photoElement);
    hammer.on('swipe', handleSwipe);

    document.addEventListener('keydown', handleKeydown);
});
