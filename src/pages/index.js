import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/nav'

const Index = () => {
    const [small, setSmall] = useState([]);
    const [medium, setMedium] = useState([]);
    const [big, setBig] = useState([]);
    const [large, setLarge] = useState([]);
    const [ready, setReady] = useState(false);
    const [time, setTime] = useState();

    useEffect(() => {
        axios.get('/index/getCarParks')
        .then((response) => {
            if(response.status === 200){
                setTime(response.data.time);
                setSmall(response.data.small)
                setMedium(response.data.medium)
                setBig(response.data.big)
                setLarge(response.data.large)
                setReady(true)
            }else{
                global.config.methods.warningResponse(response.data.message)
            }
        })
        .catch((err) => {
            global.config.methods.errorResponse(err)
        })
    }, []);

    return (
        <div className='container'>
            <Nav></Nav>
            <h3 className='mt-3'>CAR PARK</h3>
            <h6>Query time: {time}</h6>
            {
                !ready && (
                    <div className='d-flex justify-content-center'>
                        <div className="spinner-grow" role="status" style={{ height: "20px", width:"20px" }}></div>
                        <div className="spinner-grow" role="status" style={{ height: "20px", width:"20px" }}></div>
                        <div className="spinner-grow" role="status" style={{ height: "20px", width:"20px" }}></div>
                    </div>
                )
            }
            {
                ready && (
                    <div className='row mt-5'>
                       <div className='col-md-3 card'>
                            <div className='card-body'>
                                <h5 className='text-center'>SMALL</h5>
                                <div>
                                    <h6>HIGHEST ({small.highest.lotsAvailable} lots available) </h6>
                                    {
                                        small.highest ? small.highest.carparkNumber.join(', ') : '-'
                                    }
                                    <h6 className='mt-5'>LOWEST ({small.lowest.lotsAvailable} lots available)</h6>
                                    {
                                        small.lowest ? small.lowest.carparkNumber.join(', ') : '-'
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 card'>
                            <div className='card-body'>
                                <h5 className='text-center'>MEDIUM</h5>
                                <div>
                                    <h6>HIGHEST ({medium.highest.lotsAvailable} lots available) </h6>
                                    {
                                        medium.highest ? medium.highest.carparkNumber.join(', ') : '-'
                                    }
                                    <h6 className='mt-5'>LOWEST ({medium.lowest.lotsAvailable} lots available)</h6>
                                    {
                                        medium.lowest ? medium.lowest.carparkNumber.join(', ') : '-'
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 card'>
                            <div className='card-body'>
                                <h5 className='text-center'>BIG</h5>
                                <div>
                                    <h6>HIGHEST ({big.highest.lotsAvailable} lots available) </h6>
                                    {
                                        big.highest ? big.highest.carparkNumber.join(', ') : '-'
                                    }
                                    <h6 className='mt-5'>LOWEST ({big.lowest.lotsAvailable} lots available)</h6>
                                    {
                                        big.lowest ? big.lowest.carparkNumber.join(', ') : '-'
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 card'>
                            <div className='card-body'>
                                <h5 className='text-center'>LARGE</h5>
                                <div>
                                    <h6>HIGHEST ({large.highest.lotsAvailable} lots available) </h6>
                                    {
                                        large.highest ? large.highest.carparkNumber.join(', ') : '-'
                                    }
                                    <h6 className='mt-5'>LOWEST ({large.lowest.lotsAvailable} lots available)</h6>
                                    {
                                        large.lowest ? large.lowest.carparkNumber.join(', ') : '-'
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Index