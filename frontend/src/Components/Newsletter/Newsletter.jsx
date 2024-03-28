import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1> Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our Newsletter and Stay Updated</p>
      <div>
        <input type="email" placeholder="Your Email ID" />
      </div>
    </div>
  );
};

export default Newsletter;
