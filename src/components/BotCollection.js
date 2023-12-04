import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection({ onEnlist, onRelease, onDischarge }) {   
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Couldn't fetch the bot data");
        }
        return response.json();
      })
      .then((data) => setBots(data))
      .catch((error) => console.error("Error encountered", error));
  }, []);

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onEnlist={onEnlist}
            onRelease={onRelease}      //Edited
            onDischarge={onDischarge}   //Edited
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
