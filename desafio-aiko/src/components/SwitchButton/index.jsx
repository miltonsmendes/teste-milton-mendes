import { useState } from 'react';
import { useSelectedEquipament } from '../../hook/useSelectedEquipament';
import "./styles.css";

export function SwitchButton({ initialState = false, onToggle }) {
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
    <>
    <div className={`switch-container ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
      <div className="switch-button">
      </div>
    </div>
        <span className="switch-label">{isOn ? 'On' : 'Off'}</span>
    </>
  );
}

export default SwitchButton;
