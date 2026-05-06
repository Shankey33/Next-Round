import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  Code2Icon,
  PlayIcon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
  BrainIcon,
  RocketIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-base-100/80 backdrop-blur-xl border-b border-base-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="size-12 object-contain" />
              <div className="hidden sm:block">
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Next-Round
                </span>
              </div>
            </Link>

            {/* NAV LINKS */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-base-content/70 hover:text-primary transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-base-content/70 hover:text-primary transition-colors text-sm font-medium">
                How It Works
              </a>
            </div>

            {/* AUTH BTN */}
            <SignInButton mode="modal">
              <button className="btn btn-primary btn-sm gap-2">
                Get Started
                <ArrowRightIcon className="size-4" />
              </button>
            </SignInButton>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-70 mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] opacity-70 mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto relative flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left backdrop-blur-sm rounded-3xl p-4 sm:p-8 animate-[fade-in_1s_ease-out]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-base-100/80 border border-primary/20 shadow-xl shadow-primary/10 text-primary text-sm font-extibold mb-8 backdrop-blur-md transform hover:scale-105 transition-all animate-[slide-down_0.5s_ease-out]">
              <SparklesIcon className="size-5 animate-pulse text-warning" />
              <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Power up your prep</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1] animate-[slide-right_0.7s_ease-out]">
              Level Up Your 
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent transform hover:scale-[1.02] transition-transform cursor-default">
                Engineering Career
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-base-content/80 mb-10 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-[slide-up_0.9s_ease-out]">
              Master technical interviews through immersive live sessions. Pair with top peers, write code, and conquer challenges together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16 animate-[fade-in_1.1s_ease-out]">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg gap-3 shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1 px-8 rounded-full">
                  <PlayIcon className="size-6 animate-bounce" />
                  <span className="text-lg">Start Journey</span>
                </button>
              </SignInButton>
              <a href="#how-it-works" className="btn btn-outline btn-lg gap-3 bg-base-100/50 backdrop-blur-md hover:bg-base-200 transition-all hover:-translate-y-1 px-8 rounded-full border-2 border-base-content/10">
                <span className="text-lg">Explore Platform</span>
                <ArrowRightIcon className="size-5 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-base-content/70 font-medium bg-base-100/40 py-4 px-6 rounded-2xl backdrop-blur-sm border border-base-content/5 animate-[fade-in_1.3s_ease-out]">
              <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default transform hover:scale-105 duration-200">
                <CheckCircleIcon className="size-5 text-success" />
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default transform hover:scale-105 duration-200">
                <CheckCircleIcon className="size-5 text-success" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default transform hover:scale-105 duration-200">
                <CheckCircleIcon className="size-5 text-success" />
                <span>Pair Instantly</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Preview - Moved to Side/Top & Animated */}
          <div className="flex-1 w-full relative transform hover:scale-[1.02] transition-transform duration-500 animate-[fade-in-up_1s_ease-out]">
            <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-2xl -z-10 animate-pulse"></div>
            <div className="bg-base-200 rounded-[2rem] border border-base-300 shadow-2xl shadow-primary/20 overflow-hidden">
              <div className="bg-base-300 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="size-3 rounded-full bg-error cursor-pointer hover:opacity-80"></div>
                  <div className="size-3 rounded-full bg-warning cursor-pointer hover:opacity-80"></div>
                  <div className="size-3 rounded-full bg-success cursor-pointer hover:opacity-80"></div>
                </div>
                <span className="text-xs text-base-content/50 ml-2 font-mono">next-round.dev</span>
              </div>
              <video 
                src="/hero-video.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-base-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need to prepare
            </h2>
            <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
              All the tools you need to practice and ace your technical interviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <VideoIcon className="size-6 text-primary" />
                </div>
                <h3 className="card-title text-lg">HD Video Calls</h3>
                <p className="text-base-content/70 text-sm">
                  Crystal clear video and audio for seamless face-to-face interviews
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="size-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Code2Icon className="size-6 text-secondary" />
                </div>
                <h3 className="card-title text-lg">Live Code Editor</h3>
                <p className="text-base-content/70 text-sm">
                  Real-time collaborative coding with syntax highlighting
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="size-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <ZapIcon className="size-6 text-accent" />
                </div>
                <h3 className="card-title text-lg">Instant Code Execution</h3>
                <p className="text-base-content/70 text-sm">
                  Run your code instantly and see results in real-time
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="size-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                  <BrainIcon className="size-6 text-success" />
                </div>
                <h3 className="card-title text-lg">Curated Problems</h3>
                <p className="text-base-content/70 text-sm">
                  Practice with real interview questions from top companies
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="size-12 rounded-xl bg-warning/10 flex items-center justify-center mb-4">
                  <UsersIcon className="size-6 text-warning" />
                </div>
                <h3 className="card-title text-lg">Peer Matching</h3>
                <p className="text-base-content/70 text-sm">
                  Connect with other developers to practice together
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="size-12 rounded-xl bg-info/10 flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="size-6 text-info" />
                </div>
                <h3 className="card-title text-lg">Multiple Languages</h3>
                <p className="text-base-content/70 text-sm">
                  Support for JavaScript, Python, Java, C++, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How it works
            </h2>
            <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
              Get started in minutes and begin practicing for your interviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create a Session</h3>
              <p className="text-base-content/70">
                Sign up and create a new practice session. Choose a problem and difficulty level.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="size-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Invite a Peer</h3>
              <p className="text-base-content/70">
                Share your session link with a friend or get matched with another developer.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Practice Together</h3>
              <p className="text-base-content/70">
                Code together in real-time with video chat and collaborative editing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 sm:p-12 text-center text-primary-content">
            <RocketIcon className="size-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to ace your interviews?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Join thousands of developers who are practicing and improving their coding skills together.
            </p>
            <SignInButton mode="modal">
              <button className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none shadow-lg">
                Get Started for Free
                <ArrowRightIcon className="size-5" />
              </button>
            </SignInButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-base-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="size-8" />
            <span className="font-semibold">Next-Round</span>
          </div>
          <p className="text-base-content/50 text-sm">
            © {new Date().getFullYear()} Next-Round. Built for developers, by developers.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
