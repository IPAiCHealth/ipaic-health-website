import {
  LayoutGrid,
  Sparkles,
  GitCommitHorizontal,
  Network,
  ShieldCheck,
  Search,
  Eye,
  ListChecks,
  Link2,
  HeartPulse,
  UserCheck,
  GitBranch,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  LayoutGrid,
  Sparkles,
  GitCommitHorizontal,
  Network,
  ShieldCheck,
  Search,
  Eye,
  ListChecks,
  Link2,
  HeartPulse,
  UserCheck,
  GitBranch,
  Workflow,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
