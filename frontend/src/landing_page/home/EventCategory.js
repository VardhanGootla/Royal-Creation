import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Wedding",
    route: "/wedding",
    img: "https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/2/photographers.jpg",
    color: "#f4d5c2",

    subcategories: [
      { name: "Banquet Halls", route: "/wedding/banquet-halls" },
      { name: "Marriage Garden / Lawns", route: "/wedding/gardens-lawns" },
      { name: "Wedding Resorts", route: "/wedding/resorts" },
      { name: "Small Function / Party Halls", route: "/wedding/small-halls" },
    ],
  },
  {
    title: "Birthday Parties",
    route: "/birthday",
    img: "https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg",
    color: "#d8dffc",
    subcategories: [
      { name: "Venues", route: "/birthday/venues" },
      { name: "Cake & Catering", route: "/birthday/catering" },
    ],
  },
  {
    title: "Engagement",
    route: "/engagement",
    img: "https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/3/makeup.jpg",
    color: "#dfb2ad",
    subcategories: [
      { name: "Engagement Venues", route: "/engagement/venues" },
      { name: "Photographers", route: "/engagement/photographers" },
    ],
  },
  {
    title: "Anniversary",
    route: "/anniversary",
    img: "https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/7/planning-decor.jpg",
    color: "#f6b896",
    subcategories: [
      { name: "Anniversary Venues", route: "/anniversary/venues" },
      { name: "Photographers", route: "/anniversary/photographers" },
    ],
  },
  {
    title: "Corporate Events",
    route: "/corporate",
    img: "media/images/search5.jpg",
    color: "#f1e4d3ff",
    subcategories: [
      { name: "Conference Halls", route: "/corporate/halls" },
      { name: "Team Events", route: "/corporate/team-events" },
    ],
  },
];

const EventCategories = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5 ">
       <h2 className="mb-4 text-center fw-bold mt-5">Event Categories</h2>
      <div className="row">
        {categories.map((cat, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div
              className="card shadow-sm"
              style={{ cursor: "pointer", backgroundColor: cat.color }}
              onMouseEnter={() => toggleDropdown(index)}
              onMouseLeave={() => toggleDropdown(index)}
            >
              <div className="d-flex align-items-center p-3">
                {/* Text on left */}
                <div className="flex-grow-1">
                  <Link
                    to={cat.route}
                    className="text-dark font-weight-bold h5 d-block mb-1 text-truncate"
                    style={{ textDecoration: "none" }}
                  >
                    {cat.title}
                  </Link>
                  <p
                    className="text-secondary small mb-0 text-truncate"
                    style={{ maxWidth: "200px" }}
                  >
                    {cat.subcategories.map((sub) => sub.name).join(", ")}
                  </p>
                </div>

                {/* Image on right */}
                <div
                  className="ml-3"
                  style={{
                    width: "120px",
                    height: "120px",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Dropdown downward */}
              {openIndex === index && (
                <div className="bg-white p-2 border-top">
                  <div className="d-flex flex-wrap">
                    {cat.subcategories.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.route}
                        className="text-secondary p-1"
                        style={{ minWidth: "50%", textDecoration: "none" }}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCategories;
