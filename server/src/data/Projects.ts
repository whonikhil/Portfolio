export const projects = [
    {
        id: "castella",
        title: "Castella — Streaming Podcast",
        category: "Development",
        shortDescription: "A modern web app for streaming and monetizing podcasts.",
        fullDescription: "Castella is a robust streaming platform built to help creators monetize their content directly. Features include real-time analytics, secure payment gateways, and high-quality audio streaming. Built with a focus on performance and user experience.",
        stack: ["React", "Node.js", "Socket.IO", "PostgreSQL"],
        // Make sure you put a file named 'castella.jpg' in client/public/work/
        coverImage: "/work/castella.jpg",
        repoUrl: "https://github.com/nikhil/castella",
        liveUrl: "https://castella.com",
        featured: true
    },
    {
        id: "Street photography",
        title: "Photography",
        category: "Photography",
        shortDescription: "Capturing the chaotic beauty of streets.",
        fullDescription: "A street photography series exploring the daily lives, architecture, and hidden corners of Mumbai. Shot on Sony Alpha with a focus on natural light and candid moments. This collection aims to show the resilience and spirit of the city.",
        stack: ["Sony Alpha", "Lightroom", "Street Photography"],
        // Make sure you put a file named 'mumbai1.jpg' in client/public/work/
        coverImage: "/work/mumbai1.jpg",
        // Inside the "Soul of Mumbai" object:

        images: [
            "/work/mumbai1.jpg",
            "/work/mumbai2.jpg",
            "/work/mumbai3.jpg",
            "/work/mumbai4.jpg",
            "/work/mumbai5.jpg",

        ],
        liveUrl: "https://instagram.com/visualsby_nikhil",
        featured: true
    },
    {
        id: "cinematic-music-video",
        title: "Music Videos",
        category: "Videography",
        shortDescription: "Cinematic visuals and color grading for music video.",
        fullDescription: "Directed and edited a music video for an artist ROCKY . Utilized slow-motion techniques and color grading to match the song's emotional tone. The goal was to create a visual identity that complements the audio experience.",
        // ... inside the Videography project object
        stack: ["Premiere Pro", "4K", "Cinematic Techniques", "Color Grading", "Capcut"],
        coverImage: "/work/video-thumb.jpg",

        // CHANGE THIS LINE:
        videoUrl: "/work/demo.mp4",

        featured: true
    }
];