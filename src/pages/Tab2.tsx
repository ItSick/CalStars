import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useTranslation } from 'react-i18next';
import Calendar from '../components/calendar';
import DayTimeLine from '../components/dayTimeLine';
import Actions from '../components/actions';



const Tab2: React.FC = () => {
  
  const { t } = useTranslation();
  const [activities, setActivities] = useState([]);

  const setActivitiesPerDay = (activitiesPerDay: any) => {
    setActivities(activitiesPerDay);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("Calendar")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t("Calendar")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Calendar setActivitiesPerDay={setActivitiesPerDay}></Calendar>
        <Actions></Actions>
        <DayTimeLine activities={activities}></DayTimeLine>
        </IonContent>
    </IonPage>
  );
};

export default Tab2;
