import type { IconType } from "react-icons";
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiNetlify,
  SiSocketdotio,
} from "react-icons/si";
import type { TechSkillIcon } from "@/lib/content";

const icons: Record<TechSkillIcon, { Icon: IconType; color: string }> = {
  html5: { Icon: SiHtml5, color: "#E34F26" },
  css3: { Icon: SiCss, color: "#1572B6" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  react: { Icon: SiReact, color: "#61DAFB" },
  reactnative: { Icon: SiReact, color: "#61DAFB" },
  vite: { Icon: SiVite, color: "#646CFF" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  nodejs: { Icon: SiNodedotjs, color: "#339933" },
  express: { Icon: SiExpress, color: "#FFFFFF" },
  postgresql: { Icon: SiPostgresql, color: "#4169E1" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  mysql: { Icon: SiMysql, color: "#4479A1" },
  supabase: { Icon: SiSupabase, color: "#3ECF8E" },
  git: { Icon: SiGit, color: "#F05032" },
  github: { Icon: SiGithub, color: "#FFFFFF" },
  figma: { Icon: SiFigma, color: "#F24E1E" },
  vercel: { Icon: SiVercel, color: "#FFFFFF" },
  netlify: { Icon: SiNetlify, color: "#00C7B7" },
  websocket: { Icon: SiSocketdotio, color: "#FFFFFF" },
};

type Props = {
  name: TechSkillIcon;
  className?: string;
};

export function SkillIcon({ name, className = "h-10 w-10" }: Props) {
  const entry = icons[name];
  if (!entry) return null;
  const { Icon, color } = entry;
  return <Icon className={className} style={{ color }} aria-hidden />;
}
