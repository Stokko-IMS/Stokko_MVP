import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="about">
      <div>
        <h1>Stokko IMS</h1>
        <h2>Inventory management made simple for you</h2>
        <p>
          Eliminate the chaos of manual tracking. Stokko provides high-precision
          industrial-grade oversight for modern retailers and warehouse teams.
        </p>
        <Link to="/register">Get Started for Free</Link>
      </div>
      <div>
        <p>99.9% Accuracy Rate</p>
        <p>24/7 Live Monitoring</p>
        <p>$30/month Less than competition on Average</p>
      </div>
    </section>
  );
}
