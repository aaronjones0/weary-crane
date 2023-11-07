import hsl2hex from "hsl-to-hex";

export type SimpleHSL = { hue: number; saturation: number; brightness: number };

export type Theme = {
  text1: string;
  text2: string;
  // text1: SimpleHSL;
  // text2: SimpleHSL;
  surface1: string;
  surface1Border: string;
  surface2: string;
  surface2Border: string;
  surface3: string;
  surface3Border: string;
  surface4: string;
  surface4Border: string;
  // surface1: SimpleHSL;
  // surface2: SimpleHSL;
  // surface3: SimpleHSL;
  // surface4: SimpleHSL;
  shadow: string;
  // shadow: SimpleHSL;
  shadowStrength: number;
};

export const PALETTE = {
  stone50: "#fafaf9",
  stone100: "#f5f5f4",
  stone200: "#e7e5e4",
  stone300: "#d6d3d1",
  stone400: "#a8a29e",
  stone500: "#78716c",
  stone600: "#57534e",
  stone700: "#44403c",
  stone800: "#292524",
  stone900: "#1c1917",
  stone950: "#0c0a09",
};

export const PRIMARY: SimpleHSL = {
  hue: 32,
  saturation: 95,
  brightness: 44,
};

export function text1(primary: SimpleHSL, theme: "light" | "dark"): SimpleHSL {
  if (theme === "light") {
    return {
      hue: primary.hue,
      saturation: primary.saturation,
      brightness: 0.10,
    };
  } else {
    return {
      hue: primary.hue,
      saturation: 0.15,
      brightness: 0.85,
    };
  }
}

export function text1Hex(
  primary: SimpleHSL,
  theme: "light" | "dark",
): string {
  if (theme === "light") {
    return hsl2hex(
      primary.hue,
      primary.saturation,
      10,
    );
  } else {
    return hsl2hex(
      primary.hue,
      15,
      85,
    );
  }
}

export function text2(primary: SimpleHSL, theme: "light" | "dark"): SimpleHSL {
  if (theme === "light") {
    return {
      hue: primary.hue,
      saturation: primary.saturation * 0.30,
      brightness: primary.brightness * 0.30,
    };
  } else {
    return {
      hue: primary.hue,
      saturation: primary.saturation * 0.05,
      brightness: primary.brightness * 0.65,
    };
  }
}

export function text2Hex(
  primary: SimpleHSL,
  theme: "light" | "dark",
): string {
  if (theme === "light") {
    return hsl2hex(
      primary.hue,
      30,
      30,
    );
  } else {
    return hsl2hex(
      primary.hue,
      5,
      65,
    );
  }
}

export function surface1(
  primary: SimpleHSL,
  theme: "light" | "dark",
): SimpleHSL {
  if (theme === "light") {
    return {
      hue: primary.hue,
      saturation: primary.saturation * 0.25,
      brightness: primary.brightness * 0.90,
    };
  } else {
    return {
      hue: primary.hue,
      saturation: primary.saturation * 0.10,
      brightness: primary.brightness * 0.10,
    };
  }
}

export function surface1Hex(
  primary: SimpleHSL,
  theme: "light" | "dark",
): string {
  if (theme === "light") {
    return hsl2hex(
      primary.hue,
      25,
      90,
    );
  } else {
    return hsl2hex(
      primary.hue,
      10,
      10,
    );
  }
}

export function surface1BorderHex(
  primary: SimpleHSL,
  theme: "light" | "dark",
): string {
  if (theme === "light") {
    return hsl2hex(
      primary.hue,
      25,
      95,
    );
  } else {
    return hsl2hex(
      primary.hue,
      10,
      15,
    );
  }
}

export function surface2(
  primary: SimpleHSL,
  theme: "light" | "dark",
): SimpleHSL {
  if (theme === "light") {
    return {
      hue: primary.hue,
      saturation: primary.saturation * 0.20,
      brightness: primary.brightness * 0.99,
    };
  } else {
    return {
      hue: primary.hue,
      saturation: primary.saturation * 0.10,
      brightness: primary.brightness * 0.15,
    };
  }
}

