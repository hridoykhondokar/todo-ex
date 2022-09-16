import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from 'react-bootstrap';
import Todo from './Todo';


const Home = () => {

    const [data, setData] = useState("");
    console.log(data)

    return (
        <div>
            <div className="container ">
                <section className="mt-3 text-center">
                    <h2 style={{ textAlign: "center" }}>Enter Your Task for todo</h2>
                    
                    <div className="d-flex todo col-lg-5 mx-auto justify-content-between align-items-center">
                        <input value={data} onChange={(e) => setData(e.target.value)} className="form-control" name="task" />
                        <Button className="mx-2" variant="contained" style={{ backgroundColor: "#ee5253" }}><AddIcon></AddIcon></Button>
                    </div>
                    <Todo></Todo>
                </section>

            </div>

        </div>
    );
};

export default Home;