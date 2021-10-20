import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [data , setData] = useState([]);

    useEffect(()=>{
        fetch('/servicesData.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const ExactIteam = data.filter(td => td.key === serviceId);
    return (
        // details service section
        <div className="container-fluid">
            <div className="header py-5 text-center">
            <h1 className=""><span className="text-danger fw-bold border-bottom border-secondary py-3">{ExactIteam[0]?.name}</span></h1>
            </div>
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-5 text-center">
                        <img className="w-75 h-75" src={ExactIteam[0]?.img} alt="" />
                    </div>
                    <div className="col-md-6 p-3 ">
                        <h2>Name of service: {ExactIteam[0]?.name}</h2>
                        <p className="mt-3"><span className="fw-bold">Short Description:</span> <span className="text-secondary">{ExactIteam[0]?.description}</span> </p>
                        <p><span className="fw-bold">Description:</span> Over the past two decades, medical services in the Bangladesh have declined markedly as a percentage of heart care costs, from 43.5% in 1980 to 32.8% in 2000. This decline was due to shortened lengths of hospital stay, the move from inpatient to outpatient facilities for surgery, and a wave of hospital mergers in the 1990s that consolidated services and staff. Since 2001, however, spending on hospital care in the United States has been growing faster than other sectors of the economy as a result of increasing demand for hospital services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;