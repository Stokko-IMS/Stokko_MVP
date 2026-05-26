import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-800 to-slate-700 px-4 py-14 text-white md:px-8 md:py-20"
    >
      <div className="absolute left-[-10%] top-[-20%] h-[34rem] w-[34rem] rounded-full bg-amber/15 blur-3xl" />

      <div className="absolute bottom-[-20%] right-[-10%] h-[34rem] w-[34rem] rounded-full bg-sky-500/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-amber">
            Enterprise Inventory Management
          </p>

          <h1 className="mt-3 text-2xl font-bold md:text-3xl">Stokko IMS</h1>

          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Inventory management made simple.
          </h2>

          <p className="mt-4 max-w-xl text-slate-300">
            Eliminate the chaos of manual tracking. Stokko provides precise,
            industrial-grade oversight for modern retailers and warehouse teams.
          </p>

          <Link to="/register" className="btn-primary mt-6">
            Get Started for Free
          </Link>
        </div>

        <div className="grid gap-3">
          <div className="rounded-stokko border border-white/40 bg-slate-200 p-4 shadow-2xl shadow-black/20">
            <p className="text-sm text-slate-600">Accuracy Rate</p>
            <h3 className="metric-value">99.9%</h3>
          </div>

          <div className="rounded-stokko border border-white/40 bg-slate-200 p-4 shadow-2xl shadow-black/20">
            <p className="text-sm text-slate-600">Live Monitoring</p>
            <h3 className="metric-value">24/7</h3>
          </div>

          <div className="rounded-stokko border border-white/40 bg-slate-200 p-4 shadow-2xl shadow-black/20">
            <p className="text-sm text-slate-600">Average Savings</p>
            <h3 className="metric-value">$30/mo</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
