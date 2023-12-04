import React from "react";
import BotCard from "./BotCard"; 

const YourBotArmy = ({ enlistedBots, onRelease }) => {
  const handleRelease = (bot) => {
    onRelease(bot);
  };

  const renderBotCard = (bot) => (
    <div
      key={bot.id}
      className="ui card"
      onClick={() => handleRelease(bot)}
    >
      <div className="image">
        <img alt="oh no!" src={bot.avatar_url} />
      </div>
      <div className="content">
        <div className="header">
          {bot.name}
          <i className={BotCard[bot.bot_class]} /> 
        </div>
        <div className="meta text-wrap">
          <small>{bot.catchphrase}</small>
        </div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat" />
          {bot.health}
        </span>
        <span>
          <i className="icon lightning" />
          {bot.damage}
        </span>
        <span>
          <i className="icon shield" />
          {bot.armor}
        </span>
      </div>
    </div>
  );

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {enlistedBots.map(renderBotCard)}
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
