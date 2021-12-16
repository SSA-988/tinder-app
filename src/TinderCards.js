import React, { useEffect, useState } from 'react';
import './TinderCards.css';
import TinderCard from "react-tinder-card";
import axios from "./axios";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(()=>{
      async function fetchData(){
        const request = await axios.get('/tinder/cards');
        setPeople(request.data);

      }
      fetchData();
    },[]);
    console.log(people);
    const swiped = (direction,nameToDelete) => {
      console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
      console.log(name + "left the sscreen")
    }
    return (
      <div className="tindercards">
        <div className="tindercards_container">
          {people.map((person) => (
            <TinderCard 
            className="tindercards_swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir)=>swiped(dir,person.name)}
            onCardLeftScreen={()=>outOfFrame(person.name)}
            
            >
              <div className="card" style={{backgroundImage: `url(${person.imgUrl})`}}> 
                <h3>{person.name}</h3>
              </div>

            </TinderCard>
          ))}
        </div>
      </div>
    );
}

export default TinderCards




// {
      //   name: "deepika padukone",
      //   url: "https://deadline.com/wp-content/uploads/2021/01/Deepika-Padukone.jpg?w=681&h=383&crop=1",
      // },
      // {
      //   name: "Katrina Kaif",
      //   url: "https://static.toiimg.com/photo/70067330.cms",
      // },