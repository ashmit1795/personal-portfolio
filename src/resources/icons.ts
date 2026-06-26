import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  // Backend & Language Stack
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiPython,
  // Databases
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  // Frontend
  SiReact,
  SiTailwindcss,
  // Infrastructure & DevOps
  SiDocker,
  SiAmazonwebservices,
  SiNginx,
  SiLinux,
  SiGit,
  // Socials
  SiHashnode,
  SiLinktree,
} from "react-icons/si";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  // UI / Navigation
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,

  // Social Platforms
  discord: FaDiscord,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  instagram: FaInstagram,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  hashnode: SiHashnode,
  linktree: SiLinktree,

  // Languages
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,

  // Backend
  nodejs: SiNodedotjs,
  express: SiExpress,

  // Databases
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  redis: SiRedis,

  // Frontend
  react: SiReact,
  tailwindcss: SiTailwindcss,
  nextjs: SiNextdotjs,

  // Infrastructure & DevOps
  docker: SiDocker,
  aws: SiAmazonwebservices,
  nginx: SiNginx,
  linux: SiLinux,
  git: SiGit,

  // Design (kept from template)
  figma: SiFigma,
  supabase: SiSupabase,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
