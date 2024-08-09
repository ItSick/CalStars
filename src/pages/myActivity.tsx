import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonInput,
  IonSearchbar,
  IonDatetime,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonIcon } from '@ionic/react';
import { arrowForward, restaurant } from 'ionicons/icons';
import './myActivity.css';
import { format } from 'date-fns/format';
import TimeModal from '../components/timeModal';
import { useHistory } from 'react-router-dom';


function MyActivity() {

  const history = useHistory();
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpenPicker = () => {
    setShowPicker(true);
};
  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }
  const navigateToActions = () => {
    history.push('/Tab2');
  };
  return (
    <IonPage>
    
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={navigateToActions}> <IonIcon aria-hidden="true" icon={arrowForward} /></IonButton>
              </IonButtons>
              <IonTitle>הפעילויות שלי</IonTitle>
              <IonButtons slot="end">
              <IonButton style={{backgroundColor:"#4d9672",color:"white", borderRadius:"10px"}} strong={true} onClick={() => confirm()}>
                  שמור
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className='item-div'>
                <IonSearchbar className="custom" showClearButton="focus" placeholder="חיפוש וסינון"></IonSearchbar>
                <TimeModal name='active' />
                <IonButton style={{backgroundColor:"white",color:"yellow", border:"1px solid yellow",borderRadius:"10px", height:"30px"}} strong={true} onClick={handleOpenPicker}>
                  הוסף חדש
                </IonButton>
            </div> 
          </IonContent>
    </IonPage>
  );
}

export default MyActivity;