import React, { useState } from "react";
import "./person-add.css";
import { useNavigate } from "react-router-dom";

const PersonAdd = () => {
    const [peronBody, setPersonBody] = useState({});
    let navigate = useNavigate();

    const handleChange = (event) => {
        setPersonBody({
            ...peronBody,
            [event.target.name]: event.target.value,
        });
    };

    const addPerson = (e) => {
        e.preventDefault()
        let previousData = localStorage.getItem("personData");
        previousData = JSON.parse(previousData);
        if (Object.values(peronBody).length) {
            let newData;
            if (previousData) {
                newData = [...previousData, peronBody];
            } else {
                newData = [peronBody];
            }
            localStorage.setItem("personData", JSON.stringify(newData));
        }
        setPersonBody({})
        navigate("/person-list");
    };



    return (
        <div className="person-add">
            <div className="person-container">
                <div className="title">Add Person</div>
                <form>
                    <div className="user_details">
                        <div className="input_box">
                            <span className="details">First Name</span>
                            <input
                                type="text"
                                placeholder="First Name"
                                required
                                onChange={handleChange}
                                name="firstName"
                                value={peronBody.firstName}
                            />
                        </div>
                        <div className="input_box">
                            <span className="details">Last Name</span>
                            <input
                                type="text"
                                placeholder="Last Name"
                                required
                                onChange={handleChange}
                                name="lastName"
                                value={peronBody.lastName}
                            />
                        </div>
                        <div className="input_box">
                            <span className="details">Email</span>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                required
                                onChange={handleChange}
                                name="email"
                                value={peronBody.email}
                            />
                        </div>
                        <div className="input_box">
                            <span className="details">Phone</span>
                            <input
                                type="phone"
                                maxLength={10}
                                minLength={10}
                                placeholder="Phone"
                                onChange={handleChange}
                                name="phone"
                                value={peronBody.phone}
                            />
                        </div>
                        <div className="input_box">
                            <span className="details">State</span>
                            <input
                                type="text"
                                placeholder="State"
                                required
                                onChange={handleChange}
                                name="state"
                                value={peronBody.state}
                            />
                        </div>
                        <div className="input_box">
                            <span className="details">City</span>
                            <input
                                type="text"
                                placeholder="City"
                                required
                                onChange={handleChange}
                                name="city"
                                value={peronBody.city}
                            />
                        </div>
                    </div>
                    <div className="button">
                        <button onClick={addPerson}>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonAdd;
