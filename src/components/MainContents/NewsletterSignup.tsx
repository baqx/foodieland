import React, { useState } from 'react';
import '../../styles/MainContents/NewsletterSignup.css';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // The tobams backed dev should the handle logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Deliciousness to your inbox</h2>
        <p>Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="newsletter-images">
        <img src="/images/icons/salad.png" alt="Salad ingredients" className="ingredients" />
        <img src="/images/icons/plate.png" alt="Salad bowl" className="salad-bowl" />
      </div>
    </div>
  );
};

export default NewsletterSignup;