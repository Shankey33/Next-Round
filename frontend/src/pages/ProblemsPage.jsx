import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);

  const [filter, setFilter] = useState(""); 

  const easyProblemsCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumProblemsCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardProblemsCount = problems.filter((p) => p.difficulty === "Hard").length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-300 to-base-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Practice Problems
          </h1>
          <p className="text-base-content/70">Sharpen your coding skills with these curated problems</p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-8">
          <select 
            className="select select-bordered bg-base-100" 
            onChange={(e) => setFilter(e.target.value)}
            defaultValue=""
          >
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-3">
          {problems.filter((problem) => {
            if (!filter) return true;
            return problem.difficulty === filter;
          }).map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className={`card bg-base-100 border border-transparent hover:scale-[1.02] transition-all duration-300
                ${problem.difficulty === "Easy" 
                  ? "hover:border-success/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]" 
                  : problem.difficulty === "Medium" 
                  ? "hover:border-warning/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]" 
                  : "hover:border-error/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"}`}
            >
              <div className="card-body p-4">
                <div className="flex items-center justify-between gap-4">
                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`size-10 rounded-lg flex items-center justify-center
                      ${problem.difficulty === "Easy" ? "bg-success/10 text-success" : 
                        problem.difficulty === "Medium" ? "bg-warning/10 text-warning" : 
                        "bg-error/10 text-error"}`}
                    >
                      <Code2Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="font-semibold">{problem.title}</h2>
                        <span className={`badge badge-sm ${getDifficultyBadgeClass(problem.difficulty)}`}>
                          {problem.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-base-content/50">{problem.category}</p>
                    </div>
                  </div>
                  {/* RIGHT SIDE */}
                  <ChevronRightIcon className="size-5 text-base-content/30" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* STATS FOOTER */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card bg-base-100 border border-primary/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-shadow duration-300">
            <div className="card-body items-center p-4">
              <span className="text-xs uppercase tracking-wider text-base-content/50">Total</span>
              <span className="text-3xl font-bold text-primary">{problems.length}</span>
            </div>
          </div>
          <div className="card bg-base-100 border border-success/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-shadow duration-300">
            <div className="card-body items-center p-4">
              <span className="text-xs uppercase tracking-wider text-base-content/50">Easy</span>
              <span className="text-3xl font-bold text-success">{easyProblemsCount}</span>
            </div>
          </div>
          <div className="card bg-base-100 border border-warning/20 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-shadow duration-300">
            <div className="card-body items-center p-4">
              <span className="text-xs uppercase tracking-wider text-base-content/50">Medium</span>
              <span className="text-3xl font-bold text-warning">{mediumProblemsCount}</span>
            </div>
          </div>
          <div className="card bg-base-100 border border-error/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-shadow duration-300">
            <div className="card-body items-center p-4">
              <span className="text-xs uppercase tracking-wider text-base-content/50">Hard</span>
              <span className="text-3xl font-bold text-error">{hardProblemsCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProblemsPage;
