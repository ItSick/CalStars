import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { useTranslation } from 'react-i18next';

const Tab3: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("Weight")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t("Weight")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={t("Weight")} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
