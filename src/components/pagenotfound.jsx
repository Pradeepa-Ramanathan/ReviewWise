import React from 'react';
import './style.css';

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <br /><br /><br /><br />
      <img src="images/pagenotfound.png" alt="404 illustration" />
      <h1>Page Not Found</h1>
      <p>
        Oops! The product you're looking for doesn't exist or has been moved.
        Please check the URL or go back to the homepage.
      </p>
    </div>
  );
};

export default PageNotFound;
