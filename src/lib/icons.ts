import {
  Building2,
  Droplets,
  Factory,
  Flame,
  Landmark,
  Leaf,
  Lightbulb,
  Server,
  Settings2,
  Shield,
  Target,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  Building2,
  Droplets,
  Factory,
  Flame,
  Landmark,
  Leaf,
  Lightbulb,
  Server,
  Settings2,
  Shield,
  Target,
  Zap,
}

export function getLucideIcon(name?: string): LucideIcon {
  if (!name) return Building2
  return ICON_MAP[name] ?? Building2
}
