import React from 'react';
import Styles from './SearchBar.module.scss';

interface SearchBarProps {
    onCategoryChange: (category: string) => void;
    selectedCategory: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onCategoryChange, selectedCategory }) => {
        const userName = localStorage.getItem('user');
    return (
        <div className={Styles.container}>
            <h2>Bienvenue {userName} sur PetLovers</h2>
            <select onChange={(e) => onCategoryChange(e.target.value)} value={selectedCategory}>
                <option value="Nos PetLovers">Nos PetLovers</option>
                <option value="Chien">Chien</option>
                <option value="Chat">Chat</option>
                <option value="Lapin">Lapin</option>
                <option value="Hamster">Hamster</option>
            </select>
            <p>* Choisis la catégorie que tu souhaites voir *</p>
        </div>
    );
};

export default SearchBar;
