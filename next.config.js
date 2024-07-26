const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  primaryHue: { dark: 186, light: 212 },
  primarySaturation: 100,
});

module.exports = withNextra({});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
