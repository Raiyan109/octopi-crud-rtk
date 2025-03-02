

export default function Section({ id, title, description, bgColor, imageUrl, imageRight }) {
    return (
        <section id={id} className={`py-24 ${bgColor}`} data-scroll-section>
            <div className="container mx-auto px-6">
                <div className={`flex flex-col ${imageRight ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}>
                    <div className="w-full md:w-1/2" data-scroll data-scroll-speed="0.9">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-6">{title}</h2>
                        <p className="text-lg text-neutral-700 mb-8 max-w-lg">{description}</p>
                        <a
                            href="#"
                            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        >
                            Learn more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 ml-2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                    <div className="w-full md:w-1/2" data-scroll data-scroll-speed={imageRight ? "-0.3" : "0.3"}>
                        <div className="relative overflow-hidden rounded-lg shadow-xl">
                            <img
                                src={imageUrl || "/placeholder.svg"}
                                alt={title}
                                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

