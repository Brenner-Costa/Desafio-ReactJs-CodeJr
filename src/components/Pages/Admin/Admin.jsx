import React from "react";
import MembersAdmin from "./MembersAdmin";
import './Admin.css';

function AdminPage() {

    return (
        <section className="bodyPageAdm">
            <h1>Gerenciamento de membros</h1>
            <div className="container">
                <MembersAdmin/>
            </div>
        </section>

    )
}

export default AdminPage;