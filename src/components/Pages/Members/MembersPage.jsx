import React from "react";
import './MembersPage.css';
import Members from './Members'
import { useEffect, useState } from 'react';
import api from "../../../api";



function MembersPage () {

    const [membros, setMembros] = useState([]);
    
    useEffect(() => {
        
        const fetchData = async () => {
            const response = await api.get("/members")
            setMembros(response.data)
        }
        fetchData();
    }, [membros]);

    return (
        <div className="containerBody">
            <h1>Nossos Membros</h1>
            <section className="containerMembers">
                {membros.map((member, index) => <Members name={member.name} email={member.email} aniversario={member.aniversario} key={index} departamentos={member.departamentos}/>)}
            </section>
        </div>
    )
}

export default MembersPage;