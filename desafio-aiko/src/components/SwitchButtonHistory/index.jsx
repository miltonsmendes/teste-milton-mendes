import { useState } from 'react';
import { useSelectedEquipament } from '../../hook/useSelectedEquipament';
import "./styles.css";

export function SwitchButtonHistory({ initialState = false, onToggle }) {
  const [isOn, setIsOn] = useState(initialState);
  const {isHistoryOn, toggleHistory} = useSelectedEquipament();

  function toggleSwitch() {
    setIsOn(!isOn);
    toggleHistory(isHistoryOn)

    if (onToggle) {
      onToggle(!isOn);
    }
  };

  return (
    <div className='container-switch-history'>
      <div className={`switch-container ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div className="switch-button" />
      </div>
        <span className="switch-label-history">{isOn ? 'Exibir histórico de equipamento' : 'Não exibir histórico de equipamento'}</span>
    </div>
  );
}

