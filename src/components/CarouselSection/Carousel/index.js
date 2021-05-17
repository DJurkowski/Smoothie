import React, { useState } from 'react';
import { CarouselContainer, Image, ImageWrapper, CarouselNextArrow, CarouselPrevArrow } from './CarouselElements';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const Carousel = ({ images }) => {
    
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
     <CarouselContainer>
     <CarouselPrevArrow onClick={() => paginate(-1)} />
     <AnimatePresence initial={false} custom={direction}>
        
        <Image
          key={page}
          src={images[imageIndex]}
          custom={direction}
          // variants={variants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            x: { type: 'spring', stiffness: 400, damping: 500 }, 
            opacity: { duration: 0.2 }
          }}
        />
       
      </AnimatePresence>
     <CarouselNextArrow onClick={() => paginate(1)} />
   </CarouselContainer>
  );
};

export default Carousel;
