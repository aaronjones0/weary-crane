import LinkButton from "../components/LinkButton/LinkButton.tsx";
import { createTheme, PRIMARY } from "../theme/Theme.ts";

export default function Home() {
  const theme = createTheme(PRIMARY, "dark");

  return (
    <div class="max-w-screen-md mx-auto h-full pt-12 flex flex-col gap-4 items-center justify-center">
      <h1 class="text-5xl font-black" style={{ color: theme.text2 }}>
        Theme Test
      </h1>
      <div
        class="rounded-2xl p-4 w-80"
        style={{
          backgroundColor: theme.surface1,
          borderTop: `1px solid ${theme.surface1Border}`,
          boxShadow: `0px 12px 24px ${theme.shadow}${theme.shadowStrength}`,
        }}
      >
        <div class="flex flex-col gap-2">
          <div class="flex flex-row gap-2 grow">
            <div
              class="flex items-center justify-center rounded-xl grow p-2 h-24"
              style={{
                backgroundColor: theme.surface1,
                borderTop: `1px solid ${theme.surface1Border}`,
                boxShadow:
                  `0px 12px 24px ${theme.shadow}${theme.shadowStrength}`,
              }}
            >
              <p class="font-thin" style={{ color: theme.text2 }}>Surface 1</p>
            </div>
            <div
              class="flex items-center justify-center rounded-xl grow p-2 h-24"
              style={{
                backgroundColor: theme.surface2,
                borderTop: `1px solid ${theme.surface2Border}`,
                boxShadow:
                  `0px 12px 24px ${theme.shadow}${theme.shadowStrength}`,
              }}
            >
              <p class="font-thin" style={{ color: theme.text2 }}>Surface 2</p>
            </div>
          </div>
          <div class="flex flex-row gap-2 grow">
            <div
              class="flex items-center justify-center rounded-xl grow p-2 h-24"
              style={{
                backgroundColor: theme.surface3,
                borderTop: `1px solid ${theme.surface3Border}`,
                boxShadow:
                  `0px 12px 24px ${theme.shadow}${theme.shadowStrength}`,
              }}
            >
              <p class="font-thin" style={{ color: theme.text2 }}>Surface 3</p>
            </div>
            <div
              class="flex items-center justify-center rounded-xl grow p-2 h-24"
              style={{
                backgroundColor: theme.surface4,
                borderTop: `1px solid ${theme.surface4Border}`,
                boxShadow:
                  `0px 12px 24px ${theme.shadow}${theme.shadowStrength}`,
              }}
            >
              <p class="font-thin" style={{ color: theme.text2 }}>Surface 4</p>
            </div>
          </div>
          <p class="p-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
      <LinkButton href="/map">Reacher Map</LinkButton>
    </div>
  );
}
