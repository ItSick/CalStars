import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useTranslation } from 'react-i18next';
import Calendar from '../components/calendar';
import DayTimeLine from '../components/dayTimeLine';
import Actions from '../components/actions';

const data = {
  name:"",
  redStar:"",
  yellowStar:"",
  time:""
}

const Tab2: React.FC = () => {
  const { t } = useTranslation();
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
        <Calendar></Calendar>
        <Actions></Actions>
        <DayTimeLine data={data}></DayTimeLine>
        </IonContent>
    </IonPage>
  );
};

export default Tab2;
