require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "img.clerk.com"],
  },
  env: {

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: 'pk_test_bmVhdC1nb2xkZmlzaC03NS5jbGVyay5hY2NvdW50cy5kZXYk',
    CLERK_SECRET_KEY: 'sk_test_0gVnuLQuyxgKoonxlxNRu6mxXGwko1nm6X58UcnUwc'
  },
};

module.exports = nextConfig;
