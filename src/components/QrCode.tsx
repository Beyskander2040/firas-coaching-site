"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function QrCode({ value, size = 160 }: { value: string; size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, value, {
      width: size,
      margin: 1,
      color: { dark: "#0b0c0e", light: "#f5f5f4" },
    });
  }, [value, size]);

  return <canvas ref={canvasRef} className="rounded-lg" />;
}
