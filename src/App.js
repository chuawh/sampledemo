import React, { useState } from "react";
import en from "date-fns/locale/en-US";
import { SendBirdProvider as SBProvider } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

import "./styles.css";

import { APP_ID } from "./const";
import CustomizedApp from "./CustomizedApp";
import Login from "./Login";

export default function App() {
  const [userId, setUserId] = useState("");
  const [nickname, setNickname] = useState("");
  const [theme, setTheme] = useState("light");

  if (!userId || !nickname) {
    return (
      <Login
        onSubmit={(v) => {
          setUserId(v.userId);
          setNickname(v.nickname);
          setTheme(v.theme);
        }}
      />
    );
  }

  return (
    <div className="app-wrapper">
      <SBProvider
        dateLocale={en}
        appId={APP_ID}
        userId={userId}
        theme={theme}
        nickname={nickname}
      >
        <CustomizedApp />
      </SBProvider>
    </div>
  );
}
