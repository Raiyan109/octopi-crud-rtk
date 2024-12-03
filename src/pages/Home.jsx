import Navbar from "../components/Navbar";
import Users from "./users/Users";


const Home = () => {


    return (
        <div>
            <Navbar />
            <div className="py-32">
                <Users />
            </div>
        </div>
    );
};

export default Home;