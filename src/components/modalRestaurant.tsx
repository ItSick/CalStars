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
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonIcon } from '@ionic/react';
import { restaurant,arrowForward } from 'ionicons/icons';
import './modalRestaurant.css';

function modalRestaurant() {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState("");

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  return (
    <div>
     
        {/* <IonButton id="open-modal" expand="block">
          Open
        </IonButton> */}
        {/* <div id="open-modal-restaurant" className='column-icon restaurant'>
            <IonIcon aria-hidden="true" icon={restaurant} />
        </div> */}
        <IonButton id="open-modal-restaurant" 
                  expand="block" 
                  style={{backgroundColor:"white",color:"yellow", border:"1px solid yellow",borderRadius:"10px", height:"30px"}}
                  strong={true}>
                  הוסף חדש
          </IonButton>
        <p>{message}</p>
        <IonModal ref={modal} trigger="open-modal-restaurant" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  <IonIcon aria-hidden="true" icon={arrowForward} />
                </IonButton>
              </IonButtons>
              <IonTitle>מאכל חדש</IonTitle>
              <IonButtons slot="end">
                <IonButton style={{backgroundColor:"#4d9672",color:"white", borderRadius:"10px"}} strong={true} onClick={() => confirm()}>
                  הוסף
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonInput
                style={{borderBottom:'1px solid #4d9672'}}
                label="שם המאכל"
                labelPlacement="stacked"
                ref={input}
                type="text"
                placeholder=""
              />
            </IonItem>
            <IonItem>
              <IonInput
                style={{borderBottom:'1px solid #4d9672'}}
                  label="כמות"
                  labelPlacement="stacked"
                  ref={input}
                  type="text"
                  placeholder=""
                />
            </IonItem>
            <IonItem>
              <IonInput
                style={{borderBottom:'1px solid #4d9672'}}
                label="כוכבים אדומים"
                labelPlacement="stacked"
                ref={input}
                type="text"
                placeholder=""
              />
            </IonItem>              
            <IonItem>
              <IonInput
                style={{borderBottom:'1px solid #4d9672'}}
                label="כוכבים צהובים"
                labelPlacement="stacked"
                ref={input}
                type="text"
                placeholder=""
              />
            </IonItem>  
          </IonContent>
        </IonModal>
      
    </div>
  );
}

export default modalRestaurant;