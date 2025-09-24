import { HelmetProvider } from "@dr.pogodin/react-helmet";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import "./index.css";
import { persistor, store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    </PersistGate>
  </StrictMode>
);
