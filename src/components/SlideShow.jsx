import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';

const images = [
  'https://preview.redd.it/fire-fist-luffy-alternate-timeline-one-piece-4k-wallpaper-v0-u4ak8m2y5dec1.png?auto=webp&s=f5d1f0a3ada3cd67f9cd5ba8d85b6ca2fb879cd1',
  'https://images7.alphacoders.com/311/311022.jpg',
  'https://wallpapers-clan.com/wp-content/uploads/2024/06/one-piece-zoro-blade-mastery-desktop-wallpaper-preview.jpg',
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia a la siguiente imagen automáticamente cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
    <Box
        sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
        }}
    >
    {/* Imagen actual */}
    <Box
        component="img"
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease-in-out',
        }}
    />

      {/* Botón para ir a la imagen anterior */}
    <Button
        onClick={goToPrevious}
        sx={{
            position: 'absolute',
            height: '100vh',
            top: '50%',
            left: '0px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            color: 'white',
            '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo más oscuro en hover
            color: '#ffeb3b', // Cambia el color del texto en hover
            },
        }}
    >
        ‹
    </Button>

    {/* Botón para ir a la imagen siguiente */}
    <Button
        onClick={goToNext}
        sx={{
            position: 'absolute',
            height: '100vh',
            top: '50%',
            right: '1px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            color: 'white',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo más oscuro en hover
                color: '#ffeb3b', // Cambia el color del texto en hover
            },
        }}
    >
        ›
    </Button>
</Box>
    );
}

export default Slideshow;