import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
const HomeCarousel = () => {
  const [bgImage, setBgImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgImage((prevImage) => (prevImage + 1) % backgroundImageUrls.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  console.log(bgImage);

  const backgroundImageUrls = [
    "https://source.unsplash.com/featured/?gym",
    "https://source.unsplash.com/featured/?fitness",
    "https://source.unsplash.com/featured/?workout",
    "https://source.unsplash.com/featured/?bodybuilder",
    "https://source.unsplash.com/featured/?exercise",
    "https://source.unsplash.com/featured/?fit",
    "https://source.unsplash.com/featured/?athlete",
    "https://source.unsplash.com/featured/?training",
    "https://source.unsplash.com/featured/?muscle",
    "https://source.unsplash.com/featured/?strength",
    "https://source.unsplash.com/featured/?health",
  ];

  return (
    <>
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        className="absolute top-0 h-screen w-full bg-cover bg-center"
      >
        {backgroundImageUrls.map((item, idx) => (
          <div key={idx}>
            <img src={item} className="h-screen bg-cover" />
          </div>
        ))}
        {/* <div>
          <img src={backgroundImageUrls[bgImage]} className="h-screen" />
          
        </div> */}
      </Carousel>
    </>
  );
};

export default HomeCarousel;
