import { Link, useLocation } from "react-router-dom";
import { BookOpenIcon, LayoutDashboardIcon, CodeIcon } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar({ onCreateSession }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-base-200/95 via-base-100/95 to-base-200/95 backdrop-blur-xl border-b border-primary/10 sticky top-0 z-50 shadow-xl shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link
            to="/"
            className="group flex items-center gap-3 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <img src="/logo.png" alt="Next-Round Logo" className="size-12 object-contain relative z-10" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-lg bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wide">
                Next-Round
              </span>
              <span className="text-[10px] text-base-content/50 font-medium tracking-wider uppercase">
                Clear to the next round
              </span>
            </div>
          </Link>

          {/* NAV LINKS */}
          <div className="flex items-center gap-2">
            {/* CREATE SESSION BUTTON */}
            <button
              onClick={onCreateSession}
              className="group relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 bg-yellow-500 text-yellow-950 shadow-lg shadow-yellow-500/30 hover:bg-yellow-400 hover:shadow-yellow-500/50"
            >
              <div className="flex items-center gap-2">
                <BookOpenIcon className="size-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="hidden sm:inline">Session+</span>
              </div>
            </button>

            {/* DASHBOARD PAGE LINK */}
            <Link
              to="/dashboard"
              className={`group relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300
                ${
                  isActive("/dashboard")
                    ? "bg-secondary text-secondary-content shadow-lg shadow-secondary/25"
                    : "hover:bg-base-300/80 text-base-content/70 hover:text-base-content"
                }`}
            >
              <div className="flex items-center gap-2">
                <LayoutDashboardIcon className={`size-4 transition-transform duration-300 ${!isActive("/dashboard") && "group-hover:scale-110"}`} />
                <span className="hidden sm:inline">Dashboard</span>
              </div>
              {!isActive("/dashboard") && (
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </Link>

            {/* DIVIDER */}
            <div className="w-px h-6 bg-base-content/10 mx-2" />

            {/* USER BUTTON */}
            <div className="flex items-center">
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9 ring-2 ring-primary/20 hover:ring-primary/40 transition-all"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
