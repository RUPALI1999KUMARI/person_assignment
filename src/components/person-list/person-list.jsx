import React, { useEffect, useState } from "react";
import "./person-list.css";

const PersonList = () => {
    const [personData, setPersonData] = useState([]);
    const [editMode, setEditMode] = useState({ index: null, value: false });
    const [peronBody, setPersonBody] = useState({});

    const handleChange = (event) => {
        setPersonBody({
            ...peronBody,
            [event.target.name]: event.target.value,
        });
    };

    const deletePerson = (index) => {
        personData.splice(index, 1);
        localStorage.setItem("personData", JSON.stringify(personData));
        let data = localStorage.getItem("personData");
        data = JSON.parse(data);
        if (Array.isArray(data)) {
            setPersonData(data);
        }
    };

    const updatePerson = (index) => {
        personData.splice(index, 1, peronBody);
        localStorage.setItem("personData", JSON.stringify(personData));
        setPersonData(personData);
        setEditMode({ index: undefined, value: false })
    }

    useEffect(() => {
        let data = localStorage.getItem("personData");
        data = JSON.parse(data);
        if (Array.isArray(data)) {
            setPersonData(data);
        }
    }, []);

    return (
        <div className="person-list">
            <h2>Person List</h2>
            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th style={{ width: "50px" }}>Sr. No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>State</th>
                            <th>City</th>
                            <th style={{ width: "80px" }}></th>
                            <th style={{ width: "80px" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {personData.map(
                            (person, i) =>
                                person && (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>
                                            {(editMode.index !== i) && <span>{person.firstName}</span>}
                                            {editMode.index === i && editMode.value && (
                                                <input
                                                    type="text"
                                                    placeholder="First Name"
                                                    required
                                                    onChange={handleChange}
                                                    name="firstName"
                                                    value={peronBody.firstName}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            {(editMode.index !== i) && <span>{person.lastName}</span>}
                                            {editMode.index === i && editMode.value && (
                                                <input
                                                    type="text"
                                                    placeholder="Last Name"
                                                    required
                                                    onChange={handleChange}
                                                    name="lastName"
                                                    value={peronBody.lastName}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            {(editMode.index !== i) && <span>{person.email}</span>}
                                            {editMode.index === i && editMode.value && (
                                                <input
                                                    type="email"
                                                    placeholder="example@gmail.com"
                                                    required
                                                    onChange={handleChange}
                                                    name="email"
                                                    value={peronBody.email}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            {(editMode.index !== i) && <span>{person.phone}</span>}
                                            {editMode.index === i && editMode.value && (
                                                <input
                                                    type="phone"
                                                    maxLength={10}
                                                    minLength={10}
                                                    placeholder="Phone"
                                                    onChange={handleChange}
                                                    name="phone"
                                                    value={peronBody.phone}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            {(editMode.index !== i) && <span>{person.state}</span>}
                                            {editMode.index === i && editMode.value && (
                                                <input
                                                    type="text"
                                                    placeholder="State"
                                                    required
                                                    onChange={handleChange}
                                                    name="state"
                                                    value={peronBody.state}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            {(editMode.index !== i) && <span>{person.city}</span>}
                                            {editMode.index === i && editMode.value && (
                                                <input
                                                    type="text"
                                                    placeholder="City"
                                                    required
                                                    onChange={handleChange}
                                                    name="city"
                                                    value={peronBody.city}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            {editMode.index !== i &&
                                                <button
                                                    className="editButton"
                                                    onClick={() => {
                                                        setEditMode({ index: i, value: true })
                                                        setPersonBody(person)
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            }

                                            {editMode.value && editMode.index === i &&
                                                <button
                                                    className="saveButton"
                                                    onClick={() => {
                                                        updatePerson(i)
                                                    }}
                                                >
                                                    Save
                                                </button>
                                            }


                                        </td>
                                        <td>
                                            <button
                                                className="deleteButton"
                                                onClick={() => deletePerson(i)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PersonList;
