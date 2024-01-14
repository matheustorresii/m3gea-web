import React, { useState, createContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./common/navigation/router";
import Error from "./ui/components/error";

export const ToastContext = createContext({ showErrorToast: (message) => {} })

function App() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('Não foi possível fazer essa parada ai não mano de verdade mesmo');

  function showErrorToast(message) {
    setToastMessage(message);
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false)
    }, 5000);
  }

  return (
    <ToastContext.Provider value={{ showErrorToast }}>
      <RouterProvider router={router}/>
      {toastVisible && <Error message={toastMessage}/>}
    </ToastContext.Provider>
  );
}

export default App;
