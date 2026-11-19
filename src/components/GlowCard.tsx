"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode, TouchEvent, useRef } from "react";

export default function GlowCard({
  children,
  badge,
  className = "",
}: {
  children: ReactNode;
  badge?: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 220,
    damping: 22,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  function handleTouchMove(e: TouchEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    const touch = e.touches[0];
    if (!rect || !touch) return;
    x.set((touch.clientX - rect.left) / rect.width - 0.5);
    y.set((touch.clientY - rect.top) / rect.height - 0.5);
  }

  function handleTouchEnd() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className={`relative mx-auto w-full sm:max-w-md ${className}`}
      style={{ perspective: 1200 }}
    >
      <div
        aria-hidden
        className="animate-spin-slower absolute -inset-3 -z-10 rounded-[2.5rem] opacity-60 blur-xl"
        style={{
          background:
            "conic-gradient(from 0deg, var(--accent), transparent 30%, transparent 70%, var(--accent))",
        }}
      />
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border-subtle shadow-2xl shadow-black/40"
      >
        {children}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </motion.div>
      {badge}
    </div>
  );
}
