import React, { createContext, useEffect, useState } from "react";
export const LayoutContext = createContext();

function ResponsiveWrapper({ children }) {
  const [layout, setLayout] = useState("desktop"); 

  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      if (w < 768) setLayout("mobile");
      else if (w < 1024) setLayout("tablet");
      else setLayout("desktop");
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <LayoutContext.Provider value={layout}>
      <div
        className="min-h-screen w-full bg-black text-green-400 font-mono"
        style={{ overflowX: "hidden" }}
      >
        <div
          className={`mx-auto w-full ${
            layout === "desktop" ? "max-w-screen-xl" : "max-w-3xl"
          } px-4 sm:px-6 lg:px-8 py-6`}
        >
          {children}
        </div>
      </div>
    </LayoutContext.Provider>
  );
}
export default ResponsiveWrapper;
