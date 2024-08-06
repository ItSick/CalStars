import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './dayTimeLine.css';

interface Data{
    redStar:string;
    yellowStar:string;
    name:string;
    time:string;
}
interface ActivityRowProps {
    data: Data; // Use the Data interface defined above
}
    const ActivityRow: React.FC<ActivityRowProps> = ({data}) => {

        const { t } = useTranslation();

        return (
            <div className='container-TL'>
                <div style={{flex:"row"}}>
                    <div>{data.time}</div>
                    <div>{data.redStar}/{data.yellowStar}</div>
                    <div>{data.name}</div>
                </div>
            </div>
        );
    };

export default ActivityRow;
