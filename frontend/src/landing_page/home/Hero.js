import React from 'react';

function Hero() {
  return (
    <section
      className="hero position-relative"
      style={{
        height: "75vh",
        overflow: "hidden",
      }}
    >
      {/* Background overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.25))", // subtle dark fade
          zIndex: 1,
        }}
      ></div>

      {/* Background Image */}
      <img
        src="media/images/mainPhoto.webp"
        alt="Hero"
        className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        style={{
          objectPosition: "center",
          filter: "brightness(97%)", // bright and clear
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        className="container position-relative d-flex flex-column justify-content-center align-items-center h-100 text-white"
        style={{ zIndex: 2 }}
      >
        <h1
          className="font-override"
          style={{
            fontSize: "4.2rem",
            fontWeight: "800",
            color: "#ffffff",
            textShadow: "0 12px 6px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255, 255, 255, 0.25)"
,
 
            letterSpacing: "2px",
            textAlign: "center",
            filter: "brightness(100%)",
          }}
        >
          Welcome to Royal Creation
        </h1>

        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "450",
            color: "#f8f9fa",
            textShadow: "0.5px 0.5px 2px rgba(0,0,0,0.45)", // minimal shadow
            letterSpacing: "2px",
            textAlign: "center",
            filter: "brightness(118%)",
          }}
        >
          Crafting unforgettable weddings & celebrations
        </h1>
      </div>
    </section>
  );
}

export default Hero;
