import React from 'react'
import './Services.css'
import programImg1 from '../../assets/program-1.png';
import programImg2 from '../../assets/program-2.png';
import programImg3 from '../../assets/program-3.png';
import programImg4 from '../../assets/program-2.png';
import programImg5 from '../../assets/program-1.png';

function Services() {
  return (
    <div className='services'>
        <div className="service">
            <img src={programImg1} alt="" />
            <div className="caption">
                <p>Sales Training</p>
            </div>
        </div>
        <div className="service">
            <img src={programImg2} alt="" />
            <div className="caption">
                <p>Sales Recruitment</p>
            </div>
        </div>
        <div className="service">
            <img src={programImg3} alt="" />
            <div className="caption">
                <p>Sales Synergy</p>
            </div>
        </div>
        <div className="service">
            <img src={programImg4} alt="" />
            <div className="caption">
                <p>Outsourced Sales Management</p>
            </div>
        </div>
        <div className="service">
            <img src={programImg5} alt="" />
            <div className="caption">
                <p>Sales Coaching</p>
            </div>
        </div>
    </div>
  )
}

export default Services;