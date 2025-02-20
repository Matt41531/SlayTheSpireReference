import { supabase } from "../../../supabaseClient";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

function Cards() {
  const [cards, setCards] = useState([]);
  const { searchQuery, filters } = useContext(SearchContext);
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    getFilteredCards(filters, searchQuery);
  }, [filters, searchQuery]);

  async function getFilteredCards(filters, searchQuery) {
    let query = supabase.from("card_view").select("*");

    if (filters.character) {
      query = query.eq("character_name", filters.character);
    }
    if (filters.rarity) {
      query = query.eq("rarity_name", filters.rarity);
    }
    if (filters.type) {
      query = query.eq("type_name", filters.type);
    }
    if (filters.function) {
      query = query.eq("function_name", filters.function);
    }
    if (searchQuery) {
      query = query.ilike("card_name", `%${searchQuery}%`);
    }

    const { data, error } = await query;
    if (error) {
      console.error(error);
    } else {
      setCards(data);
    }
  }

  const handleCardClick = (id) => {
    setSelectedCardId(selectedCardId === id ? null : id);
  };

  return (
    <div className="flex flex-wrap gap-4 flex-1">
      {cards.map((card) => (
        <div 
          key={card.id} 
          className={`bg-white rounded-lg shadow-md ${selectedCardId === card.id ? 'scale-150 transition-all duration-300' : ''}`}
          onClick={() => handleCardClick(card.id)}
        >
          <img
            src={card.card_img}
            alt={card.card_name}
            className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
