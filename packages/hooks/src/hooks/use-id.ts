import { useState, useCallback } from "react";

/**
 * Hook for generating unique IDs
 */
export const useId = (prefix = "id"): string => {
  const [id] = useState(
    () => `${prefix}-${Math.random().toString(36).substr(2, 9)}`,
  );
  return id;
};

export default useId;
