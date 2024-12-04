import React, {useState} froom "react";

const UpdateAirport = ({ airport, onSubmit, onCancel})=> {
    const [formData, setFormData] = useState ({...airport});
    const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData ({...formData, [name]: value});

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        };

    return (
        <form onSubmit = {handleSubmit}>
        <div>
        <label> Airport Code: </label>
        <imput
        type= "text"
        name= "code"
        value={formData.code}
        onChange={handleChange}
        />
        </div>

        <div>
        <label> Airport Name: </label>
        <imput
        type= "text"
        name= "name"
        value={formData.name}
        onChange={handleChange}
        />
        </div>

        <div>
        <label> City: </label>
        <imput
        type= "text"
        name= "city"
        value={formData.city}
        onChange={handleChange}
        />
        </div>

        <div>
        <label> Country: </label>
        <imput
        type= "text"
        name= "country"
        value={formData.country}
        onChange={handleChange}
        />
        </div>

        <div>
        <label> Terminals: </label>
        <imput
        type= "text"
        name= "terminals"
        value={formData.terminals}
        onChange={handleChange}
        />
        </div>

        <div>
        <label> Gates: </label>
        <imput
        type= "text"
        name= "gate"
        value={formData.gates}
        onChange={handleChange}
        />
        </div>
        <button type = "sumbit">Update Airport</button>
        <button Type = "button" onClick={onCancel}>
        Cancel
        </button>
        </form>
        );
    };

export default UpdateAirport;
