import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo.png" alt="Next-Round Logo" className="w-24 h-24 object-contain" />
              <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Welcome, {user?.firstName || "there"}!
                Next-Round is still in development phase, please bear with us.
              </h1>
            </div>
          </div>
          <button
            onClick={onCreateSession}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl transition-all duration-200 hover:opacity-90 shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="flex items-center gap-3 text-white font-bold text-lg">
              <ZapIcon className="w-6 h-6" />
              <span>Create Session</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
