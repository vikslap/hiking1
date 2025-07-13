import heroImg from "../assets/splash.png";
import badgeImg from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-public text-gray-800 flex flex-col">
      {/* ── Hero Banner ───────────────────────────────────────────── */}
      <div className="relative w-full h-[280px] md:h-[340px] shrink-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Hikers at viewpoint"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Card Section (fills remaining height) ─────────────────── */}
      <div className="flex-grow flex items-center justify-center px-4 pb-8 min-h-[calc(100vh-280px)]">
        <div className="relative w-full max-w-md bg-white shadow-lg rounded-xl p-6">
          {/* Badge and Heading in same row */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-josefin font-bold text-xl tracking-widest uppercase text-gray-800">
              <span className="text-burnt">Hiking</span> Safety and Survival Techniques
            </h2>
            <img
              src={badgeImg}
              alt="Caballero badge"
              className="w-14 h-14 ml-4 shrink-0"
            />
          </div>

          {/* Intro copy */}
          <p className="text-sm text-gray-700 font-public leading-relaxed mb-6 text-center">
            Caballero County Parks invites you to explore 8,500 acres of rugged
            natural beauty with trails suited to every experience level. Plan
            ahead so your adventure is both safe and unforgettable.
          </p>

          {/* CTA Button */}
          <Link to="/plan">
            <button className="w-full bg-burnt hover:bg-burnt-dark active:bg-burnt-darker text-white font-karla text-sm px-6 py-3 rounded-full tracking-wide transition-colors">
              PLAN A HIKE
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
