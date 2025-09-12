import React from 'react';
import './HowWorks.css';

const HowWorks = () => {
  return (
    <div className="how-works-container">
      <h1>How Ravue works?</h1>
      <br />

      <div className="step">
        <div className="text-box">
          To start using our service, go to our official website. If you already have an account, simply log in with your credentials. If you're a new user, create an account to gain access to advanced review analysis features and personalized experience using our product review analysis tool.
        </div>
        <img src="assests/one.png" alt="Step 1" />
      </div>

      <div className="step">
        <div className="text-box">
          After logging in, copy the URL (link) of the product you reviewed from Amazon product page. Then paste this link into Ravue's web portal. Our system will analyze both the content of your review as well as technical and ratings associated with that product.
        </div>
        <img src="assests/two.png" alt="Step 2" />
      </div>

      <div className="step">
        <div className="text-box">
          Once you submit the product link, our AI system will automatically process and extract the key review insights. It will analyze sentiments, detect patterns, and generate feedback on e-commerce platforms.
        </div>
        <img src="assests/three.png" alt="Step 3" />
      </div>

      <div className="step">
        <div className="text-box">
          After analyzing reviews, our system assigns a reliability grade (A, B, C…) to those reviews. This makes it easier for users to distinguish between genuine and suspicious reviews, ultimately helping businesses make data-driven decisions while avoiding misleading ratings.
        </div>
        <img src="assests/four.png" alt="Step 4" />
      </div>
    </div>
  );
};

export default HowWorks;

