import { Compass, Globe, Rocket, Server, Shield, Smartphone } from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/data/site";

const ICONS = {
  smartphone: Smartphone,
  shield: Shield,
  globe: Globe,
  server: Server,
  rocket: Rocket,
  compass: Compass,
} as const;

export function ServiceIcon({ name, size = 22 }: { name: ServiceIconName; size?: number }) {
  const Icon = ICONS[name];
  return <Icon size={size} aria-hidden="true" />;
}
