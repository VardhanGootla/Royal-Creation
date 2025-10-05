import React from 'react';
import { useLocation, Link } from 'react-router-dom';

// --- Reusing the same theme styles for consistency ---
const componentStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  :root {
    --theme-color: rgb(255, 102, 163);
    --background-color: #fdf2f7;
    --card-background: #ffffff;
    --text-color: #333;
    --border-color: #eee;
    --light-text: #777;
  }
  .details-container { font-family: 'Poppins', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: var(--background-color); padding: 2rem; }
  .details-card { background-color: var(--card-background); padding: 2.5rem 3rem; border-radius: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07); width: 100%; max-width: 800px; }
  .details-title { color: var(--theme-color); font-size: 2.5rem; font-weight: 700; text-align: center; margin-bottom: 0.5rem; }
  .details-subtitle { text-align: center; color: var(--light-text); margin-bottom: 2.5rem; }
  .section { margin-bottom: 2rem; }
  .section-title { font-size: 1.25rem; font-weight: 600; color: var(--text-color); margin-bottom: 1.5rem; border-left: 4px solid var(--theme-color); padding-left: 0.75rem; }
  .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }
  .info-item { background: #fafafa; padding: 1rem; border-radius: 10px; border: 1px solid var(--border-color); }
  .info-label { font-weight: 600; color: var(--theme-color); display: block; margin-bottom: 0.25rem; }
  .info-value { color: var(--text-color); }
  .options-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
  .option-item { display: flex; align-items: center; background: #fafafa; padding: 0.75rem 1rem; border-radius: 10px; border: 1px solid var(--border-color); }
  .option-item input { margin-right: 0.75rem; width: 18px; height: 18px; accent-color: var(--theme-color); }
  .option-item label { font-weight: 500; }
  .no-data { text-align: center; }
  .back-link { color: var(--theme-color); font-weight: 600; text-decoration: none; }
`;

// --- Define the options for each event type ---
const eventOptions = {
    'Wedding': [
        'Floral Arrangements', 'Table Centerpieces', 'Live Band', 'DJ Service', 'Photography & Videography', 'Catering Service'
    ],
    'Birthday Party': [
        'Themed Decorations', 'Birthday Cake', 'Entertainer (Magician/Clown)', 'Bouncy Castle', 'Games & Activities', 'Goodie Bags'
    ],
    'Engagement': [
        'Romantic Decorations', 'Champagne Toast', 'Customized Cake', 'Photographer', 'Guest Book', 'Background Music'
    ],
    'Anniversary': [
        'Elegant Table Settings', 'Custom Menu', 'Live Music (Violinist/Pianist)', 'Memory Lane Photo Display', 'Personalized Gift', 'Couple\'s Dance'
    ],
    'Corporate Meeting': [
        'Projector & Screen', 'Audio/Visual Equipment', 'Whiteboard & Markers', 'Catered Lunch & Coffee Breaks', 'Notepads & Pens', 'High-Speed Wi-Fi'
    ]
};

const EventDetails = () => {
  const location = useLocation();
  // Safely access the submitted data from the route's state
  const { submission } = location.state || {};

  // If the user lands on this page directly without submitting, show a message.
  if (!submission) {
    return (
      <>
        <style>{componentStyles}</style>
        <div className="details-container">
            <div className="details-card">
                <h1 className="details-title">Oops!</h1>
                <p className="no-data">
                    No event data found. Please go back to the booking form. <br/>
                    <Link to="/" className="back-link">Go to Booking</Link>
                </p>
            </div>
        </div>
      </>
    );
  }

  const options = eventOptions[submission.event] || [];

  return (
    <>
      <style>{componentStyles}</style>
      <div className="details-container">
        <div className="details-card">
          <h1 className="details-title">Quotation Details</h1>
          <p className="details-subtitle">Thank you, {submission.name}! Please review your details and select your preferences.</p>

          <div className="section">
            <h2 className="section-title">Your Information</h2>
            <div className="info-grid">
              <div className="info-item"><span className="info-label">Event Type</span> <span className="info-value">{submission.event}</span></div>
              <div className="info-item"><span className="info-label">Date</span> <span className="info-value">{submission.date}</span></div>
              <div className="info-item"><span className="info-label">Email</span> <span className="info-value">{submission.email}</span></div>
              <div className="info-item"><span className="info-label">Phone</span> <span className="info-value">{submission.phone}</span></div>
            </div>
          </div>

          <div className="section">
            <h2 className="section-title">Select Your Add-ons</h2>
            <div className="options-grid">
                {options.map(option => (
                    <div className="option-item" key={option}>
                        <input type="checkbox" id={option} name={option} />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;