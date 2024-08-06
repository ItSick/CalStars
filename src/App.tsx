import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, calendar, scale,restaurant , book } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';
import { I18nContext, useTranslation } from 'react-i18next';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MyFood from './pages/myFood';
import MyActivity from './pages/myActivity';
import MyBeverage from './pages/myBeverage';
import MyChat from './pages/myChat';
import MyTarget from './pages/myTarget';

setupIonicReact();

function App() {
  const { i18n } = useContext(I18nContext);
  const { t } = useTranslation();

  useEffect(() => {
    const setDirection = () => {
      document.documentElement.setAttribute(
        'dir', ['he', 'ar'].includes(i18n.language) ? 'rtl' : 'ltr');
    };

    setDirection();

    i18n.on('languageChanged', setDirection);
  
    return () => {
      i18n.off('languageChanged', setDirection);
    };
  }, [i18n]);

  return (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab4 />
          </Route>
          <Route path="/tab5">
            <Tab5 />
          </Route>
          <Route path="/myFood">
            <MyFood />
          </Route>
          <Route path="/myActivity">
            <MyActivity />
          </Route>
          <Route path="/myBeverage">
            <MyBeverage />
          </Route>
          <Route path="/myChat">
            <MyChat />
          </Route>
          <Route path="/myTarget">
            <MyTarget />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>{t("Home")}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={calendar} />
            <IonLabel>{t("Calendar")}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={scale} />
            <IonLabel>{t("Weight")}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon aria-hidden="true" icon={restaurant} />
            <IonLabel>{t("Recipes")}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/tab5">
            <IonIcon aria-hidden="true" icon={book} />
            <IonLabel>{t("Menus")}</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  );
}
export default App;
