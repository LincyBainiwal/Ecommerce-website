import React, { useState }  from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MensCard from './MensCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { mensWearData } from './mensWearData';



const Mens = ({ sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
      0: { items: 1 },
      720: { items: 3 },
      1024: { items: 5 },
    };
  
    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
  
    const syncActiveIndex = ({ item }) => setActiveIndex(item);
  
    const items = mensWearData.slice(0, 10).map((item) => <MensCard product={item} />);
  
    return (
      <div className="border ">
        <h2 className="py-3 px-5 text-3xl font-semibold text-gray-900">{sectionName}</h2>
        <div className="relative p-5">
          <AliceCarousel
            items={items}
            disableButtonsControls
            responsive={responsive}
            disableDotsControls
            onSlideChanged={syncActiveIndex}
            activeIndex={activeIndex}
          />
          {activeIndex!== 0 && (
            <Button
              variant="contained"
              className="z-50 bg-white"
              onClick={slidePrev}
              sx={{
                position: 'absolute',
                top: '8rem',
                left: '0rem',
                transform: 'translateX(-50%) rotate(90deg)',
                bgcolor: 'white',
              }}
              aria-label="prev"
            >
              <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
            </Button>
          )}
          {activeIndex!== items.length - 5 && (
            <Button
              variant="contained"
              className="z-50 bg-white"
              onClick={slideNext}
              sx={{
                position: 'absolute',
                top: '8rem',
                right: '0rem',
                transform: 'translateX(50%) rotate(90deg)',
                bgcolor: 'white',
              }}
              aria-label="next"
            >
              <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
            </Button>
          )}
        </div>
      </div>
    );
  };
  export default Mens;