"use client";

import { useEffect, useRef, useState } from "react";
import SearchIcon from "@/icons/SearchIcon";

type SearchComponentProps = {
  options: string[];
};

const SearchComponent: React.FC<SearchComponentProps> = ({ options }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(options);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSearch = (query: string) => {
    const filteredResults = options.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredResults);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    handleSearch(value);
  };

  const handleSetFocus = (e: React.MouseEvent) => {
    e.preventDefault();
    inputRef.current?.focus();
    setIsOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full sm:max-w-96">
      <div
        role="button"
        onMouseDown={handleSetFocus}
        tabIndex={-1}
        className="flex items-center cursor-text w-full py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      >
        <div className="px-1">
          <SearchIcon width={24} height={24} className="shrink-0" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={handleChange}
          className="py-1 focus:outline-none w-full pr-4"
          placeholder="Search..."
        />
      </div>

      <div className="absolute top-[100%] left-0 w-full z-10 shadow-md bg-white">
        {isOpen &&
          (suggestions.length > 0 ? (
            <ul className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => setSearchQuery(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-2 text-gray-500">No results found.</div>
          ))}
      </div>
    </div>
  );
};

export default SearchComponent;
