const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
    // For use with generating Next PWA
    experimental: {
        newNextLinkBehavior: true,
    },
    // For use with Vercel Blob
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'my-blob-store.public.blob.vercel-storage.com',
                port: '',
            },
        ],
    },
    // swcMinify: false,
});

module.exports = withPWA({
    productionBrowserSourceMaps: true,
});