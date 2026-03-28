import { useState, useEffect } from "react";

/**
 * Hook for handling boolean state with timeout
 */
export const useTimeout = (
  defaultValue: boolean = false,
  duration: number = 3000,
): [boolean, () => void, () => void] => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (value) {
      const timer = setTimeout(() => setValue(false), duration);
      return () => clearTimeout(timer);
    }
  }, [value, duration]);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, setTrue, setFalse];
};

export default useTimeout;
