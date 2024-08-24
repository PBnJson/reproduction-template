"use client";

import { useEffect } from "react";
import { useUserStore } from "../stores/user";

const Layout = ({ children }) => {
  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      useUserStore
        .getState()
        .set_deferred_pwa_install({ deferred_pwa_install: event });
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  return <div>{children}</div>;
};

export default Layout;
