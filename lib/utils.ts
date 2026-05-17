import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes while resolving conflicts.
 * This is the standard shadcn/ui helper — kept manually since we're not
 * running the shadcn CLI.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
