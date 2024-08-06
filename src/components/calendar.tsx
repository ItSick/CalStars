
import React, { useEffect, useState } from 'react';
import './calendar.css';
import { useTranslation } from 'react-i18next';
import { chevronBack, chevronForward} from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { addDays, addMonths, eachDayOfInterval, endOfMonth, format, startOfMonth, subMonths, getYear, getMonth,getDay, parse } from "date-fns";
//import { useSwipeable } from 'react-swipeable';
import userActivities from '../stub/userActivities';



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
const Calendar: React.FC = () => {

    const { t } = useTranslation();

    
    const [currentDate, setCurrentDate]= useState(new Date());
    const formated = format(currentDate, 'dd.MM.yyyy HH:mm');
    console.log(formated)
    const [month, setMonth]=useState("");
    const [year, setYear]=useState(0);
    const [firstDayOfMonth, setFirstDayOfMonth]= useState<Date>(currentDate);
    const [lastDayOfMonth, setLastDayOfMonth]= useState<Date>(currentDate);
    const [daysInMonth,setDaysInMonth]= useState<Date[]>([]);
    const [activitiesPerDay, setActivitiesPerDay]=useState<any>([]);

    

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
    const dayClick = (date: any) => {
        debugger
        const selectedDate = typeof date === 'string' ? parse(date, 'yyyy-MM-dd', new Date()) : date;
    
        const day = getDay(selectedDate);
        const month = getMonth(selectedDate);
        const year = getYear(selectedDate);
        console.log(selectedDate);
    
        // Filtering activities where their date matches the selected date
        const activitiesDay = userActivities.user.activities.filter(activity => {
            // Parse each activity date, handle empty dates by returning false
            if (!activity.date) return false;
            const activityDate = parse(activity.date, 'd.M.yyyy HH:mm', new Date());
            return getDay(activityDate) === day && getMonth(activityDate) === month && getYear(activityDate) === year;
        });
    
        // Update the state with the filtered activities
        setActivitiesPerDay(activitiesDay);
    }

    const startIndex = startOfMonth(currentDate).getDay();
    useEffect(() => {
        console.log(userActivities);
        setMonth(MonthInYear[currentDate.getMonth()]);
        setYear(currentDate.getFullYear());
        setFirstDayOfMonth(startOfMonth(currentDate));
        setLastDayOfMonth(endOfMonth(currentDate));
        const thisDaysInMonth = setDays();
        setDaysInMonth(thisDaysInMonth);
       
    }, [currentDate])
   
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
                            {daysInMonth.map((date, i) => (<div key={i} onClick={() => dayClick(date)} className='column-day'>{date.getDate()}</div>))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Calendar;
