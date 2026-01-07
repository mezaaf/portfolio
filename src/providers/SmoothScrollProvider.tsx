"use client";

import LocomotiveScroll from "locomotive-scroll";
import { createContext, ReactNode, useEffect, useState } from "react";

export const SmoothScrollContext = createContext({
  scroll: null as LocomotiveScroll | null,
});

interface SmoothScrollProviderProps {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  option?: any;
}

export const SmoothScrollProvider = ({
  children,
  option,
}: SmoothScrollProviderProps) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;
          setScroll(
            new LocomotiveScroll({
              el: document.querySelector("[data-scroll-container]"),
              ...option,
            })
          );
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }

    return () => {
      scroll?.destroy();
    };
  }, [option, scroll]);

  return (
    <SmoothScrollContext.Provider
      value={{
        scroll,
      }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
};
