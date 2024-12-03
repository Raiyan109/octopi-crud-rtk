/* eslint-disable react/prop-types */

import { useState } from "react"
import { useDeleteUserMutation } from "../../redux/features/user/userApi"
import { Link } from "react-router-dom"


const ManageUser = ({ user }) => {
    const [deleteUser] = useDeleteUserMutation()
    const [userId, setUserId] = useState('')

    const handleUserId = (id) => {
        setUserId(id)
    }

    const handleDelete = (userId) => {
        deleteUser(userId)
    }
    return (
        <tbody className="bg-white divide-y divide-gray-200">
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                {/* <td className="px-6 py-4 whitespace-nowrap">jane@example.com</td>
                            <td className="px-6 py-4 whitespace-nowrap">Admin</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                            </td> */}
                <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/edit-user/${user?._id}`} className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</Link>
                    <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out" onClick={() => handleDelete(user?._id)}>Delete</button>
                </td>
            </tr>

        </tbody>
    )
}

export default ManageUser