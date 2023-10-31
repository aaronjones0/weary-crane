import { eastering, northering } from "../../logic/terrain-logic.ts";

export function MGRSCursorLabel({ x, y }: { x: number; y: number }) {
  const e = eastering(x);
  const n = northering(y);

  return (
    <div class="flex flex-row gap-2 font-mono text-stone-700">
      <p class="flex flex-row items-start">
        <span>{e.substring(0, 2)}</span>
        <span class="text-stone-400">,{e.substring(2)}m E.</span>
      </p>
      <div class="z-10 h-full w-px bg-stone-400">&nbsp;</div>
      <p class="flex flex-row">
        <span>{n.substring(0, 2)}</span>
        <span class="text-stone-400">,{n.substring(2)}m N.</span>
      </p>
    </div>
  );
}
