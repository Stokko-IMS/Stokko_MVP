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

    alert("Thank you! Message sent!");

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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-800 to-slate-700 px-4 py-10 text-white">
      <form
        onSubmit={handleSubmit}
        className="mx-auto grid max-w-xl gap-4 rounded-stokko border border-slate-700 bg-white p-5 text-deep shadow-xl md:p-6"
      >
        <div>
          <h1>Contact Us</h1>
          <p className="mt-1 text-sm text-slate-600">
            Have a question or comment? Send us a quick message.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label htmlFor="firstName">
            First Name
            <input
              id="firstName"
              name="fname"
              type="text"
              value={formData.fname}
              onChange={handleChange}
              placeholder="Joe"
            />
          </label>

          <label htmlFor="lastName">
            Last Name
            <input
              id="lastName"
              name="lname"
              type="text"
              value={formData.lname}
              onChange={handleChange}
              placeholder="Schmo"
            />
          </label>
        </div>

        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Bananas@sbcglobal.com"
          />
        </label>

        <label htmlFor="comment">
          Question/Comment
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Great job on your capstones everyone, be proud!"
            rows="5"
          />
        </label>

        <button type="submit" className="btn-primary w-full">
          Submit
        </button>
      </form>
    </main>
  );
}
