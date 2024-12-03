import { Link, useParams } from "react-router-dom"
import { useGetSingleUserQuery, useUpdateUserMutation } from "../../redux/features/user/userApi"
import { useState } from "react"


const EditUser = () => {
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [nationality, setNationality] = useState('')
    const [gender, setGender] = useState('')
    const [nid, setNid] = useState('')
    const [website, setWebsite] = useState('')
    const [skills, setSkills] = useState([]);
    const [educationalQualifications, setEducationalQualifications] = useState({
        degree: "",
        university: "",
        session: "",
        cgpa: "",
    });


    const [updateUser] = useUpdateUserMutation()
    const { id } = useParams()
    const { data: user } = useGetSingleUserQuery(id)


    const userId = user?._id
    console.log(userId, 'from userId');


    const [newSkill, setNewSkill] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editUser = {
            name: name || user?.name,
            image: image || user?.image,
            email: email || user?.email,
            phone: phone || user?.phone,
            age: age || user?.age,
            address: address || user?.address,
            nationality: nationality || user?.nationality,
            gender: gender || user?.gender,
            nid: nid || user?.nid,
            website: website || user?.website,
            skills: skills || user?.skills,
            educationalQualifications: educationalQualifications || user?.educationalQualifications,
        }
        console.log(userId);

        const res = await updateUser({ userId, ...editUser }).unwrap()
        console.log(user, 'user data');
        console.log(res, 'res data');

        return res
    };

    const addSkill = () => {
        if (newSkill) {
            setSkills((prevSkills) => [...prevSkills, newSkill]);
            setNewSkill("");
        }
    };

    const handleEducationalChange = (e) => {
        const { name, value } = e.target;
        setEducationalQualifications((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="p-5">
            <Link to='/' className="px-4 py-2 font-medium text-white bg-[#6A64F1] rounded-md hover:bg-[#817bf5] focus:outline-none focus:shadow-outline-blue active:bg-[#6A64F1] transition duration-150 ease-in-out">Back</Link>
            <div className="flex items-center justify-center py-12 px-1 md:px-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form onSubmit={handleSubmit} className="p-10">
                        {/* Image */}
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Image
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Image"
                                defaultValue={user?.image}
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        {/* Full Name */}
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                defaultValue={user?.name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                defaultValue={user?.email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        {/* Phone */}
                        <div className="mb-5">
                            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Phone Number"
                                defaultValue={user?.phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        {/* Age */}
                        <div className="mb-5">
                            <label htmlFor="age" className="mb-3 block text-base font-medium text-[#07074D]">
                                Age
                            </label>
                            <input
                                type="number"
                                name="age"
                                id="age"
                                placeholder="Age"
                                defaultValue={user?.age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        {/* Nationality */}
                        <div className="mb-5">
                            <label htmlFor="nationality" className="mb-3 block text-base font-medium text-[#07074D]">
                                Nationality
                            </label>
                            <input
                                type="text"
                                name="nationality"
                                id="nationality"
                                placeholder="Nationality"
                                defaultValue={user?.nationality}
                                onChange={(e) => setNationality(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        {/* NID */}
                        <div className="mb-5">
                            <label htmlFor="nid" className="mb-3 block text-base font-medium text-[#07074D]">
                                National ID (NID)
                            </label>
                            <input
                                type="text"
                                name="nid"
                                id="nid"
                                placeholder="National ID"
                                defaultValue={user?.nid}
                                onChange={(e) => setNid(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        {/* Address */}
                        <div className="mb-5">
                            <label htmlFor="address" className="mb-3 block text-base font-medium text-[#07074D]">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Address"
                                defaultValue={user?.address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        {/* Website */}
                        <div className="mb-5">
                            <label htmlFor="website" className="mb-3 block text-base font-medium text-[#07074D]">
                                Website
                            </label>
                            <input
                                type="text"
                                name="website"
                                id="website"
                                placeholder="Website"
                                defaultValue={user?.website}
                                onChange={(e) => setWebsite(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        {/* Website */}
                        <div className="mb-5">
                            <label htmlFor="website" className="mb-3 block text-base font-medium text-[#07074D]">
                                Gender
                            </label>
                            <input
                                type="text"
                                name="gender"
                                id="gender"
                                placeholder="Gender"
                                defaultValue={user?.gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        {/* Skills */}
                        <div className="mb-5">
                            <label htmlFor="skills" className="mb-3 block text-base font-medium text-[#07074D]">
                                Skills
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    id="skills"
                                    placeholder="Add a skill"
                                    value={newSkill}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                                <button
                                    type="button"
                                    onClick={addSkill}
                                    className="rounded-md bg-[#6A64F1] px-4 py-2 text-white"
                                >
                                    Add
                                </button>
                            </div>
                            {/* Display Added Skills */}
                            <ul className="mt-3 list-disc px-6 text-[#07074D]">
                                {skills.map((skill, index) => (
                                    <li key={index} className="text-sm">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Educational Qualifications */}
                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                                Educational Qualifications
                            </label>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="degree"
                                    placeholder="Degree"
                                    defaultValue={user?.educationalQualifications.degree}
                                    onChange={handleEducationalChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="university"
                                    placeholder="University"
                                    defaultValue={user?.educationalQualifications.university}
                                    onChange={handleEducationalChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="session"
                                    placeholder="Session (e.g., 2020-2024)"
                                    defaultValue={user?.educationalQualifications.session}
                                    onChange={handleEducationalChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    step="0.01"
                                    name="cgpa"
                                    placeholder="CGPA"
                                    defaultValue={user?.educationalQualifications.cgpa}
                                    onChange={handleEducationalChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>


                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div></div>
    )
}

export default EditUser