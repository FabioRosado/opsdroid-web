import React from "react";
import { UIStore } from "../store";
import { connectToWebsocket } from "../websockets";

export const ConnectionSettings = (): React.ReactElement => {
  const { host, port, sslEnabled, showSettings } = UIStore.useState((s) => ({
    host: s.clientSettings.host,
    port: s.clientSettings.port,
    sslEnabled: s.clientSettings.sslEnabled,
    showSettings: s.clientSettings.showSettings,
  }));

  const toggleSSL = () => {
    UIStore.update((s) => {
      s.clientSettings.sslEnabled = !sslEnabled;
    });
  };

  const updatePort = (e: React.FormEvent<HTMLInputElement>) => {
    UIStore.update((s) => {
      s.clientSettings.port = e.currentTarget.value;
    });
  };

  const updateHost = (e: React.FormEvent<HTMLInputElement>) => {
    UIStore.update((s) => {
      s.clientSettings.host = e.currentTarget.value;
    });
  };

  return (
    <div
      id="connection-settings"
      className={showSettings ? "active" : "inactive"}
    >
      <button id="ssl-enabled" onClick={toggleSSL}>
        {sslEnabled ? "https://" : "http://"}
      </button>
      <input
        type="text"
        id="host"
        placeholder={host}
        defaultValue={host}
        onChange={updateHost}
      />
      <input
        type="text"
        id="port"
        placeholder={port}
        defaultValue={port}
        onChange={updatePort}
      />
      <input
        type="submit"
        id="connect"
        value="Connect"
        onClick={connectToWebsocket}
      />
    </div>
  );
};