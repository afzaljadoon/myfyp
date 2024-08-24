import React from "react";
import Addcandidate from "./Addcandidate";
import Candidatedetail from "./Candidatedetail";
import Changephase from "./Changephase";

export default function  AdminDashboard() {
    return (
        <div>
            <Addcandidate />
            <Candidatedetail />
            <Changephase />
        </div>
    )
}