import React from 'react'
import './Services.css'
import OutsourcingIMG from '../../assets/OUTSOURCING.jpg';
import RecruitmentIMG from '../../assets/SALES RECRUITMENT.jpg';
import StrengthTrainingIMG from '../../assets/STRENGTH BASED TRAINING.jpg';
import ValueAddedSalesTrainingIMG from '../../assets/VALUE ADDED SALES TRAINING.jpg';
import OneOnOneTraining from '../../assets/ONE_ON_ONE_COACHING.jpg';

function Services() {
  return (
    <div className='services'>
        <div className="service">
            <img src={StrengthTrainingIMG} alt="" />
            <div className="caption">
                <p>Sales Training</p>
            </div>
        </div>
        <div className="service">
            <img src={RecruitmentIMG} alt="" />
            <div className="caption">
                <p>Sales Recruitment</p>
            </div>
        </div>
        <div className="service">
            <img src={ValueAddedSalesTrainingIMG} alt="" />
            <div className="caption">
                <p>Sales Synergy</p>
            </div>
        </div>
        <div className="service">
            <img src={OutsourcingIMG} alt="" />
            <div className="caption">
                <p>Outsourced Sales Management</p>
            </div>
        </div>
        <div className="service">
            <img src={OneOnOneTraining} alt="" />
            <div className="caption">
                <p>Sales Coaching</p>
            </div>
        </div>
    </div>
  )
}

export default Services;