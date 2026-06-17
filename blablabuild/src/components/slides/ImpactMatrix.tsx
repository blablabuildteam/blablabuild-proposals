"use client";

import { Caveat } from "next/font/google";
import { useDeckNavigation } from "@/components/DeckNavigation";
import type { ImpactMatrixData } from "@/lib/proposals/types";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

type PostIt = ImpactMatrixData["postIts"][number];

function PostItNote({ id, label, x, y, rotation = 0 }: PostIt) {
  const { openWorkflow } = useDeckNavigation();

  return (
    <div
      className="group/postit absolute z-10 w-[clamp(4.5rem,18%,7.5rem)] hover:z-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      <button
        type="button"
        onClick={() => openWorkflow(id)}
        aria-label={`Open ${id}: ${label}`}
        className="w-full rounded-sm bg-[var(--brand-accent)] px-2 py-1.5 text-left shadow-[2px_3px_8px_rgba(0,0,0,0.18)] transition duration-150 ease-out hover:-translate-y-0.5 hover:scale-[1.06] hover:bg-[var(--brand-accent-hover)] hover:shadow-[3px_5px_14px_rgba(0,0,0,0.24)] active:scale-[1.02] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] sm:px-2.5 sm:py-2"
      >
        <p className="text-[9px] leading-tight font-bold text-[#1a1a1a] sm:text-[10px]">
          <span className="font-mono">{id}:</span> {label}
        </p>
      </button>
    </div>
  );
}

export function ImpactMatrix({ data }: { data: ImpactMatrixData }) {
  const { quadrants, postIts } = data;

  return (
    <div className="w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F0F0F0] sm:aspect-[16/11]">
        {/* Quadrant backgrounds */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div className="bg-[#F5F5F5]" />
          <div className="bg-[#F2F2F2]" />
          <div className="bg-[#F2F2F2]" />
          <div className="bg-[#F0F0F0]" />
        </div>

        {/* Axes */}
        <div className="absolute top-1/2 right-0 left-0 z-[1] h-[2px] -translate-y-1/2 bg-[#1a1a1a]" />
        <div className="absolute top-0 bottom-0 left-1/2 z-[1] w-[2px] -translate-x-1/2 bg-[#1a1a1a]" />

        {/* Quadrant labels */}
        <p
          className={`${caveat.className} absolute top-[18%] left-[22%] z-[2] -translate-x-1/2 -translate-y-1/2 text-lg text-[#333] sm:text-2xl md:text-3xl`}
        >
          {quadrants.quickWins}
        </p>
        <p
          className={`${caveat.className} absolute top-[18%] left-[72%] z-[2] -translate-x-1/2 -translate-y-1/2 text-lg text-[#333] sm:text-2xl md:text-3xl`}
        >
          {quadrants.bigBets}
        </p>
        <p
          className={`${caveat.className} absolute top-[72%] left-[22%] z-[2] -translate-x-1/2 -translate-y-1/2 text-lg text-[#333] sm:text-2xl md:text-3xl`}
        >
          {quadrants.incremental}
        </p>
        <p
          className={`${caveat.className} absolute top-[72%] left-[72%] z-[2] -translate-x-1/2 -translate-y-1/2 text-lg text-[#333] sm:text-2xl md:text-3xl`}
        >
          {quadrants.moneySinks}
        </p>

        {/* Post-its */}
        {postIts.map((note) => (
          <PostItNote key={`${note.id}-${note.label}`} {...note} />
        ))}

        {/* Axis hints */}
        <span className="absolute bottom-1.5 left-1/2 z-[2] -translate-x-1/2 text-[9px] font-medium tracking-wide text-[#666] uppercase sm:text-[10px]">
          {data.axisX.high}
        </span>
        <span className="absolute top-1/2 left-1.5 z-[2] -translate-y-1/2 -rotate-90 text-[9px] font-medium tracking-wide text-[#666] uppercase sm:text-[10px]">
          {data.axisY.high}
        </span>
      </div>

      {data.caption && (
        <p className="mt-2 text-center text-xs text-[var(--brand-muted)] sm:text-sm">
          {data.caption}
        </p>
      )}
    </div>
  );
}
