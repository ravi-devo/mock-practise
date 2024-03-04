import { useEffect, useState } from "react";
import { getUsers } from "../Service/axios-service";

const Practise = () => {
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    }

    useEffect(() => {
        getAllUsers();
    }, [])

    console.log(users)

    return (
        <div>
            <h2>Mock Practise</h2>
            <div>
                {users.map((user, index) => (
                    <div key={index}><span>{index + 1}</span>: {user.username}</div>
                ))}
            </div>
            
        </div>
    )
}

export default Practise;