import { useState, useEffect, useCallback } from "react";

export interface UseSearchResultsOptions<T> {
  query: string;
  items: T[];
  searchFields?: (keyof T)[];
  threshold?: number;
}

export function useSearchResults<T>({
  query,
  items,
  searchFields = [],
  threshold = 0.3,
}: UseSearchResultsOptions<T>) {
  const [results, setResults] = useState<T[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);

    const searchTerms = query.toLowerCase().split(" ");

    const filtered = items.filter((item) => {
      const searchableText = searchFields
        .map((field) => String(item[field] || ""))
        .join(" ")
        .toLowerCase();

      return searchTerms.every((term) => searchableText.includes(term));
    });

    setResults(filtered);
    setIsSearching(false);
  }, [query, items, searchFields]);

  return { results, isSearching };
}
