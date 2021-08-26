import React from 'react';

interface ISearchProps {
 searchCallback: (searchTerms: string) => void;  
}

export function Search({searchCallback}: ISearchProps) {
    return (
        <input
        role="search"
        type="text"
        name="Search"
        placeholder="Search"
        className="search"
        onChange={(e) => searchCallback(e.target.value)}
      />
    );
}
