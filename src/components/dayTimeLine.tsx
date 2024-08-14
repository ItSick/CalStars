import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './dayTimeLine.css';
import ActivityRow from './activityRow'
import { useSelector } from 'react-redux';
import type { RootState } from "../context/redux/store";
import { Activity, ActivityData, RestaurantActivityData } from '../context/userDataReducer';




interface ActivityRowProps {
    activities: any; // Use the Data interface defined above
}
    const DayTimeLine: React.FC<ActivityRowProps> = ({activities}) => {

        const user = useSelector((state: RootState) => state.userData.user);
        const { t } = useTranslation();

        return (
            <div className='container-TL scrollable-container'>
                <div style={{flex:"column"}}>
                    <ActivityRow activities={activities} />
                </div>
            </div>
        );
    };

export default DayTimeLine;
