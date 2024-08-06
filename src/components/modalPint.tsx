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
import { arrowForward, pint } from 'ionicons/icons';
import './modalPint.css';

function ModalPint() {
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
    <IonPage style={{marginRight: '135px',height:"100px"}}>
      <IonHeader>
        
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <IonButton id="open-modal" expand="block">
          Open
        </IonButton> */}
        <div id="open-modal-pint" className='column-icon pint'><IonIcon aria-hidden="true" icon={pint} /></div>
        <p>{message}</p>
        <IonModal ref={modal} trigger="open-modal-pint" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}> <IonIcon aria-hidden="true" icon={arrowForward} /></IonButton>
              </IonButtons>
              <IonTitle>משקה חדש</IonTitle>
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
                label="שם משקה"
                labelPlacement="stacked"
                ref={input}
                type="text"
                placeholder=""
              />
            </IonItem>
            <IonItem>
              <IonInput
                  style={{borderBottom:'1px solid #4d9672'}}
                  label="מספר כוסות"
                  labelPlacement="stacked"
                  ref={input}
                  type="text"
                  placeholder=""
                />
            </IonItem>  
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default ModalPint;