import { useState, useCallback } from "react";

/**
 * Hook for toggling boolean state
 */
export const useToggle = (
  initialValue: boolean = false,
): [boolean, () => void, (value: boolean) => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, toggle, setValue];
};

export default useToggle;
