import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import type { RootState } from "../context/redux/store";
import { Activity, ActivityData, RestaurantActivityData } from '../context/userDataReducer';

const Tab1: React.FC = () => {

  const [userName, setUserName] =  useState("");

  const user = useSelector((state: RootState) => state.userData.user);
 

  useEffect(() => {

    if (user){
      setUserName(user.name);
    }
    
  }, [user]);

  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("Home")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>היי {userName},</h1>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t("Home")}</IonTitle>
          </IonToolbar>
        </IonHeader> */}

        {/* <ExploreContainer name={t("Home")} /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
