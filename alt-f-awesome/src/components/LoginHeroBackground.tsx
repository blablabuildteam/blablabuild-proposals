"use client";

import { useEffect, useRef } from "react";

const BAYER_MATRIX = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

export function LoginHeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let frameId = 0;

    const processFrame = () => {
      if (video.readyState >= 2) {
        const scale = 0.5;
        canvas.width = video.videoWidth * scale;
        canvas.height = video.videoHeight * scale;

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let y = 0; y < canvas.height; y++) {
          for (let x = 0; x < canvas.width; x++) {
            const i = (y * canvas.width + x) * 4;
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            let luminance = 0.299 * r + 0.587 * g + 0.114 * b;
            luminance = (luminance / 255) ** 2.2 * 255 * 0.6;

            const bayerValue = BAYER_MATRIX[y % 4][x % 4];
            const threshold = (bayerValue / 15) * 255;

            let newR: number;
            let newG: number;
            let newB: number;

            if (luminance < threshold * 0.3) {
              newR = newG = newB = 0;
            } else if (luminance < threshold * 0.7) {
              newR = 255;
              newG = 255;
              newB = 0;
            } else {
              newR = newG = newB = 255;
            }

            data[i] = newR;
            data[i + 1] = newG;
            data[i + 2] = newB;
          }
        }

        ctx.putImageData(imageData, 0, 0);
      }

      frameId = requestAnimationFrame(processFrame);
    };

    const onLoaded = () => processFrame();
    video.addEventListener("loadeddata", onLoaded);
    if (video.readyState >= 2) processFrame();

    return () => {
      video.removeEventListener("loadeddata", onLoaded);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute opacity-0"
        crossOrigin="anonymous"
        onLoadedData={() => {
          if (videoRef.current) videoRef.current.playbackRate = 0.5;
        }}
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          imageRendering: "pixelated",
          filter: "contrast(1.5) brightness(0.8)",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="dithered-conic animate-float1 absolute top-[15%] left-[5%] h-32 w-32 opacity-40" />
        <div className="dithered-diagonal animate-float2 absolute top-[40%] right-[10%] h-48 w-24 opacity-35" />
        <div className="dithered-vertical animate-rotate absolute top-[25%] right-[20%] h-16 w-40 opacity-30" />
        <div className="dithered-dots animate-pulse2 absolute top-[60%] left-[15%] h-48 w-48 opacity-25" />
        <div className="dithered-horizontal animate-slide absolute top-[5%] right-[25%] h-20 w-56 opacity-35" />
        <div className="dithered-conic-simple animate-spin-custom absolute top-[70%] right-[5%] h-20 w-20 opacity-40" />
        <div className="dithered-diagonal-complex animate-wave absolute top-[80%] left-[40%] h-12 w-36 opacity-30" />
        <div
          className="animate-blink absolute top-[20%] left-[75%] h-6 w-6 bg-[var(--brand-primary)] opacity-70"
          style={{ imageRendering: "pixelated" }}
        />
        <div
          className="animate-blink-delay-1 absolute top-[85%] left-[80%] h-4 w-4 bg-[var(--brand-accent)] opacity-70"
          style={{ imageRendering: "pixelated" }}
        />
        <div className="dithered-complex animate-morph absolute top-[50%] left-[60%] h-28 w-28 opacity-25" />
        <div className="dithered-stripes absolute top-8 left-4 h-16 w-48 opacity-60" />
        <div className="absolute top-32 left-4 h-8 w-8 bg-[var(--brand-primary)] opacity-70" />
        <div className="dithered-diagonal-yellow-purple absolute bottom-32 left-4 h-48 w-24 opacity-60" />
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.8) 50%, #121212 100%)",
        }}
      />
    </div>
  );
}
