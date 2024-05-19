import { notFound } from 'next/navigation';
import React from 'react'
import {fetchResults} from '../../lib/fetchResults'

export type Params = {
    searchParams: SearchParams;
}

export type SearchParams ={
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string; 
  checkin: string;
  checkout: string;
}

async function SearchPage({searchParams}: Params) {
    if(!searchParams.url) return notFound()    
     
    console.log(searchParams) 
    
    const results = await fetchResults(searchParams)

    // if(!results) return <div>No Results...</div>
    
    
    return (
        <div>SearchPage</div>
      )
    
 
}

export default SearchPage