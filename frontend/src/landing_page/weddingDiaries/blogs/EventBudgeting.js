import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const EventBudgeting = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8" style={{ color: 'rgb(255, 102, 163)' }}>Plan wisely, spend smartly, and make your celebration unforgettable</h1>
        <div className="prose lg:prose-xl mx-auto">
          <p>
            Planning an event budget can feel overwhelming, but with strategic organization and realistic expectations, 
            you can create a financial plan that ensures your celebration is both magical and financially responsible. 
            Here's our comprehensive guide to building a practical event budget.
          </p>
          <img
          src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg"
          class="img-fluid mb-4 mt-4 rounded-5 w-auto h-25"
          alt="img"
        ></img>
          <ol className="list-group mb-3">
            <li className="list-group-item">
              <strong>Determine Your Total Budget:</strong> Start by establishing the maximum amount you're willing to spend. Be honest about what you can afford and commit to staying within this limit.
            </li>
            <li className="list-group-item">
              <strong>Identify Your Non-Negotiables:</strong> Choose your top 3 priorities (venue, catering, photography, etc.). These cornerstone elements deserve the largest portion of your budget.
            </li>
            <li className="list-group-item">
              <strong>Research Average Costs:</strong> Investigate current market rates for venues, vendors, and services in your area. This research prevents unrealistic expectations and helps with negotiations.
            </li>
            <li className="list-group-item">
              <strong>Create Detailed Categories:</strong> Break down your budget into specific categories: Venue & Rental (25-30%), Catering & Bar (30-35%), Photography & Videography (10-15%), Attire & Beauty (5-10%), Entertainment (5-10%), Decor & Flowers (5-10%), Stationery (2-3%), Transportation (2-3%), and Emergency Fund (10-15%).
            </li>
            <li className="list-group-item">
              <strong>Track Every Expense:</strong> Use digital tools like spreadsheets or budgeting apps to record all deposits, payments, and receipts. Regular updates keep you on track.
            </li>
            <li className="list-group-item">
              <strong>Negotiate with Vendors:</strong> Don't hesitate to ask for package deals, off-season discounts, or custom packages. Most vendors are willing to work within reasonable budgets.
            </li>
            <li className="list-group-item">
              <strong>Plan for Hidden Costs:</strong> Remember to include often-overlooked expenses like taxes, service charges, gratuities, delivery fees, and potential overtime charges.
            </li>
            <li className="list-group-item">
              <strong>Set Up a Payment Schedule:</strong> Coordinate deposit due dates with your income schedule to avoid financial strain. Spread major payments across multiple months when possible.
            </li>
            <li className="list-group-item">
              <strong>Review and Adjust Regularly:</strong> Revisit your budget monthly and make necessary adjustments. Be prepared to prioritize and cut non-essential items if needed.
            </li>
            <li className="list-group-item">
              <strong>Use Budgeting Tools:</strong> Leverage event planning apps, templates, or professional software designed specifically for event budgeting and management.
            </li>
          </ol>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Pro Budgeting Tips</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Always allocate 10-15% of your total budget for unexpected expenses</li>
              <li>Create a dedicated email account for event-related communications</li>
              <li>Set up a separate savings account specifically for event funds</li>
              <li>Book vendors during off-season for better rates and availability</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventBudgeting;