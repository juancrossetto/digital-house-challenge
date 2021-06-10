import { useCallback, useState } from "react";

const useLocalStorage = <T>(
  key: string,
  initialValue: any
): [value: T, setItem: (obj?: any | null) => any] => {
  const isServer = typeof window === "undefined";
  const [value, setValue] = useState(() => {
    if (isServer) return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setItem = useCallback(
    (_value) => {
      setValue(_value);
      if (isServer) return;
      try {
        window.localStorage.setItem(key, JSON.stringify(_value));
      } catch (error) {
        console.log("error setting localStorage:", error);
      }
    },
    [key, isServer]
  );

  return [value, setItem];
};

export default useLocalStorage;
