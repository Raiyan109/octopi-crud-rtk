import { useGetAllUsersQuery } from "../redux/features/user/userApi";


const Home = () => {
    const { data, error, isLoading } = useGetAllUsersQuery()
    console.log(data);

    return (
        <div>

        </div>
    );
};

export default Home;