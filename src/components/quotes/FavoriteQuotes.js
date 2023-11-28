import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";

function FavoriteQuotes({ favoriteQuotes, maxFaves, removeFromFavorites }) {

    return (
        <section className="favorite-quotes">
          <div className="wrapper quotes">
            <h3>Top 3 Favorite Quotes</h3>
            {favoriteQuotes.length >= 1 
            && 
            <ul>
                {favoriteQuotes.map((quote) => <FavoriteQuoteCard key={quote.id} quote={quote} removeFromFavorites={removeFromFavorites} /> )}
            </ul>}
            <div className="favorite-quotes-description">
              <p>
              {favoriteQuotes.length < maxFaves ? `You can add ${maxFaves - favoriteQuotes.length} more quotes to your top three favorites by selecting from the options below.`: ""}  
              </p>
            </div>
          </div>
        </section>
    )
}

export default FavoriteQuotes;