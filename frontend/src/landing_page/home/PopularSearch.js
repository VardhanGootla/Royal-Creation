import React from "react";
import { Link } from "react-router-dom";


const popularSearches = [
  { img: "media/images/search1.jpg", text: "Weddings", route: "/weddings" },
  { img: "media/images/search2.jpg", text: "Birthday Parties", route: "/birthdays" },
  { img: "media/images/search3.jpg", text: "Engagements", route: "/engagements" },
  { img: "media/images/search4.jpg", text: "Anniversaries", route: "/anniversaries" },
  { img: "media/images/search5.jpg", text: "Corporate Events", route: "/corporate-events" },
];

function PopularSearch() {
  return (
    <section className="popular-searches py-5" style={{ backgroundColor: '#fdf2f7' }}>
      <div className="container ">
        <h2 className="mb-4 text-center fw-bold mt-5" style={{ color: 'rgb(255, 102, 163)' }}>
          Popular Searches
        </h2>

        <div className="row g-4 justify-content-center mt-3">
          {popularSearches.map((item, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
              <Link to={item.route} className="text-decoration-none text-dark">
                <div
                  className="card border-0 shadow-sm h-100"
                  style={{
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  // Bootstrap hover effect: scale & shadow
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.classList.add("shadow-lg");
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.classList.remove("shadow-lg");
                  }}
                >
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.text}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <p className="fw-bold mb-0">{item.text}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularSearch;
