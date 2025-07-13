import SidebarWrapper from "../components/SidebarWrapper"; // ✅ use the new reusable wrapper

// Assets
import soloImg from "../assets/solo-image.png";
import friendsImg from "../assets/friends-image.png";
import familyImg from "../assets/family-image.png";

export default function PlanPage() {
  return (
    <SidebarWrapper>
      <div className="min-h-screen px-4 py-6 flex flex-col items-center">
        <h1 className="text-xl font-josefin font-bold uppercase tracking-wider text-center mb-1">
          <span className="text-burnt">Plan</span> Your Hike
        </h1>
        <p className="text-sm text-gray-700 mb-6 text-center">
          What kind of hike are you planning for?
        </p>

        {/* Responsive Layout */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-4 md:justify-center md:items-start w-full max-w-6xl">
          {/* Solo Hike */}
          <div className="flex-1 max-w-sm mx-auto md:mx-0 rounded-lg overflow-hidden shadow-md cursor-pointer">
            <img src={soloImg} alt="Solo Hike" className="w-full object-cover" />
            <p className="text-center mt-2 text-sm">Solo Hike</p>
          </div>

          {/* Friends Hike */}
          <div className="flex-1 max-w-sm mx-auto md:mx-0 rounded-lg overflow-hidden shadow-md cursor-pointer">
            <img src={friendsImg} alt="Hike with Friends" className="w-full object-cover" />
            <p className="text-center mt-2 text-sm">Hike with Friends</p>
          </div>

          {/* Family Hike */}
          <div className="flex-1 max-w-sm mx-auto md:mx-0 rounded-lg overflow-hidden shadow-md cursor-pointer">
            <img src={familyImg} alt="Hike with Family" className="w-full object-cover" />
            <p className="text-center mt-2 text-sm">Hike with Family</p>
          </div>
        </div>
      </div>
    </SidebarWrapper>
  );
}
