import React, {useState} from "react";

function AddAirport ({onSubmit}) {
    const [airportData, setAirportData]= useState({
        code: "",
        name: "",
        country: "",
        terminals: "",
        gates: "",
        });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setAirportData({
            ...airportData,
            [name]: value,
            });
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(airportData);
        };

    return (
        <form
        onSubmit = {handleSubmit}
        style = {{display: "flex", flexDirection: "column", gap: "10px"}}
        >
        <input
        type = "text"
        name = "code"
        placeholder = "Airport Code"
        value = {airportData.code}
        onChange={handleChange}
        required
        />
        <input
        type = "text"
        name = "name"
        placeholder = "Airport Name"
        value = {airportData.name}
        onChange={handleChange}
        required
        />
        <input
        type = "text"
        name = "city"
        placeholder = "City"
        value = {airportData.city}
        onChange={handleChange}
        required
        />
        <input
        type = "text"
        name = "country"
        placeholder = "Country"
        value = {airportData.country}
        onChange={handleChange}
        required
        />
        <input
        type = "text"
        name = "terminals"
        placeholder = "Terminals"
        value = {airportData.terminals}
        onChange={handleChange}
        required
        />
        <input
        type = "text"
        name = "gates"
        placeholder = "Gates"
        value = {airportData.gates}
        onChange={handleChange}
        required
        />
        <button type = "submit">Add Airport</button>
        </form>
        );
    }
export default AddAirport;