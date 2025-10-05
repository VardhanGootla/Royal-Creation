import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const StressFreeWedding = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "rgb(255, 102, 163)" }}
        >
          10 Tips for a Stress-Free Wedding Day
        </h1>
        <div className="prose lg:prose-xl mx-auto">
          <p>
            Your wedding day should be a joyous occasion, filled with love,
            laughter, and unforgettable moments. However, the pressure of
            planning and executing the perfect day can sometimes lead to stress.
            To help you enjoy every moment, here are our top 10 tips for a
            stress-free wedding day.
          </p>
          <article>
            <img
              src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg"
              class="img-fluid mb-4 mt-4 rounded-5 w-auto h-25"
              alt="img"
            ></img>
            <ol class="list-group mb-3">
              <li class="list-group-item">
                <strong>Plan Ahead:</strong> The more you plan in advance, the
                less you'll have to worry about on the big day. Create a
                detailed timeline and share it with your vendors, wedding party,
                and family.
              </li>
              <li class="list-group-item">
                <strong>Hire a Wedding Coordinator:</strong> A day-of
                coordinator can be a lifesaver. They'll handle all the
                logistics, so you can relax and enjoy the celebration.
              </li>
              <li class="list-group-item">
                <strong>Get a Good Night's Sleep:</strong> Don't underestimate
                the power of a good night's rest. You'll feel more refreshed and
                ready to take on the day.
              </li>
              <li class="list-group-item">
                <strong>Eat a Healthy Breakfast:</strong> It's a long day, and
                you'll need your energy. Start with a nutritious breakfast to
                keep you going.
              </li>
              <li class="list-group-item">
                <strong>Delegate Tasks:</strong> You don't have to do everything
                yourself. Assign small tasks to your bridesmaids, groomsmen, or
                family members.
              </li>
              <li class="list-group-item">
                <strong>Trust Your Vendors:</strong> You hired them for a
                reason. Trust in their expertise and let them do their jobs.
              </li>
              <li class="list-group-item">
                <strong>Take a Moment for Yourselves:</strong> Sneak away with
                your new spouse for a few quiet moments alone. It's a great way
                to reconnect and soak it all in.
              </li>
              <li class="list-group-item">
                <strong>Don't Sweat the Small Stuff:</strong> Things may not go
                exactly as planned, and that's okay. Focus on the bigger picture
                and don't let minor hiccups ruin your day.
              </li>
              <li class="list-group-item">
                <strong>Stay Hydrated:</strong> With all the excitement, it's
                easy to forget to drink water. Keep a water bottle handy to stay
                hydrated throughout the day.
              </li>
              <li class="list-group-item">
                <strong>Be Present:</strong> Above all, remember to be present
                and enjoy the moment. Your wedding day will fly by, so savor
                every second.
              </li>
            </ol>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StressFreeWedding;
