import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

function Quotes({ filteredQuotes, category, categories, handleCategoryChange, addToFavorites, favoriteQuotes }) {
    
    return (
       <section className="all-quotes">
        <div className="quotes wrapper">
            <div className="category-header">
                <h2 className="category-header">Pick your favorite quotes below</h2> 
                <p>
                    You have a collection of {filteredQuotes.length} great
                    {category === "All" ?  "" : ` ${category}`}
                    {filteredQuotes.length > 1 ? ' quotes' : ' quote'}.
                </p>
                <CategoryForm categories={categories} category={category} handleCategoryChange={handleCategoryChange} />
            </div>

            {filteredQuotes.map((quote) => (
                <QuoteCard  key={quote.id} quote={quote} addToFavorites={addToFavorites} favoriteQuotes={favoriteQuotes}/>
            ))}
        </div>
       </section> 
    );
}

export default Quotes;