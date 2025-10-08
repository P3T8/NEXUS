import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewNexusPage = () => {
    const [type, setType] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        axios.get("/api/type")
            .then(response => {
                setType(response.data);
            })
            .catch(error => {
                console.error("Hiba a kérés során:", error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const spaceships = {
            nev: formData.get("nev"),
            style_neve: formData.get("style_neve"),
            evek: formData.get("evek"),
            type_id: formData.get("type_id")
        };

        axios.post("/api/newspaceships", spaceships)
            .then(response => {
                console.log("Sikeres mentés:", response.data);
                navigate("/types");
            })
            .catch(error => {
                alert('Hiba történt a beküldés során.', error);
            });
    };

    return (
        <>
        <form onSubmit={handleSubmit} className='p-5'>
                <div className="form-group">
                    <label htmlFor="nev">Az űrhajó neve</label>
                    <input type="text" name="nev" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="type">A űrhajó típusa</label>
                    <select name="type" className="form-control" required>
                        {type.map((type, index) => (
                            <option key={index} value={type.id}>{type.spaceship_neve}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="evek">Évek</label>
                    <input type="text" name="evek" className="form-control" required />
                </div>
                <br />
                <center>
                    <button type="submit" className="btn" style={{backgroundColor: "rgb(54, 24, 221)",color:"white"}}>Feltöltés</button>
                </center>
            </form> 
        </>
    );
};

export default NewNexusPage;


        



