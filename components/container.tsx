import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    // Max-width 2xl (approx 672px) matches the narrow, focused look of the reference
    <div className={cn("mx-auto w-full max-w-2xl px-6", className)}>
      {children}
    </div>
  );
}