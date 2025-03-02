export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="container mx-auto px-6 relative z-20 text-center">
                <h1
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                    data-scroll
                    data-scroll-speed="1"
                    data-scroll-direction="vertical"
                >
                    Smooth Scrolling Experience
                </h1>
                <p
                    className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10"
                    data-scroll
                    data-scroll-speed="0.5"
                    data-scroll-direction="vertical"
                >
                    Create beautiful, interactive websites with Locomotive Scroll and React
                </p>
                <a
                    href="#about"
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
                    data-scroll
                    data-scroll-speed="0.2"
                    data-scroll-direction="vertical"
                >
                    Discover More
                </a>
            </div>
            <div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
                data-scroll
                data-scroll-speed="-0.5"
                data-scroll-direction="vertical"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-white"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
            </div>
        </section>
    )
}

