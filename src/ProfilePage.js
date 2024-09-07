import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="container">
      <Header />
      <ProfileSection />
      <InfoSection />
    </div>
  );
};

const Header = () => (
  <header>
    <div className="logo">
      <img src="logo2.png" alt="My Image" />
    </div>
    <nav>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
      </ul>
    </nav>
  </header>
);

const ProfileSection = () => (
  <section className="profile-section">
    <div className="profile-picture">
      <img src="profile.png" alt="Profile Picture" />
    </div>
    <button className="edit-profile-btn">Edit Profile</button>
  </section>
);

const InfoSection = () => (
  <section className="info-section">
    <InfoBox title="USER INFORMATION" fields={userFields} />
    <InfoBox title="CONTACT INFORMATION" fields={contactFields} />
    <InfoBox title="GYM INFORMATION" fields={gymFields} />
  </section>
);

const InfoBox = ({ title, fields }) => (
  <div className="info-box">
    <h2>{title} :</h2>
    <div className="info-grid">
      {fields.map(({ label, placeholder }, index) => (
        <div className="info-item" key={index}>
          <label>{label}</label>
          <input type="text" placeholder={placeholder} />
        </div>
      ))}
    </div>
  </div>
);

const userFields = [
  { label: "First Name", placeholder: "Enter The First Name" },
  { label: "Last Name", placeholder: "Enter The Last Name" },
  { label: "Email Address", placeholder: "Enter The Email address" },
  { label: "Phone No", placeholder: "Enter The Phone No" },
];

const contactFields = [
  { label: "Address", placeholder: "Enter The Address" },
  { label: "City", placeholder: "Enter The City" },
  { label: "Country", placeholder: "Enter The Country" },
  { label: "PIN", placeholder: "Enter The PIN" },
];

const gymFields = [
  { label: "Gym Timing", placeholder: "Enter The Gym Timing" },
  { label: "Weight", placeholder: "Enter The Weight" },
  { label: "Height", placeholder: "Enter The Height" },
  { label: "Training Sessions", placeholder: "Enter The Training Sessions" },
];

export default ProfilePage;
