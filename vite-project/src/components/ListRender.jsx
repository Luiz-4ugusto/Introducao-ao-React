import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUsers] = useState([
        { id: 1, name: "Matheus", age: 31 },
        { id: 2, name: "Jones", age: 19 },
        { id: 3, name: "Scorpion", age: 201 },
    ]);

    //   6 - previous state
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return (
        <div>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - "age" {user.age}</li>

                ))}
            </ul>
            <button onClick={deleteRandom}>deletar</button>
        </div>
    )
}

export default ListRender