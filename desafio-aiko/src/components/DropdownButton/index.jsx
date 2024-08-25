import { useState } from 'react';
import { useSelectedEquipament } from '../../hook/useSelectedEquipament';
import "./styles.css";

export function DropdownButton({ options, onSelect }) {
    
    const {selectedEquipament, selectEquipament} = useSelectedEquipament();


  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  };

  function handleOptionClick(option) {
    setSelectedOption(option.name);
    selectEquipament(option.id)
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedOption || 'Selecione uma opção'}
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-menu-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
