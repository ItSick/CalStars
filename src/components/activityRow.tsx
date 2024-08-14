import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './activityRow.css';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { IonCard, IonIcon } from '@ionic/react';
import { sunny, star , starHalf } from 'ionicons/icons';


interface ActivityRowProps {
    activities: any; // Use the Data interface defined above
}
    const ActivityRow: React.FC<ActivityRowProps> = ({activities}) => {

        const { t } = useTranslation();
        const createStarIcons = (starString: string) => {
            const rating = parseFloat(starString); // Convert the string to a float
            if (isNaN(rating)) return []; // Safeguard against non-numeric inputs
            const fullStarsCount = Math.floor(rating); // Determine the number of full stars
            const halfStarNeeded = (rating % 1) >= 0.5; // Check if a half-star is needed
            const stars = [];

            for (let i = 0; i < fullStarsCount; i++) {
                stars.push(<IonIcon key={`full-${i}`} icon={star} />);
            }

            if (halfStarNeeded) {
                stars.push(<IonIcon key="half" icon={starHalf} />);
            }

            return stars;
        };

        return (
            <div className='container-TL'>
                {activities && 
                activities.map((activity:any, index: number) =>  
                    <IonCard key={index} className='ion-card-style'>
                        <div  className='activity-row'>
                            <div className='time-wrapper'>
                                <div className='time-icon'><IonIcon icon={sunny} /></div>
                                <div>{format(parse(activity.date,"d.M.yyyy HH:mm",new Date()),"HH:mm")}</div>
                            </div>
                            {activity.name === "restaurant" && (
                                <React.Fragment>
                                    <div className='stars-wrapper'>
                                        {activity.data.yellowStars? 
                                        <div className='yellow-stars'>
                                            <IonIcon icon={star} />
                                            {activity.data.yellowStars}
                                        </div>
                                        :
                                        <div className='yellow-stars'>
                                        <IonIcon icon={star} />
                                        {0}
                                    </div>
                                        }
                                        {activity.data.redStars? 
                                        <div className='red-stars'>
                                            <IonIcon icon={star} />
                                            {activity.data.redStars }
                                        </div>
                                        :
                                        <div className='red-stars'>
                                            <IonIcon icon={star} />
                                            {0}
                                        </div>
                                        }
                                    </div>
                                    <div className='food-name-wrapper'>
                                        <div></div>
                                        <div className='food-name'>{activity.data.foodName}</div>
                                    </div>
                                    
                                </React.Fragment>
                            )}
                            {activity.name === "sport" && (
                                <div>{activity.data.name} {activity.data.time} </div>
                            )}
                            {activity.name === "pint" && (
                                <div>{activity.data.beverageName}  {activity.data.cups} </div>
                            )}
                            {activity.name === "chat" && (
                                <div>{activity.data.feeling}</div>
                            )}
                            {activity.name === "target" && (
                                <div>{activity.data.goal}</div>
                            )}
                        </div>
                    </IonCard>)} 
            </div>
        );
    };

export default ActivityRow;
