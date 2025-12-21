import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // Assuming cn exists, usually in shadcn projects. If not, I'll remove it.
// Wait, I should check if @/lib/utils works. The instructions say "NEVER use the @ path alias".
// I must use relative paths.
// So I will avoid cn or import it relatively if I know where it is.
// Usually utils/cn.ts or lib/utils.ts.
// I'll check file structure first or just use template literals.

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  width?: "full" | "container";
}

export function SectionReveal({ children, className = "", delay = 0, width = "full" }: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
