import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Hook for detecting clicks outside of a component
 */
export const useClickOutside = <T extends HTMLElement>(
  initialValue: boolean = false,
): [boolean, React.RefObject<T>, () => void] => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const ref = useRef<T>(null);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return [isOpen, ref as React.RefObject<T>, toggle];
};

export default useClickOutside;
