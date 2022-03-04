import React, { useState } from "react";
import {
  Channel as SBConversation,
  ChannelSettings as SBChannelSettings
} from "sendbird-uikit";

import CustomChatHeader from "./CustomChatHeader";
import CustomChannelList from "./CustomChannelList";

function CustomizedApp(props) {
  // useState
  const [currentChannelUrl, setCurrentChannelUrl] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="customized-app">
      <div className="sendbird-app__wrap">
        <div className="sendbird-app__channellist-wrap">
          <CustomChannelList setCurrentChannelUrl={setCurrentChannelUrl} />
        </div>
        <div className="sendbird-app__conversation-wrap">
          <SBConversation
            // uncomment next line to see a customized channel title
            // renderChatHeader={CustomChatHeader}
            onChatHeaderActionClick={() => {
              if (showSettings) {
                setShowSettings(false);
              } else {
                setShowSettings(true);
              }
            }}
            channelUrl={currentChannelUrl}
          />
        </div>
        {showSettings && (
          <div className="sendbird-app__settingspanel-wrap">
            <SBChannelSettings
              channelUrl={currentChannelUrl}
              onCloseClick={() => {
                setShowSettings(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomizedApp;
