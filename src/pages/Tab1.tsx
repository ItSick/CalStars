import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useTranslation } from 'react-i18next';

const Tab1: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("Home")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t("Home")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={t("Home")} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
