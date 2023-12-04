import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [availableBots, setAvailableBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    console.log('Bot enlisted:', bot);

    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (bot) => {
    const updatedEnlistedBots = enlistedBots.filter(
      (enlistedBot) => enlistedBot.id !== bot.id
    );
    setEnlistedBots(updatedEnlistedBots);
  };


  const dischargeBot = async (bot) => {
    try {
      // Make an API call to delete the bot from the backend
      const response = await fetch(`http://localhost:8002/bots/${bot.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to discharge bot');
      }

      // Remove the bot from the enlistedBots state
      const updatedEnlistedBots = enlistedBots.filter(
        (enlistedBot) => enlistedBot.id !== bot.id
      );
      setEnlistedBots(updatedEnlistedBots);

      console.log('Bot discharged successfully');
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8002/bots');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setAvailableBots(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots} onRelease={releaseBot} />
      <BotCollection
        availableBots={availableBots}
        onEnlist={enlistBot}
        onRelease={releaseBot} 
        onDischarge={dischargeBot}   
      />
    </div>
  );
}

export default BotsPage;