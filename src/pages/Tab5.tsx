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
          <IonTitle>Menus</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Menus</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Menus" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
