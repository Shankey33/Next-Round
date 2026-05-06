import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, ZapIcon } from "lucide-react";

function WelcomeSection() {
  const { user } = useUser();

  const handleSolveClick = () => {
    window.location.href = "/problems";
  }


  return (
    <div className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-6">
              <img src="/logo.png" alt="Next-Round Logo" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
              <div>
                <h1 className="text-xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Welcome, {user?.firstName || "there"}!
                </h1>
                <p className="text-sm sm:text-base text-base-content/60 mt-1">
                  Ready to start your next round of interviews? Create a session or join an existing one!
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handleSolveClick}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-green-600 rounded-xl sm:rounded-2xl transition-all duration-200 hover:opacity-90 shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-white font-bold text-base sm:text-lg">
              <ZapIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Solve</span>
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
