import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const VenueSelectionGuide = () => {
  return (
    <div>
      <Navbar />
      <div class="container py-5">
        <h1
          class="text-3xl font-bold text-center mb-8"
          style={{ color: "rgb(255, 102, 163)" }}
        >
          The Ultimate Guide to Venue Selection
        </h1>

        <div class="col-lg-8 mx-auto">
          <article>
            <p class="lead">
              The venue sets the tone for your entire event. It's the backdrop
              for your photos, the container for your memories, and the first
              impression your guests will have. Learn how to choose the perfect
              location that fits your budget and style.
            </p>

            <p>
              Choosing a venue is one of the biggest decisions you'll make in
              the event planning process. It's about more than just four walls
              and a roof; it's about finding a space that aligns with your
              vision, accommodates your guests comfortably, and works within
              your budget. A great venue enhances the theme, simplifies
              logistics, and elevates the overall guest experience.
            </p>
            <img
              src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg"
              class="img-fluid mb-4 mt-4 rounded-5 w-auto h-25"
              alt="img"
            ></img>
            <h2 class="mt-5 border-bottom pb-2 mb-4">
              Key Factors to Consider When Choosing Your Venue
            </h2>
            <p>
              Navigating the world of venues can be overwhelming. To find the
              perfect fit, focus on these essential criteria:
            </p>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">
                <strong>Budget:**</strong> This is the starting point. Be clear
                about your total budget and inquire about what's included in the
                rental fee. Ask about potential hidden costs like service
                charges, taxes, security fees, or required insurance to avoid
                surprises.
              </li>
              <li class="list-group-item">
                <strong>Capacity and Layout:**</strong> Ensure the venue can
                comfortably accommodate your guest list. A space that's too
                small will feel cramped, while one that's too large can feel
                empty. Consider the event's flow—is there a logical space for a
                reception, dining, and dancing?
              </li>
              <li class="list-group-item">
                <strong>Location and Accessibility:**</strong> Think about your
                guests' convenience. Is the venue easy to find? Is there ample
                and affordable parking or easy access to public transportation?
                Also, ensure the venue is accessible for any guests with
                mobility challenges.
              </li>
              <li class="list-group-item">
                <strong>Ambiance and Style:**</strong> The venue’s architecture
                and decor should complement your event's theme. A rustic barn, a
                modern art gallery, and a grand hotel ballroom all offer vastly
                different vibes. Choosing a venue that already fits your style
                can save you a significant amount on decorations.
              </li>
              <li class="list-group-item">
                <strong>Services and Restrictions:**</strong> Understand what
                the venue provides. Do they offer in-house catering, tables,
                chairs, and linens? Do you have to use their preferred list of
                vendors, or can you bring in your own? Check for any
                restrictions on decor, noise levels, or end times.
              </li>
            </ol>

            <p>
              Finding the perfect venue is a balancing act between your dream
              vision and practical logistics. By doing your research, asking the
              right questions, and visiting your top choices in person, you can
              secure a location that serves as the perfect foundation for an
              incredible and memorable event.
            </p>

            <p class="text-center text-muted fst-italic mt-5">
              Happy venue hunting!
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VenueSelectionGuide;
