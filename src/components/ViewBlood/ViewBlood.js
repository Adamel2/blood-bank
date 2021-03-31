import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import BloodCard from './BloodCard';

function ViewBlood() {

    const [listUsersBlood, setListUsersBlood] = useState([]);

    async function handleData() {
        await axios.get('http://localhost:8080/users/findAllUsers')
            .then((response) => {
                setListUsersBlood(response.data);
            });

    }
    useEffect(()=>{
        handleData();
    },[])
    return (
        <div className="row justify-content-center m-3">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Type Blood</th>
                        <th>Smoke</th>
                        <th>Phone Number</th>
                        <th>Create date</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {listUsersBlood.map((item) => console.log(item))} */}


                    {listUsersBlood.map((item) => <BloodCard
                        key={item.id} id={item.id} userID={item.userID} name={item.name} bloodType={item.bloodType} smoke={item.smoke} phoneNumber={item.phoneNumber} createDate={item.createDate} address={item.address} />)}

                </tbody>
            </Table>
        </div>
    )
}
export default ViewBlood;