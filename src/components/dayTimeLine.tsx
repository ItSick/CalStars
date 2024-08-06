import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './dayTimeLine.css';
import ActivityRow from './activityRow'
interface Data{
    redStar:string;
    yellowStar:string;
    name:string;
    time:string;
}
interface ActivityRowProps {
    data: Data; // Use the Data interface defined above
}
    const DayTimeLine: React.FC<ActivityRowProps> = ({data}) => {

        const { t } = useTranslation();

        return (
            <div className='container-TL'>
                <p>time line</p>
                <div style={{flex:"column"}}>
                    <ActivityRow data={data} />
                </div>
            </div>
        );
    };

export default DayTimeLine;
