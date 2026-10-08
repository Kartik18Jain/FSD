import React, { useEffect, useState } from "react";

function ImageSlider() {
  const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: "800px",
        height: "400px",
        margin: "50px auto",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 0.6s ease",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              minWidth: "100%",
              width: "800px",
              height: "400px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;