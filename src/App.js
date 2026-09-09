import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { AnimatedSplash } from "./pages/splash/Splash";
import { settings } from "./portfolio";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(settings.isSplash);

  useEffect(() => {
    if (settings.isSplash) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <AnimatePresence>
          {loading && (
            <motion.div
              key="global-preloader"
              initial={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
              style={{ position: "fixed", inset: 0, zIndex: 999999 }}
            >
              <AnimatedSplash theme={chosenTheme} />
            </motion.div>
          )}
        </AnimatePresence>
        <div style={{ width: "100%" }}>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
