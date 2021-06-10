import { useEffect, useState } from "react";
import { store } from "react-notifications-component";

const useNotification = (isError: boolean, message: string) => {
  const [alert, setAlert] = useState<string>();
  useEffect(() => {
    if (message) {
      setAlert(
        store.addNotification({
          title: isError ? "Error" : "Bien!",
          message,
          type: isError ? "danger" : "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        })
      );
    } else {
      setAlert("");
    }
    // eslint-disable-next-line
  }, [message]);

  return [alert];
};

export default useNotification;
