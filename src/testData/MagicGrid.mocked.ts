import { IMagicElement, IMagicGridProps } from "../components/MagicGrid/MagicGrid.types";

export const mockedMagicGridPropsMap: Map<string, IMagicGridProps<IMagicElement>> = new Map();
mockedMagicGridPropsMap.set("default", {
  data: [
    [
      { key: "11", state: false },
      { key: "12", state: true },
      { key: "13", state: false },
      { key: "14", state: true },
      { key: "15", state: true }
    ],
    [
      { key: "21", state: false },
      { key: "22", state: false },
      { key: "23", state: true },
      { key: "24", state: true },
      { key: "25", state: true }
    ],
    [
      { key: "31", state: false },
      { key: "32", state: true },
      { key: "33", state: false },
      { key: "34", state: true },
      { key: "35", state: false }
    ],
    [
      { key: "41", state: false },
      { key: "42", state: true },
      { key: "43", state: true },
      { key: "44", state: false },
      { key: "45", state: false }
    ],
    [
      { key: "51", state: true },
      { key: "52", state: true },
      { key: "53", state: false },
      { key: "54", state: false },
      { key: "55", state: true }
    ]
  ]
});
mockedMagicGridPropsMap.set("rotor", {
  data: [
    [
      { key: "11", state: false },
      { key: "12", state: false },
      { key: "13", state: false },
      { key: "14", state: false },
      { key: "15", state: false }
    ],
    [
      { key: "21", state: false },
      { key: "22", state: false },
      { key: "23", state: false },
      { key: "24", state: false },
      { key: "25", state: false }
    ],
    [
      { key: "31", state: false },
      { key: "32", state: true },
      { key: "33", state: true },
      { key: "34", state: true },
      { key: "35", state: false }
    ],
    [
      { key: "41", state: false },
      { key: "42", state: false },
      { key: "43", state: false },
      { key: "44", state: false },
      { key: "45", state: false }
    ],
    [
      { key: "51", state: false },
      { key: "52", state: false },
      { key: "53", state: false },
      { key: "54", state: false },
      { key: "55", state: false }
    ]
  ]
});
mockedMagicGridPropsMap.set("tetris", {
  data: [
    [
      { key: "11", state: false },
      { key: "12", state: false },
      { key: "13", state: false },
      { key: "14", state: false },
      { key: "15", state: false },
      { key: "16", state: false }
    ],
    [
      { key: "21", state: false },
      { key: "22", state: false },
      { key: "23", state: false },
      { key: "24", state: false },
      { key: "25", state: false },
      { key: "26", state: false }
    ],
    [
      { key: "31", state: false },
      { key: "32", state: false },
      { key: "33", state: true },
      { key: "34", state: true },
      { key: "35", state: true },
      { key: "36", state: false }
    ],
    [
      { key: "41", state: false },
      { key: "42", state: true },
      { key: "43", state: true },
      { key: "44", state: true },
      { key: "45", state: false },
      { key: "46", state: false }
    ],
    [
      { key: "51", state: false },
      { key: "52", state: false },
      { key: "53", state: false },
      { key: "54", state: false },
      { key: "55", state: false },
      { key: "56", state: false }
    ],
    [
      { key: "61", state: false },
      { key: "62", state: false },
      { key: "63", state: false },
      { key: "64", state: false },
      { key: "65", state: false },
      { key: "66", state: false }
    ]
  ]
});

export const mockedMagicGridProps = mockedMagicGridPropsMap.get("default") as IMagicGridProps<IMagicElement>;
