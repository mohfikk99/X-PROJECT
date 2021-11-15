import React, { useState, useEffect } from 'react'
import { Button, Toast } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisV
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from 'react-redux';
import { deleteTour } from '../actions/tours';


export default function SettingCard({ tour, handleShowModal, setCurrentId }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [showToast, setShowToast] = useState(false);
    const toggleShowToast = () => setShowToast(!showToast);
    const dispatch = useDispatch();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [])

    return (
        <>
            <Toast show={showToast} onClose={toggleShowToast} className="settingCard">
                <Toast.Header>
                    <strong className="me-auto">{user ? 'Pengaturan' : 'Tindakan'}</strong>
                </Toast.Header>
                <Toast.Body className="bg-dark">
                    {user ? (
                        <>
                            <Button onClick={handleShowModal} onPointerMove={() => setCurrentId(tour._id)} variant="dark" className="text-size"> Ubah </Button>
                            <Button onClick={() => dispatch(deleteTour(tour._id))} variant="dark" className="text-size"> Hapus </Button>
                            <NavLink to="/Hidden" className="navbar navbar-brand text-size"> Sembunyikan </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/Hidden" className="navbar navbar-brand text-size"> Laporkan </NavLink>
                        </>
                    )}
                </Toast.Body>
            </Toast>
            <Button variant="light" onClick={() => setShowToast(true)}>
                <FontAwesomeIcon icon={faEllipsisV} />
            </Button>
        </>
    )
}
