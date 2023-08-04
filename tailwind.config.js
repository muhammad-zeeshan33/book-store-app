
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            'sm': '350px',
            // => @media (min-width: 640px) { ... }
      
            'md': '450px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          },
      extend: {
        colors: {
          primary: { 100: "#2F373D", 200: "#10151B" },
          secondary: {
            100: "#58626D",
            200: "#FCFCFD",
            300: "rgba(47, 55, 61, 0.04)",
            400: "#707A85",
            500: "#D3D6DC",
            600: "#E2E8F0",
          },
          blue: { 500: "#006ACC" },
        },
        fontFamily: {
          roboto: ["Roboto", "sans-serif"],          
          noto: ["Noto Sans", "sans-serif"],
          notoKr: ["Noto Sans KR", "sans-serif"]
        },
      },
    },
    plugins: [],
  };
  