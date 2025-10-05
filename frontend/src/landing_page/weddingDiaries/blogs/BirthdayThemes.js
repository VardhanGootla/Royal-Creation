import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const BirthdayThemes = () => {
  return (
    <div>
      <Navbar />
      <div class="container py-5">
        <h1
          class="text-3xl font-bold text-center mb-8"
          style={{ color: "rgb(255, 102, 163)" }}
        >
          From Fun to Unforgettable: Choosing the Perfect Theme for Your
          Birthday Bash
        </h1>
        <img
          src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg"
          class="img-fluid mb-4 mt-4 rounded-5 w-auto h-25"
          alt="img"
        ></img>
        <div class="col-lg-8 mx-auto">
          <article>
            <h2 class="mt-5 border-bottom pb-2 mb-4">
              How to Pick <em>Your</em> Perfect Theme
            </h2>
            <p>
              Feeling inspired but not sure which to choose? Ask yourself these
              questions:
            </p>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">
                <strong>Who is it for?</strong> First and foremost, the theme
                should reflect the personality and interests of the guest of
                honour. Do they love old movies? Are they an avid hiker? Start
                there.
              </li>
              <li class="list-group-item">
                <strong>Who is coming?</strong> Consider your audience. An
                intricate murder mystery might be perfect for a group of close
                friends but might not work for a large family gathering with
                kids.
              </li>
              <li class="list-group-item">
                <strong>What's your venue?</strong> A tropical luau theme is a
                bit tricky in a small apartment in December. Make sure your
                theme works with the space, season, and logistics you have
                available.
              </li>
              <li class="list-group-item">
                <strong>What's your budget?</strong> Some themes can be done
                beautifully on a budget (like a monochrome party), while others
                might require more investment. Be realistic about what you can
                spend.
              </li>
            </ol>

            <p>
              A theme is your party's storyline. It ties everything
              together—from the invitations to the parting gifts—and creates a
              memorable, immersive experience for you and your guests. So go
              ahead, get creative, and plan a birthday bash that is uniquely{" "}
              <em>you</em>.
            </p>

            <p class="text-center text-muted fst-italic mt-5">
              Happy planning!
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BirthdayThemes;
