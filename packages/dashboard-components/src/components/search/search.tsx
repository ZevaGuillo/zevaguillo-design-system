import { useState, useCallback } from "react";
import { Input, Popover } from "@zevaguillo/ui-components";
import { Search as SearchIcon, X } from "lucide-react";

export interface SearchResult {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface SearchProps {
  results?: SearchResult[];
  onSearch?: (query: string) => void;
  onResultClick?: (result: SearchResult) => void;
  placeholder?: string;
}

export const Search = ({
  results = [],
  onSearch,
  onResultClick,
  placeholder = "Search...",
}: SearchProps) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = useCallback(
    (value: string) => {
      setQuery(value);
      onSearch?.(value);
      setOpen(value.length > 0);
    },
    [onSearch],
  );

  const handleResultClick = (result: SearchResult) => {
    onResultClick?.(result);
    setOpen(false);
    setQuery("");
  };

  return (
    <div className="relative">
      <Input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-64"
      />
      <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-md shadow-lg z-50">
          {results.map((result) => (
            <button
              key={result.id}
              onClick={() => handleResultClick(result)}
              className="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2"
            >
              {result.icon && <span>{result.icon}</span>}
              <div>
                <p className="text-sm font-medium">{result.title}</p>
                {result.subtitle && (
                  <p className="text-xs text-gray-500">{result.subtitle}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
