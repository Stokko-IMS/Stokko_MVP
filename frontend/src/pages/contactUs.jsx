import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    comment: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    alert("Message sent!");

    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Us</h1>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        value={formData.fname}
        onChange={handleChange}
        placeholder="Joe"
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        value={formData.lname}
        onChange={handleChange}
        placeholder="Schmo"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Bananas@sbcglobal.com"
      />

      <label htmlFor="comment">Question/Comment</label>
      <input
        id="comment"
        name="comment"
        type="text"
        value={formData.comment}
        onChange={handleChange}
        placeholder="Great job on your capstones everyone, be proud!"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
