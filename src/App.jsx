import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { AppRouter } from "./router/AppRouter";
import { RecordProvider } from "./context/RecordContext";
import { SnackbarProvider } from "notistack";
import { ModalProvider } from "./context/DialogContext";

function App() {
  return (
    <AuthProvider>
      <SnackbarProvider />
      <RecordProvider>
        <ModalProvider>
          <AppRouter />
        </ModalProvider>
      </RecordProvider>
    </AuthProvider>
  );
}

export default App;
