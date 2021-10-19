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
        <div className="container-fluid">
            <div className="header py-5 text-center">
            <h1 className=""><span className="text-danger fw-bold border-bottom border-secondary py-3">{ExactIteam[0]?.name}</span></h1>
            </div>
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-5 border-end border-3">
                        <img className="w-75 h-75" src={ExactIteam[0]?.img} alt="" />
                    </div>
                    <div className="col-md-6 p-3 ">
                        <h2>Name of service: {ExactIteam[0]?.name}</h2>
                        <p className="mt-3"><span className="fw-bold">Short Description:</span> <span className="text-secondary">{ExactIteam[0]?.description}</span> </p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        
    );
};

export default ServiceDetails;