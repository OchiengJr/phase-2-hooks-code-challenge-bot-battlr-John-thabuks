import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    console.log("Bot enlisted:", bot);
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots} />
      <BotCollection onEnlist={enlistBot} />
    </div>
  );
}

export default BotsPage;
