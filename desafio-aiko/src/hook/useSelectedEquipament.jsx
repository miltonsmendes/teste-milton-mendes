import { createContext, useState, useContext } from 'react';

export const SelectedEquipamentContext = createContext();

export function SelectedEquipamentProvider({ children }) {

    const [selectedEquipament, setSelectedEquipament] = useState("");
    const [isHistoryOn, setIsHistoryOn] = useState(false);
    const [isUpdatedPositionOn, setIsUpdatedPositionOn] = useState(false);

    function selectEquipament(newEquipamentSelected) {
        setSelectedEquipament(newEquipamentSelected);
    }

    function toggleHistory(isHistoryOn) {
        setIsHistoryOn(!isHistoryOn);
    }

    function toggleUpdatedPosition(isUpdatedPositionOn) {
        setIsUpdatedPositionOn(!isUpdatedPositionOn);
    }

    return (
        <SelectedEquipamentContext.Provider value={{
            isHistoryOn, 
            toggleHistory, 
            selectedEquipament, 
            selectEquipament,
            isUpdatedPositionOn,
            toggleUpdatedPosition
        }}>
            {children}
        </SelectedEquipamentContext.Provider>
    )

}

export function useSelectedEquipament(){
    const context = useContext(SelectedEquipamentContext);

    return context;
}