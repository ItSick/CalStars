import React, { useRef, useState } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonDatetime } from '@ionic/react';

import './timeModal.css';
import { format } from 'date-fns/format';

function TimeModal() {
    const modal = useRef<HTMLIonModalElement>(null);
    const [selectedTime, setSelectedTime] = useState(format(new Date(), "HH:mm"));

    return (
        <div>
            <IonButton id="open-modal" expand="block" className="open-modal-btn" strong={true} onClick={() => confirm()}>
                {selectedTime}
            </IonButton> 
            <IonModal  style={{ '--height': 'auto' }}  ref={modal} trigger="open-modal" initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className="block">
                <IonDatetime 
                    presentation="time" 
                    value={selectedTime} 
                    onIonChange={e => {
                        const value = e.detail.value;
                        if (typeof value === 'string') {
                          setSelectedTime(value);
                          console.log(value)
                        }
                      }}
                    />
                </div>
            </IonModal>
        </div>
    );
}

export default TimeModal;