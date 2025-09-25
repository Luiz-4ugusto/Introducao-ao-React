import React from 'react'
import { useState } from "react";
const Myform = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleSubimit = (e) => {
        e.preventDefault()
        console.log(name, email, bio, role);
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }
    return (
        <div>
            <form onSubmit={handleSubimit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder='Digite seu nome' onChange={handleName} value={name} />

                    <label htmlFor="email">Email:</label>

                    <input type="text" name="email" placeholder='Digite seu email' onChange={(e) =>
                        setEmail(e.target.value)} value={email} />
                </div>
                <label>
                    <span>bio:</span>
                    <textarea name="bio" placeholder='descrição' onChange={(e) =>
                        setBio(e.target.value)} value={bio} ></textarea>
                </label>




                <label>
                    <select name="role" onChange={(e) =>
                        setRole(e.target.value)} value={role}>
                        <option value="user">usuario</option>
                        <option value="editor">editor</option>

                        <option value="adm">adm</option>
                    </select>
                </label>


                <input type="submit" value="Enviar" />

            </form>

        </div>
    )
}

export default Myform