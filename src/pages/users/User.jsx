import { useParams } from "react-router-dom"
import { useGetSingleUserQuery } from "../../redux/features/user/userApi"
import userImg from '../../assets/user.jpg'
import { FaUserGraduate, FaUniversity, FaAlgolia, FaAngellist } from "react-icons/fa";
import Navbar from "../../components/Navbar";

const User = () => {
    const { id } = useParams()
    const { data: user, error, isLoading } = useGetSingleUserQuery(id)
    console.log(user);

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-screen">
                <div className="bg-[#fbe2fa] dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 text-center mb-8 md:mb-0">
                            <img className="mx-auto rounded-full h-36 w-36"
                                src={`${user?.image ? user?.image : userImg}`}
                            />
                            <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">{user?.name}</h1>
                            {/* <p className="text-gray-600 dark:text-gray-300">Software Developer</p> */}
                            <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">{user?.website}</button>
                        </div>
                        <div className="md:w-2/3 md:pl-8">
                            <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">About Me</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Passionate software developer with 5 years of experience in web technologies.
                                I love creating user-friendly applications and solving complex problems.
                            </p>
                            <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Skills</h2>
                            <div className="mb-8">
                                {Array.isArray(user?.skills) ? (
                                    // Render if `skills` is an array
                                    user.skills.slice(0, 2).map((skill, i) => (
                                        <span
                                            key={i}
                                            className="whitespace-nowrap rounded-full bg-[#e3dbfa] px-3.5 py-1.5 text-xs"
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
                            {/* <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">React</span>
                            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Python</span>
                            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">SQL</span>
                        </div> */}
                            <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-3">Contact Information</h2>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    {user?.email}
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    {user?.phone}
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    {user?.address}
                                </li>
                            </ul>

                            <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-3">Education</h2>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                                <li className="flex items-center">
                                    <FaUserGraduate className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" />
                                    {user?.educationalQualifications.degree}
                                </li>
                                <li className="flex items-center">
                                    <FaUniversity className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" />
                                    {user?.educationalQualifications.university}
                                </li>
                                <li className="flex items-center">
                                    <FaAlgolia className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" />
                                    {user?.educationalQualifications.session}
                                </li>
                                <li className="flex items-center">
                                    <FaAngellist className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" />
                                    {user?.educationalQualifications.cgpa}
                                </li>
                            </ul>

                            <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-3">Personal info</h2>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-center">
                                    <FaUserGraduate className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" />
                                    {user?.age}
                                </li>
                                <li className="flex items-center">
                                    <FaUniversity className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" />
                                    {user?.gender}
                                </li>
                                <li className="flex items-center">
                                    <FaAlgolia className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" />
                                    {user?.nationality}
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User