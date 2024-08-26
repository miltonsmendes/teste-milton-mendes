import { useState } from 'react';
import { useSelectedEquipament } from '../../hook/useSelectedEquipament';
import "./styles.css";

export function SwitchButtonUpdatedPosition({ initialState = false, onToggle }) {
  const [isOn, setIsOn] = useState(initialState);
  const {isUpdatedPositionOn, toggleUpdatedPosition} = useSelectedEquipament();

  function toggleSwitch() {
    setIsOn(!isOn);
    toggleUpdatedPosition(isUpdatedPositionOn)

    if (onToggle) {
      onToggle(!isOn);
    }
  };

  return (
    <>
    <div className={`switch-container ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
      <div className="switch-button">
      </div>
    </div>
        <span className="switch-label-updated-position">{isOn ? 'Exibir ultima posicao de todos os equipamentos' : 'Nao exibir ultima posicao de todos os equipamentos'}</span>
    </>
  );
}

