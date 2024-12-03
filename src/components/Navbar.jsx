import { Link } from "react-router-dom"
import { motion } from "motion/react"


const Navbar = () => {
    return (
        <div

        >
            <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 70 }}
                className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl md:max-w-screen-sm lg:max-w-screen-sm xl:max-w-screen-xl">
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <a aria-current="page" className="flex items-center" href="/">

                                <p className="">Octopi Task</p>
                            </a>
                        </div>
                        {/* <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                            <a aria-current="page"
                                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#">How it works</a>
                            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#">Pricing</a>
                        </div> */}
                        <div className="flex items-center justify-end gap-3">
                            <Link className=" items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 inline-flex"
                                to="/manage-user">Manage User</Link>
                            <Link className=" items-center justify-center rounded-xl bg-[#ffe1cc] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-[#f5dcca] inline-flex"
                                to="/create-user">Create User</Link>


                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Navbar