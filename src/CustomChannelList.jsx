import React, { useState } from "react";
import {
  ChannelList as SBChannelList,
  useSendbirdStateContext
} from "sendbird-uikit";

export default function CustomChannelList({ setCurrentChannelUrl }) {
  const [channelListQuery] = useState({
    channelListQuery: {
      includeEmpty: true
    }
  });

  const globalState = useSendbirdStateContext();
  return (
    <SBChannelList
      // to set query
      queries={channelListQuery}
      // to set is distinct
      onBeforeCreateChannel={(selectedUsers) => {
        const sdk = globalState?.stores?.sdkStore?.sdk;
        const channelParams = new sdk.GroupChannelParams();
        channelParams.addUserIds(selectedUsers);
        channelParams.isDistinct = true;
        return channelParams;
      }}
      onChannelSelect={(channel) => {
        if (channel?.url) {
          setCurrentChannelUrl(channel?.url);
        }
      }}
    />
  );
}
