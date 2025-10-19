import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/AboutPage'; // Correct path for AboutPage
import ServicesPage from './ServicesPage'; // Correct path for ServicesPage
import ReviewsPage from './landing_page/ReviewsPage';
import BlogPage from './landing_page/BlogPage';
import ContactUs from './landing_page/home/ContactUs';
import StressFreeWedding from './landing_page/weddingDiaries/blogs/StressFreeWedding';
import BirthdayThemes from './landing_page/weddingDiaries/blogs/BirthdayThemes';
import CorporateEvents from './landing_page/weddingDiaries/blogs/CorporateEvents';
import VenueSelectionGuide from './landing_page/weddingDiaries/blogs/VenueSelectionGuide';
import EventBudgeting from './landing_page/weddingDiaries/blogs/EventBudgeting';
import DecorTrends from './landing_page/weddingDiaries/blogs/DecorTrends';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'; 
import AdminDashboard from './Admin/AdminDashboard';
import WeddingCategoriesPage from './landing_page/weddingDiaries/WeddingCategoriesPage';
import Meetings from './landing_page/weddingDiaries/Meetings';
import BirthdayStories from './landing_page/weddingDiaries/BirthdayStories';
import Gujarati from './landing_page/weddingDiaries/WeddingsByCultur/Gujarati';
import Maharashtrian from './landing_page/weddingDiaries/WeddingsByCultur/Maharashtrian';
import Marwadi from './landing_page/weddingDiaries/WeddingsByCultur/Marwadi';
import Punjabi from './landing_page/weddingDiaries/WeddingsByCultur/Punjabi';
import Telugu from './landing_page/weddingDiaries/WeddingsByCultur/Telugu';
import BirthdayPartiesPage from './landing_page/birthdayParties/BirthdayPartiesPage';
import KidsBirthday from './landing_page/birthdayParties/KidsBirthday';
import AdultsBirthday from './landing_page/birthdayParties/AdultsBirthday';
import ThemedBirthday from './landing_page/birthdayParties/ThemedBirthday';
import SurpriseBirthday from './landing_page/birthdayParties/SurpriseBirthday';
import EngagementPage from './landing_page/engagement/EngagementPage';
import TraditionalEngagement from './landing_page/engagement/TraditionalEngagement';
import ModernEngagement from './landing_page/engagement/ModernEngagement';
import SurpriseEngagement from './landing_page/engagement/SurpriseEngagement';
import AnniversariesPage from './landing_page/anniversaries/AnniversariesPage';
import SilverAnniversary from './landing_page/anniversaries/SilverAnniversary';
import GoldenAnniversary from './landing_page/anniversaries/GoldenAnniversary';
import MilestoneAnniversary from './landing_page/anniversaries/MilestoneAnniversary';
import CorporateEventsPage from './landing_page/corporateEvents/CorporateEventsPage';
import Conferences from './landing_page/corporateEvents/Conferences';
import ProductLaunches from './landing_page/corporateEvents/ProductLaunches';
import TeamBuilding from './landing_page/corporateEvents/TeamBuilding';
import Navbar from './landing_page/Navbar';
import BookingPage from './landing_page/BookingPage';
import Footer from './landing_page/Footer';
import { subcategoryData } from './landing_page/subcategories/subcategoryData';
import SubCategoryPage from './landing_page/subcategories/SubCategoryPage';


import { AuthProvider } from './hooks/AuthContext';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
     <AuthProvider>
    <ScrollToTop />
    <Navbar/>
    
    <main>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/stress-free-wedding" element={<StressFreeWedding />} />
      <Route path="/blog/birthday-themes" element={<BirthdayThemes />} />
      <Route path="/blog/corporate-events-ideas" element={<CorporateEvents />} />
      <Route path="/blog/venue-selection-guide" element={<VenueSelectionGuide />} />
      <Route path="/blog/event-budgeting" element={<EventBudgeting />} />
      <Route path="/blog/decor-trends" element={<DecorTrends />} />
      <Route path="/book-event" element={<ContactUs />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/details" element={<div>Details Page Placeholder</div>} />
      <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
      <Route path="/weddings" element={<WeddingCategoriesPage />} />
      <Route path="/weddings/gujarati" element={<Gujarati />} />
      <Route path="/weddings/maharashtrian" element={<Maharashtrian />} />
      <Route path="/weddings/marwadi" element={<Marwadi />} />
      <Route path="/weddings/punjabi" element={<Punjabi />} />
      <Route path="/weddings/telugu" element={<Telugu />} />
      <Route path="/birthdays" element={<BirthdayPartiesPage />} />
      <Route path="/birthdays/kids" element={<KidsBirthday />} />
      <Route path="/birthdays/adults" element={<AdultsBirthday />} />
      <Route path="/birthdays/themed" element={<ThemedBirthday />} />
      <Route path="/birthdays/surprise" element={<SurpriseBirthday />} />

      <Route path="/engagements" element={<EngagementPage />} />
      <Route path="/engagements/traditional" element={<TraditionalEngagement />} />
      <Route path="/engagements/modern" element={<ModernEngagement />} />
      <Route path="/engagements/surprise" element={<SurpriseEngagement />} />
      
      <Route path="/anniversaries" element={<AnniversariesPage />} />
      <Route path="/anniversaries/25th" element={<SilverAnniversary />} />
      <Route path="/anniversaries/50th" element={<GoldenAnniversary />} />
      <Route path="/anniversaries/milestone" element={<MilestoneAnniversary />} />
      
      <Route path="/corporate-events" element={<CorporateEventsPage />} />
      <Route path="/corporate-events/conferences" element={<Conferences />} />
      <Route path="/corporate-events/product-launches" element={<ProductLaunches />} />
      <Route path="/corporate-events/team-building" element={<TeamBuilding />} />

      {Object.keys(subcategoryData).map((path) => (
        <Route
          key={path}
          path={path}
          element={<SubCategoryPage subcategory={subcategoryData[path]} />}
        />
      ))}
    </Routes>
    </main>
    <Footer/>
   </AuthProvider>
  );
}

export default App;