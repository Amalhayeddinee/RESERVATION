import React from 'react'
import Resultat from './Resultat'
import ResultatDisplay from './ResultatDisplay'

export default function ResultatList({results}) {
  return (
    <div className='results-display'>

    <h2>{results.length}-Results found</h2>
    {results.map((result)=>
    <ResultatDisplay result={result} key={result.id}/>
)}
  </div>
  );
}
