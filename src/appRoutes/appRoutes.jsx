import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ContactUs from '../pages/contactUs';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import HowRavueWorks from '../pages/HowitWorks';
import AnalyzePage from '../pages/AnalyzePage';
import ReviewResult from '../pages/ReviewResults';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/help" element={<HowRavueWorks/>}/>
       <Route path="/analyze" element={<AnalyzePage />} />
      <Route path="/review-result" element={<ReviewResult />} />
    </Routes>
  );
};

export default AppRoutes;
