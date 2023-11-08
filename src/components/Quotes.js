import React from "react";
import QuoteCard from "./QuoteCard";

function Quotes({ quotes }) {
    
    return (
       <section className="all-quotes">
        <div className="quotes wrapper">
            {quotes.map((quote, id) => (
                <QuoteCard quote={quote} key={id} />
            ))}
        </div>
       </section> 
    )
}

export default Quotes;