export function surface2Hex(
  primary: SimpleHSL,
  theme: "light" | "dark",
): string {
  if (theme === "light") {
    return hsl2hex(
      primary.hue,
      20,
      99,
    );
  } else {
    return hsl2hex(
      primary.hue,
      10,
      15,
    );
  }
}

export function surface2BorderHex(
  primary: SimpleHSL,
  theme: "light" | "dark",
): string {
  if (theme === "light") {
    return hsl2hex(
      primary.hue,
      20,
      100,
    );
  } else {
    return hsl2hex(
      primary.hue,
      10,
      20,
    );
  }
}

export function surface3(
  primary: SimpleHSL,
  theme: "light" | "dark",
): SimpleHSL {
  if (theme === "light") {
    return {
      hue: primary.hue,
      saturation: primary.saturation * 0.20,
      brightness: primary.brightness * 0.92,
    };
  } else {
    return {
      hue: primary.hue,
      saturation: primary.saturation * 0.05,
      brightness: primary.brightness * 0.20,
    };
  }
}

export function surface3Hex(
  primary: SimpleHSL,
  theme: "light" | "dark",
): string {
  if (theme === "light") {
    return hsl2hex(
      primary.hue,
      20,
      92,
    );
  } else {
    return hsl2hex(
      primary.hue,
      5,
      20,
    );
  }
}

export function surface3BorderHex(
  primary: SimpleHSL,
  theme: "light" | "dark",
): string {
  if (theme === "light") {
    return hsl2hex(
      primary.hue,
      20,
      97,
    );
  } else {
    return hsl2hex(
      primary.hue,
      5,
      25,
    );
  }
}

export function surface4(
  primary: SimpleHSL,
  theme: "light" | "dark",
): SimpleHSL {
  if (theme === "light") {
    return {
      hue: primary.hue,
      saturation: primary.saturation * 0.20,
      brightness: primary.brightness * 0.85,
    };
  } else {
    return {
      hue: primary.hue,
      saturation: primary.saturation * 0.05,
      brightness: primary.brightness * 0.25,
    };
  }
}

export function surface4Hex(
  primary: SimpleHSL,
  theme: "light" | "dark",
): string {
  if (theme === "light") {
    return hsl2hex(
      primary.hue,
      20,
      85,
    );
  } else {
    return hsl2hex(
      primary.hue,
      5,
      25,
    );
  }
}

export function surface4BorderHex(
  primary: SimpleHSL,
  theme: "light" | "dark",
): string {
  if (theme === "light") {
    return hsl2hex(
      primary.hue,
      20,
      90,
    );
  } else {
    return hsl2hex(
      primary.hue,
      5,
      30,
    );
  }
}

export function shadow(
  primary: SimpleHSL,
  theme: "light" | "dark",
): SimpleHSL {
  if (theme === "light") {
    return {
      hue: primary.hue,
      saturation: primary.saturation * 0.10,
      brightness: primary.brightness * 0.20,
    };
  } else {
    return {
      hue: primary.hue,
      saturation: primary.saturation * 0.50,
      brightness: primary.brightness * 0.03,
    };
  }
}

export function shadowHex(
  primary: SimpleHSL,
  theme: "light" | "dark",
): string {
  if (theme === "light") {
    return hsl2hex(
      primary.hue,
      10,
      20,
    );
  } else {
    return hsl2hex(
      primary.hue,
      50,
      3,
    );
  }
}

export function createTheme(primary: SimpleHSL, mode: "light" | "dark"): Theme {
  return {
    shadow: shadowHex(primary, mode),
    shadowStrength: mode === "light" ? 20 : 80,
    surface1: surface1Hex(primary, mode),
    surface1Border: surface1BorderHex(primary, mode),
    surface2: surface2Hex(primary, mode),
    surface2Border: surface2BorderHex(primary, mode),
    surface3: surface3Hex(primary, mode),
    surface3Border: surface3BorderHex(primary, mode),
    surface4: surface4Hex(primary, mode),
    surface4Border: surface4BorderHex(primary, mode),
    text1: text1Hex(primary, mode),
    text2: text2Hex(primary, mode),
  };
}
