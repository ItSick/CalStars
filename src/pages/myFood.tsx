import React, { useState, useRef, useEffect } from 'react';
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
  IonList,
  IonCard,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonIcon } from '@ionic/react';
import { arrowForward, star , starHalf } from 'ionicons/icons';
import './myFood.css';
import { format } from 'date-fns/format';
import TimeModal from '../components/timeModal';
import { useHistory } from 'react-router-dom';
import ModalRestaurant from '../components/modalRestaurant';
import userActivities from '../stub/userActivities';

interface Activity {
  name: string;
  date: string;
  data: {
    foodName?: string;
    quantity?: string;
    redStars?: string;
    yellowStars?: string;
    // name?: string;
    // time?: number;
    // peopleNum?: string;
    // beverageName?: string;
    // cups?: number;
    // feeling?: string;
  };
}
function MyFood() {

  const history = useHistory();
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [message, setMessage] = useState("");
  const [foodList, setFoodList]=useState<Activity[]>([]);
  

  useEffect(() => {
    const tempFoodList = userActivities.user.activities.filter(a => a.name == "restaurant")
    setFoodList(tempFoodList);
  }, [userActivities])
  
  const createStarIcons = (starString: string) => {
    const rating = parseFloat(starString); // Convert the string to a float
    if (isNaN(rating)) return []; // Safeguard against non-numeric inputs
  
    const fullStarsCount = Math.floor(rating); // Determine the number of full stars
    const halfStarNeeded = (rating % 1) >= 0.5; // Check if a half-star is needed
    const stars = [];
  
    for (let i = 0; i < fullStarsCount; i++) {
      stars.push(<IonIcon key={`full-${i}`} icon={star} />);
    }
  
    if (halfStarNeeded) {
      stars.push(<IonIcon key="half" icon={starHalf} />);
    }
  
    return stars;
  };
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
              <IonTitle>המאכלים שלי</IonTitle>
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
                <TimeModal name='food'/>
                <ModalRestaurant />
                {/* <IonButton style={{backgroundColor:"white",color:"yellow", border:"1px solid yellow",borderRadius:"10px", height:"30px"}} strong={true} onClick={handleOpenPicker}>
                  הוסף חדש
                </IonButton> */}
            </div> 
            <div>
              {foodList.map((food, index) => (
                <IonCard key={index}>
                  <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", padding: "5px"}}>
                    <div style={{display:"flex",gap:3, flexDirection:"column"}}>
                      <div style={{fontSize:"15px", fontWeight:"bold", color:"black"}}>{food.data.foodName}</div>
                      <div style={{fontSize:"13px"}}>{food.data.quantity}</div>
                    </div>
                    <div style={{display:"flex",gap:2, flexDirection:"row"}}>
                    {(food.data.yellowStars != "") && <div style={{color: "#ebcc1e"}}>{createStarIcons(food.data.yellowStars || "0")}</div>}
                    {food.data.redStars != "" && <div style={{color: "red"}}>{createStarIcons(food.data.redStars|| "0")}</div>}
                    </div>
                  </div>
                </IonCard>
              ))}
            </div>
          </IonContent>
    </IonPage>
  );
}

export default MyFood;