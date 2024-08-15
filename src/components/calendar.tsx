
import React, { RefObject, useEffect, useState, useRef } from 'react';
import './calendar.css';
import { useTranslation } from 'react-i18next';
import { chevronBack, chevronForward} from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { addDays, addMonths, eachDayOfInterval, endOfMonth, format, startOfMonth, subMonths, getYear, getMonth,getDay, parse, isSameDay } from "date-fns";
//import { useSwipeable } from 'react-swipeable';
import { useSelector } from 'react-redux';
import type { RootState } from "../context/redux/store";
import { Activity, ActivityData, RestaurantActivityData } from '../context/userDataReducer';




const daysInWeek = [
    {num:0,name:"sunday", shortName:"Su", hebName:"ראשון", hebNameShort:"א"},
    {num:1,name:"monday", shortName:"Mo",hebName:"שני", hebNameShort:"ב"},
    {num:2,name:"tuesday", shortName:"Tu",hebName:"שלישי", hebNameShort:"ג"},
    {num:3,name:"wednesday", shortName:"We",hebName:"רביעי", hebNameShort:"ד"},
    {num:4,name:"thursday", shortName:"Th",hebName:"חמישי", hebNameShort:"ה"},
    {num:5,name:"friday", shortName:"Fr",hebName:"שישי", hebNameShort:"ו"},
    {num:6,name:"saturday", shortName:"Sa",hebName:"שבת", hebNameShort:"ש"}
];

const MonthInYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

interface CalendarProps {
    setActivitiesPerDay: (activitiesPerDay: any[]) => void;
}

const Calendar: React.FC<CalendarProps> = ({setActivitiesPerDay}) => {

    const { t } = useTranslation();
    const user = useSelector((state: RootState) => state.userData.user);

    
    const [currentDate, setCurrentDate]= useState(new Date());
    const formated = format(currentDate, 'dd.MM.yyyy HH:mm');
    const [month, setMonth]=useState("");
    const [year, setYear]=useState(0);
    const [firstDayOfMonth, setFirstDayOfMonth]= useState<Date>(currentDate);
    const [lastDayOfMonth, setLastDayOfMonth]= useState<Date>(currentDate);
    const [daysInMonth,setDaysInMonth]= useState<Date[]>([]);
    const [activeDate, setActiveDate] = useState<Date | null>(null);
    const [dayRefs, setDayRefs] = useState<RefObject<HTMLDivElement>[]>([]);

    

    const setDays7Plus = () => {
        const tempDaysInMonth = eachDayOfInterval({
            start: startOfMonth(currentDate),
            end: addDays(startOfMonth(currentDate), 6),
        });
        return tempDaysInMonth;
    }
    const setDays7Minus = () => {
        const tempDaysInMonth = eachDayOfInterval({
            start: startOfMonth(currentDate),
            end: endOfMonth(currentDate),//addDays(firstDayOfMonth, 6),
        });
        return tempDaysInMonth;
    }
    const setDays = () => {
        const tempDaysInMonth = eachDayOfInterval({
            start: startOfMonth(currentDate),
            end: endOfMonth(currentDate),//addDays(firstDayOfMonth, 6),
        });
        return tempDaysInMonth;
    }
    const oneMonthBack = () =>{
        setCurrentDate(current => addMonths(current, 1));
    }
    const oneMonthForward = () => {
        setCurrentDate(current => subMonths(current, 1));
    }
    const parseDate = (dateString: any) => {
        return parse(dateString, "d.M.yyyy HH:mm", new Date());
    };
    const dayClick = (date: any) => {
        setActiveDate(date)
        if(user){
            const activitiesDay = user.activities.filter(activity => {
                const activityDate = parseDate(activity.date);
                return isSameDay(activityDate, date);
            });
            setActivitiesPerDay(activitiesDay);
        }   
    }

    useEffect(() => {
        // Create a ref for each day in the month
        setDayRefs(daysInMonth.map(_ => React.createRef()));
    }, [daysInMonth]);


    const startIndex = startOfMonth(currentDate).getDay();
    useEffect(() => {
        setMonth(MonthInYear[currentDate.getMonth()]);
        setYear(currentDate.getFullYear());
        setFirstDayOfMonth(startOfMonth(currentDate));
        setLastDayOfMonth(endOfMonth(currentDate));
        const thisDaysInMonth = setDays();
        setDaysInMonth(thisDaysInMonth);

        dayClick(new Date());
    }, [currentDate, user])

    useEffect(() => {
        const refIndex = activeDate ? activeDate.getDate() - 1 : -1;
        if (refIndex >= 0 && refIndex < dayRefs.length && dayRefs[refIndex]?.current) {
            dayRefs[refIndex].current!.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, [activeDate, dayRefs]);
    
    

    return (
        <div className='container-calendar'> 
            <div className='some-page-wrapper'>
                <div className='row'>
                    <p onClick={oneMonthForward} className='columnArrowRight'> <IonIcon aria-hidden="true" icon={chevronForward} /></p>
                    <p className='column-year'>{t(month)} {year}</p>
                    <p onClick={oneMonthBack} className='columnArrowLeft'> <IonIcon aria-hidden="true" icon={chevronBack} /></p>
                </div>
            </div>

            <div className='some-page-wrapper-day'>
                <div className='row'>
                    <div style={{paddingBottom:"10px"}}>
                        <div className='column'> 
                            {daysInMonth.map((date, i) => (<div key={i} className='column-day-name'>{daysInWeek[date.getDay()].hebNameShort}</div>))}
                        </div>
                        <div className='column'>
                            {daysInMonth.map((date, i) => (
                                <div    key={i} 
                                        ref={dayRefs[i]}
                                        onClick={() => dayClick(date)}  
                                        className={`column-day ${activeDate && isSameDay(date, activeDate) ? 'active' : ''}`}>
                                {date.getDate()}
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Calendar;
