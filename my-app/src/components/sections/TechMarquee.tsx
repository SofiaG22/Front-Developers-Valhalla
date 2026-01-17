"use client";

import { TechIcon } from "@/components/icons/TechIcons";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Vue.js",
  "Angular", "Flutter", "React Native", "Swift", "Kotlin", "Docker",
  "Kubernetes", "AWS", "Azure", "GCP", "GraphQL", "PostgreSQL",
  "MongoDB", "Redis", "Git", "Jenkins", "Terraform", "Go",
  ".NET", "Java", "PHP", "Laravel", "Django", "FastAPI"
];

export default function TechMarquee() {
  return (
    <section className="py-12 bg-white border-y border-gray-200 overflow-hidden relative">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div className="relative">
        <div 
          className="flex whitespace-nowrap"
          style={{
            animation: 'scroll 30s linear infinite',
          }}
        >
          {/* First set */}
          {technologies.map((tech, index) => (
            <div
              key={`first-${index}`}
              className="inline-flex items-center gap-4 mx-6 flex-shrink-0"
            >
              <TechIcon name={tech} />
              <span className="text-xl md:text-2xl font-bold text-text-muted hover:text-primary transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => (
            <div
              key={`second-${index}`}
              className="inline-flex items-center gap-4 mx-6 flex-shrink-0"
            >
              <TechIcon name={tech} />
              <span className="text-xl md:text-2xl font-bold text-text-muted hover:text-primary transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}