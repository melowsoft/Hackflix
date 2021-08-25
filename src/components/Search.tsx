import React from 'react';

interface Props {
 searchCallback: (searchTerms: string) => void;  
}

export function Search({searchCallback}: Props) {
    return (
        <input
        role={"search"}
        type="text"
        name="Search"
        placeholder="Search"
        className="search"
        onChange={(e) => searchCallback(e.target.value)}
      />
    );
}
