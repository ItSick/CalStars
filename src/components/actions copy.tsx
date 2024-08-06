import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './actions.css';
import { IonIcon } from '@ionic/react';
import { restaurant , bicycle, pint, chatbubbleEllipses,disc } from 'ionicons/icons';
import ModalRestaurant from './modalRestaurant'

    const Actions: React.FC = () => {

        const { t } = useTranslation();
        const actions = ["food","workout","water","chat","target"]
        return (
            <div className='container-actions'>
                <div className='some-page-wrapper-icon'>
                <div className='row-icon'>
                    <div>
                        <div className='column-actions'> 
                        <ModalRestaurant/>
                            {/* <div className='column-day restaurant'>
                                <IonIcon aria-hidden="true" icon={restaurant} />
                            </div> */}
                            <div className='column-day bicycle'><IonIcon aria-hidden="true" icon={bicycle} /></div>
                            <div className='column-day pint'><IonIcon aria-hidden="true" icon={pint} /></div>
                            <div className='column-day chatbubble'><IonIcon aria-hidden="true" icon={chatbubbleEllipses} /></div>
                            <div className='column-day disc'><IonIcon aria-hidden="true" icon={disc} /></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    };

export default Actions;
