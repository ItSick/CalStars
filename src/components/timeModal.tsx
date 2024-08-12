import React, { useRef, useState } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonDatetime } from '@ionic/react';

import './timeModal.css';
import { format } from 'date-fns/format';

interface Props{
    name: string;
}

function TimeModal({ name }: Props) {
    const modal = useRef<HTMLIonModalElement>(null);
    const [selectedTime, setSelectedTime] = useState(format(new Date(), "HH:mm"));

    return (
        <div>
            <IonButton id={`open-modal-${name}`} expand="block" className="open-modal-btn" strong={true}>
                {selectedTime}
            </IonButton> 
            <IonModal  style={{ '--height': 'auto' }}  ref={modal} trigger={`open-modal-${name}`} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className="block">
                <IonDatetime 
                    presentation="time" 
                    value={selectedTime} 
                    onIonChange={e => {
                        const value = e.detail.value;
                        if (typeof value === 'string') {
                            setSelectedTime(value);
                        }
                    }}
                    />
                </div>
            </IonModal>
        </div>
    );
}

export default TimeModal;