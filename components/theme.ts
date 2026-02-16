// theme.ts
export const theme = {
  colors: {
    primary: "#7B0D1E", // Main dark red
    secondary: "#B71C1C", // Hover/red accents
    accent: "#FFD700", // Yellow/gold for highlights
    background: "#FFFFFF",
    text: "#1F2937", // gray-900
    textLight: "#F9FAFB", // white/light
    overlay: "rgba(0,0,0,0.2)",
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  transition: {
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
};
