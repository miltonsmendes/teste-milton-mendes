import { useState } from 'react';
import { useSelectedEquipament } from '../../hook/useSelectedEquipament';
import "./styles.css";

export function SwitchButtonShowPath({ initialState = false, onToggle }) {
  const [isOn, setIsOn] = useState(initialState);
  const {isShowPathOn, toggleShowPath} = useSelectedEquipament();

  function toggleSwitch() {
    setIsOn(!isOn);
    toggleShowPath(isShowPathOn)

    if (onToggle) {
      onToggle(!isOn);
    }
  };

  return (
    <div className='container-show-path'>
      <div className={`switch-container-show-path ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div className="switch-button" />
      </div>
      <span className="switch-label-show-path">{isOn ? 'Exibir trajeto do equipamento' : 'Não exibir trajeto do equipamento'}</span>
    </div>
  
  );
}

