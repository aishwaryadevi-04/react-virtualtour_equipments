import React from 'react';
import './equipment.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import equipment1 from './equipment/l1.png';
import equipment2 from './equipment/l2.jpg';
import equipment3 from './equipment/l3.jpg';
import equipment4 from './equipment/l4.png';
import equipment5 from './equipment/ph1.jpg';
import equipment6 from './equipment/ph2.jpg';
import equipment7 from './equipment/ph3.jpg';
import equipment8 from './equipment/ph4.jpg';
import equipment9 from './equipment/sp1.jpg';
import equipment10 from './equipment/sp2.png';
import equipment11 from './equipment/sp3.jpg';

import Card from 'react-bootstrap/Card';


const Equipments = () => {
    const equipments = [
        { name: 'Biochemistry Analyser', image: equipment1 },
        { name: 'Centrifuge', image: equipment2 },
        { name: 'Lab Microscope', image: equipment3 },
        { name: 'Needle Destroyer', image: equipment4 },
        { name: 'Short Wave Diathermy', image: equipment5 },
        { name: 'Interferential Therapy Ultra sound Therapy', image: equipment6 },
        { name: 'Traction', image: equipment7 },
        { name: 'Wax Therapy', image: equipment8 },
        { name: 'Slit Lamp Biomicroscope (Ophthalmology)', image: equipment9 },
        { name: 'Snellen\â€™s eye test chart', image: equipment10 },
        { name: 'Dental Chair', image: equipment11 },


    ];

    return (
        <div className="equipments-container">
            <h2 className="equipment-heading">EQUIPMENT FACILITIES</h2>
            <h3 className="equipment-heading">LABORATORY</h3>
            <div className="equipment-list">
                {equipments.map((equipment, index) => (
                    <React.Fragment key={index}>
                        {(index === 4 || index === 8) && (
                            <h3 className="equipment-heading">
                                {index === 4 ? "PHYSIOTHERAPY FACILITIES" : "SPECIALIST TREATMENT"}

                            </h3>
                        )}
                        <Card key={index} className="equipment-card">
                            <div className="equipment-item">
                                <div className="img">
                                    <Card.Img variant="top" src={equipment.image} alt={equipment.name} /></div>
                                <div className="card-body">
                                    <Card.Body>
                                        <Card.Title>{equipment.name}</Card.Title>
                                    </Card.Body></div></div>
                        </Card>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Equipments;
