const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lastfm.freetls.fastly.net"],
  },
};

module.exports = withNextra(nextConfig);
