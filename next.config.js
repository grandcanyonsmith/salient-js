/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    env: {
      AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    },
  }