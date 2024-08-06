import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './actions.css';
import { IonIcon } from '@ionic/react';
import { restaurant , bicycle, pint, chatbubbleEllipses,disc } from 'ionicons/icons';
import ModalRestaurant from './modalRestaurant';
import ModalBicycle from './modalBicycle';
import ModalPint from './modalPint';
import ModalChatbubble from './modalChatbubble';
import ModalDisc from './modalDisc';
import MyFood from '../pages/myFood';
import { useHistory } from 'react-router-dom';


    const Actions: React.FC = () => {

        const { t } = useTranslation();
        const actions = ["food","workout","water","chat","target"];
        const history = useHistory();
        const navigateToPage = (page: string) => {
            history.push(page);
        };
        return (
            <div className='container-actions'>
                <div className='some-page-wrapper-icon'>
                <div className='row-icon'>
                    <div>
                        <div className='column-actions'> 
                        {/* <MyFood />
                        <ModalBicycle />
                        <ModalPint />
                        <ModalChatbubble />
                        <ModalDisc /> */}
                            <div className='column-day restaurant' onClick={() => navigateToPage('/myFood')}>
                                <IonIcon aria-hidden="true" icon={restaurant}/>
                            </div>
                            <div className='column-day bicycle' onClick={() => navigateToPage('/myActivity')}>
                                <IonIcon aria-hidden="true" icon={bicycle} />
                            </div>

                            <div className='column-day pint' onClick={() => navigateToPage('/myBeverage')}>
                                <IonIcon aria-hidden="true" icon={pint} />
                            </div>
                            <div className='column-day chatbubble' onClick={() => navigateToPage('/myChat')}>
                                <IonIcon aria-hidden="true" icon={chatbubbleEllipses} />
                            </div>
                            <div className='column-day disc' onClick={() => navigateToPage('/myTarget')}>
                                <IonIcon aria-hidden="true" icon={disc} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    };

export default Actions;
