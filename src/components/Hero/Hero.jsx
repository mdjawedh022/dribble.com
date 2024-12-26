import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import "./Hero.css";

const HeroSection = () => {
  return (
    <main className="hero-section">
      <div className="hero-heading">
        <h1> Landing Page for AI hardware provider</h1>
      </div>
      <div className="hero-content">
        <div className="hero-profile">
          <div className="profile-image">
            <img
              src="https://cdn.dribbble.com/users/699467/avatars/normal/4b000eb73d1e7c7b2a5ef42e8d55e9e5.png?1487213160"
              alt="Profile"
            />
          </div>
          <div className="profile-details">
            <h3>Awsmd</h3>
            <p>
              Available for work <span>Follow</span>
            </p>
          </div>
        </div>
        <div className="hero-actions">
          <div className="action-icon">
            <GoHeart />
          </div>
          <div className="action-icon">
            <FaRegBookmark />
          </div>
          <button className="contact-button">
            <span className="contact-text">Get in touch</span>
            <TfiEmail className="contact-icon" />
          </button>
        </div>
      </div>
      <div className="hero-footer">
        <h1>We're open for new projects! | Bring your ideas to life 👇</h1>
        <p>www.awsmd.com | info@awsmd.com | Telegram</p>
      </div>
      <div className="hero-video-container">
        <video
          src="https://cdn.dribbble.com/userupload/14934639/file/original-69ac08ca93a2b7971e5a0335d21380e8.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        ></video>
      </div>
    </main>
  );
};

export default HeroSection;
