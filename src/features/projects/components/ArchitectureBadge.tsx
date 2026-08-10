import { Badge } from "@/components/ui/Badge";

interface ArchitectureBadgeProps {
  architecture: string;
}

/** Badge dedicado a resaltar el patrón arquitectónico de una app (MVVM, Feature-First, etc.). */
export function ArchitectureBadge({ architecture }: ArchitectureBadgeProps) {
  return <Badge variant="architecture">🏗 {architecture}</Badge>;
}
