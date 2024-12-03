import { useGetAllUsersQuery } from "../../redux/features/user/userApi";
import userImg from '../../assets/user.jpg'
import { Link } from "react-router-dom";
import { motion } from "motion/react"

const Users = () => {
    const { data } = useGetAllUsersQuery()
    const colors = ['bg-[#e3dbfa]', 'bg-[#fbe2fa]', 'bg-[#ffe1cc]', 'bg-[#d4f6ed]'];
    return (
        <div>
            <div className="flex justify-center items-center">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
                    {
                        data?.map((user, i) => (
                            <div key={user._id} className={`w-72 p-2 text-center bg-white rounded-lg border-[3px] border-[#c9c5c5] h-80`}>
                                <Link to={`/users/${user?._id}`}>
                                    <div className={`px-12 py-6 text-center ${colors[i % colors.length]} rounded-lg lg:mt-0 xl:px-10 h-[300px]`}>
                                        <div className="space-y-4 xl:space-y-6">
                                            <img className="mx-auto rounded-full h-36 w-36"
                                                src={`${user.image ? user.image : userImg}`}
                                            />
                                            <div className="space-y-2">
                                                <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                                                    <h3 className="text-xl">{user.name}</h3>
                                                    <div className="mt-4 flex flex-wrap gap-1">
                                                        {Array.isArray(user?.skills) ? (
                                                            // Render if `skills` is an array
                                                            user.skills.slice(0, 2).map((skill, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))
                                                        ) : typeof user?.skills === 'string' ? (
                                                            // Render if `skills` is a string
                                                            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                                                {user.skills}
                                                            </span>
                                                        ) : (
                                                            // Handle missing or undefined `skills`
                                                            <span className="text-gray-500 text-sm">No skills listed</span>
                                                        )}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Users