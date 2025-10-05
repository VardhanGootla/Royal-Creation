import React from 'react';

function Hero() {
  return (
  
   <section className="hero position-relative" style={{ height: "70vh" }}>

  {/* Background Image */}
  <img
    src="media/images/mainPhoto.webp"
    alt="Hero"
    className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
  />

  {/* Content */}
  <div className="container position-relative d-flex flex-column justify-content-center align-items-center h-100 text-white">

  <h1 
  className="font-override" 
  style={{ 
    fontSize: "3.5rem",   // much bigger (≈56px)
    fontWeight: "900",    // ultra bold
    color: "white", 
    textShadow: "3px 3px 10px rgba(0,0,0,0.8)", 
    letterSpacing: "2px", // spacing for luxury feel
    textAlign: "center"   // centers it
  }}
>
  Welcome to Royal Creation
</h1>


  <h1 
  style={{
    fontSize: "2rem",
    fontWeight: "350",
    color: "white",
    textShadow: "3px 3px 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)",
    letterSpacing: "2px",
    textAlign: "center"
  }}
>

  Crafting unforgettable weddings & celebrations

</h1>



  
  </div>
</section>





    );
}

export default Hero;