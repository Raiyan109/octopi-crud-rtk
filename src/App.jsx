import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'
import Section from './components/Section'
import Hero from './components/Hero'
import Header from './components/Header'

function App() {
  const containerRef = useRef(null)
  return (
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //     lerp: 0.095, // Linear interpolation, lower = smoother
    //     multiplier: 0.9, // Scroll speed multiplier
    //     smartphone: {
    //       smooth: true,
    //     },
    //     tablet: {
    //       smooth: true,
    //     },
    //   }}
    //   containerRef={containerRef}
    // >
    //   <main data-scroll-container ref={containerRef}>
    //     {/* <Header /> */}
    //     {/* <Hero /> */}
    //     {/* <Section
    //       id="about"
    //       title="About Us"
    //       description="We create digital experiences that matter."
    //       bgColor="bg-neutral-100"
    //       imageUrl="/placeholder.svg?height=400&width=600"
    //     />
    //     <Section
    //       id="services"
    //       title="Our Services"
    //       description="Strategic design and development for modern brands."
    //       bgColor="bg-white"
    //       imageUrl="/placeholder.svg?height=400&width=600"
    //       imageRight
    //     />
    //     <Section
    //       id="work"
    //       title="Our Work"
    //       description="Award-winning projects for industry leaders."
    //       bgColor="bg-neutral-100"
    //       imageUrl="/placeholder.svg?height=400&width=600"
    //     />
    //     <Section
    //       id="about"
    //       title="About Us"
    //       description="We create digital experiences that matter."
    //       bgColor="bg-white"
    //       imageUrl="/placeholder.svg?height=400&width=600"
    //     />

    //     <Section
    //       id="work"
    //       title="Our Work"
    //       description="Award-winning projects for industry leaders."
    //       bgColor="bg-neutral-100"
    //       imageUrl="/placeholder.svg?height=400&width=600"
    //     /> */}
    //     <RouterProvider router={routes} />

    //   </main>
    // </LocomotiveScrollProvider>
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
