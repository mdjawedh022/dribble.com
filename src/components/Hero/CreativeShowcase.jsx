import React from "react";
import "./CreativeShowcase.css";
import { GoHeart } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { MdSaveAlt } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";

const CreativeShowcase = () => {

   const items = [
     {
       image:
         "https://cdn.dribbble.com/userupload/17182960/file/original-5d5497d4d97b97553c13d234ed89e2f6.png?format=webp&resize=200x150&vertical=center ",
       title: "Illustration",

     },
     {
       image:
         "https://cdn.dribbble.com/userupload/17059756/file/original-cabc1f3c118a87e424bc97a8bc5f5266.jpg?crop=215x0-2542x1745&format=webp&resize=200x150&vertical=center",
       title: "Branding",
     },
     {
       image:
         "https://cdn.dribbble.com/userupload/17052020/file/original-9eef05e33b21517f04f5151143f4539b.jpg?crop=0x0-5000x3750&format=webp&resize=200x150&vertical=center",
       title: "Print",
     },
     {
       image:
         "https://cdn.dribbble.com/userupload/17388038/file/still-d167229decc1b12695c9988cdbde62b1.png?format=webp&resize=200x150&vertical=center",
       title: "Animation",
     },
   ];

  return (
    <div className="showcase-container">
      <div className="showcase-icon">
        <div className="action-icon-1">
          <GoHeart />
        </div>
        <div className="action-icon-1">
          <FaRegBookmark />
        </div>
        <div className="action-icon-1">
          <MdSaveAlt />
        </div>
        <div className="action-icon-1">
          <FiMessageCircle />
        </div>
        <div className="action-icon-1">
          <AiOutlineInfoCircle />
        </div>
      </div>
      <header className="showcase-header">
        <div className="header-line"></div>
        <div className="showcase-logo-div">
          <img
            src="https://cdn.dribbble.com/users/699467/avatars/normal/4b000eb73d1e7c7b2a5ef42e8d55e9e5.png?1487213160"
            alt="Creative Logo"
            className="showcase-logo"
          />
        </div>
        <div className="header-line"></div>
      </header>
      <section className="showcase-main">
        <h1 className="main-title">Awsmd</h1>
        <p className="main-description">
          - We Design Products, Interfaces, and Brands
        </p>
        <button className="cta-button">
          <span className="cta-text">Get in touch</span>
        </button>
      </section>
      <footer className="showcase-footer">
        <p className="footer-link-left">More by Awsmd</p>
        <p className="footer-link-right">View profile</p>
      </footer>

      <div className="showcase-grid">
        {items.map((item, index) => (
          <div key={index} className="marquee-item">
            <div className="marquee-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="showcase-pop-div">
              <p className="marquee-title">{item.title}</p>
              <div className="icon-div">
                <div className="action-icon-2">
                  <GoHeart />
                </div>
                <div className="action-icon-2">
                  <FaRegBookmark />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreativeShowcase;
