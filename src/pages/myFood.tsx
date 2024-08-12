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
//import userActivities from '../stub/userActivities';
import { useSelector } from 'react-redux';
import type { RootState } from "../context/redux/store";
import { Activity, ActivityData, RestaurantActivityData } from '../context/userDataReducer';



interface FoodActivity extends Activity {
  data: {
    foodName: string;
    quantity: string;
    redStars?: string;
    yellowStars?: string;
  };
}

function MyFood() {

  const history = useHistory();
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [message, setMessage] = useState("");
  const [foodList, setFoodList]=useState<Activity[]>([]);

  
  
  const user = useSelector((state: RootState) => state.userData.user);
  console.log("data",user);
 

  // useEffect(() => {
  //   console.log("activities",activities)
  //   const tempFoodList = activities
  //     .filter((a): a is FoodActivity => a.name === "restaurant")
  //     .map(a => a as FoodActivity);
  
  //   setFoodList(tempFoodList);
  // }, [activities]);
  

  function isRestaurantActivityData(data: ActivityData): data is RestaurantActivityData {
    return (
      (data as RestaurantActivityData).foodName !== undefined &&
      (data as RestaurantActivityData).quantity !== undefined &&
      (data as RestaurantActivityData).yellowStars !== undefined &&
      (data as RestaurantActivityData).redStars !== undefined
    );
  }

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
                  {isRestaurantActivityData(food.data) && (
                    <>
                      <div style={{ display: "flex", gap: 3, flexDirection: "column" }}>
                        <div style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}>
                          {food.data.foodName}
                        </div>
                        <div style={{ fontSize: "13px" }}>
                          {food.data.quantity}
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 2, flexDirection: "row" }}>
                        {food.data.yellowStars && <div style={{ color: "#ebcc1e" }}>{createStarIcons(food.data.yellowStars)}</div>}
                        {food.data.redStars && <div style={{ color: "red" }}>{createStarIcons(food.data.redStars)}</div>}
                      </div>
                    </>
                  )}
                  </div>
                </IonCard>
              ))}
            </div>
          </IonContent>
    </IonPage>
  );
}

export default MyFood;