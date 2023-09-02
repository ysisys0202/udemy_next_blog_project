require("dotenv").config();
const Dotenv = require("dotenv-webpack"); // 작성 1

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
};

export default nextConfig;
