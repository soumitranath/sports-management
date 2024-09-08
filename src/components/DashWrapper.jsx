import React, { useEffect } from 'react'
import TopMenu from './menu/TopMenu'
import LeftMenu from './menu/LeftMenu'
import { useNavigate } from "react-router-dom";
const DashWrapper = ({ Component }) => {
    const navigate = useNavigate();
    useEffect(() => {
        let userDetails = sessionStorage.getItem("userDetails")
        if (!userDetails) {
            navigate("/login")
        }
    }, [])
    return (
        <>
            <TopMenu />
            <LeftMenu />
            <Component />
        </>
    )
}

export default DashWrapper