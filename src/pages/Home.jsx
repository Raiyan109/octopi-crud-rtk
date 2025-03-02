import { useRef } from "react";
import Navbar from "../components/Navbar";
import Users from "./users/Users";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

const Home = () => {
    const containerRef = useRef(null)

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                lerp: 0.015, // Linear interpolation, lower = smoother
                multiplier: 0.9, // Scroll speed multiplier
                smartphone: {
                    smooth: true,
                },
                tablet: {
                    smooth: true,
                },
            }}
            containerRef={containerRef}
        >
            <main data-scroll-container ref={containerRef}>
                <div>
                    <Navbar />
                    <div className="py-32">
                        <Users />
                        {/* <Users />
                        <Users /> */}
                    </div>
                </div>

            </main>
        </LocomotiveScrollProvider>

    );
};

export default Home;