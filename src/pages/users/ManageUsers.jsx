import { useGetAllUsersQuery } from "../../redux/features/user/userApi"
import ManageUser from "./ManageUser"


const ManageUsers = () => {
    const { data } = useGetAllUsersQuery()
    return (
        <div className="py-20 px-0 md:px-10">
            <table className="min-w-full divide-y divide-gray-200 ">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th> */}
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                {data?.map((user) => (
                    <ManageUser key={user._id} user={user} />
                ))}
            </table>
        </div>
    )
}

export default ManageUsers