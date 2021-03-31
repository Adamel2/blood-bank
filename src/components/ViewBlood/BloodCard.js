import React from "react";

function BloodCard(props) {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.userID}</td>
            <td>{props.name}</td>
            <td>{props.bloodType}</td>
            <td>{props.smoke}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.createDate}</td>
            <td>{props.address}</td>
        </tr>
    )
}
export default BloodCard;