import React from "react";
import botTypeClasses from "./BotCard"

const YourBotArmy = ({ enlistedBots }) => {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {enlistedBots.map((bot) => (
            <div key={bot.id} className="ui card">
              <div className="image">
                <img alt="oh no!" src={bot.avatar_url} />
              </div>
              <div className="content">
                <div className="header">
                  {bot.name}
                  <i className={botTypeClasses[bot.bot_class]} />
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
          ))}
        </div>
      </div>
    </div>
  );
};


export default YourBotArmy;


