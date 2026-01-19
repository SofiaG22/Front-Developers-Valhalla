// Tech Icons using react-icons (Simple Icons)
// Only using icons that are confirmed to exist in react-icons/si
import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiVuedotjs,
  SiAngular,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGooglecloud,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiJenkins,
  SiTerraform,
  SiGo,
  SiDotnet,
  SiPhp,
  SiLaravel,
  SiDjango,
  SiFastapi,
} from "react-icons/si";

// Map technology names to their icons
// Only using icons that are confirmed to exist
const iconMap: Record<string, { icon: IconType | null; color: string; fallback?: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Python: { icon: SiPython, color: "#3776AB" },
  "Vue.js": { icon: SiVuedotjs, color: "#4FC08D" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  Flutter: { icon: SiFlutter, color: "#02569B" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  Swift: { icon: SiSwift, color: "#FA7343" },
  Kotlin: { icon: SiKotlin, color: "#7F52FF" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  AWS: { icon: SiAmazon, color: "#FF9900" },
  Azure: { icon: null, color: "#0078D4", fallback: "Az" }, // SiMicrosoft doesn't exist
  GCP: { icon: SiGooglecloud, color: "#4285F4" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  Git: { icon: SiGit, color: "#F05032" },
  Jenkins: { icon: SiJenkins, color: "#D24939" },
  Terraform: { icon: SiTerraform, color: "#7B42BC" },
  Go: { icon: SiGo, color: "#00ADD8" },
  ".NET": { icon: SiDotnet, color: "#512BD4" },
  Java: { icon: null, color: "#ED8B00", fallback: "Ja" }, // SiJava doesn't exist
  PHP: { icon: SiPhp, color: "#777BB4" },
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  Django: { icon: SiDjango, color: "#092E20" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
};

export const TechIcon = ({ name }: { name: string }) => {
  const tech = iconMap[name];

  if (!tech || !tech.icon) {
    // Fallback for technologies without icons or unknown technologies
    const fallbackText = tech?.fallback || name.substring(0, 2).toUpperCase();
    const bgColor = tech?.color || "#6B7280";
    
    return (
      <div 
        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        style={{ backgroundColor: bgColor }}
      >
        {fallbackText}
      </div>
    );
  }

  const IconComponent = tech.icon;

  return (
    <div 
      className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
      style={{ color: tech.color }}
    >
      <IconComponent className="w-6 h-6" />
    </div>
  );
};