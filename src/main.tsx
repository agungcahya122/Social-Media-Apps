import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store, persistor } from "./utils/redux/store/store";
import Routes from "./routes/index";
import "../src/styles/index.css";
// import "animate.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);
