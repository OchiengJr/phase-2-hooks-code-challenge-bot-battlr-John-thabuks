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
      />
    </div>
  );
}

export default BotsPage;
