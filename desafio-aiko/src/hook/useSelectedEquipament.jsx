import { createContext, useState, useContext } from 'react';

export const SelectedEquipamentContext = createContext();

export function SelectedEquipamentProvider({ children }) {

    const [selectedEquipament, setSelectedEquipament] = useState("");
    const [isHistoryOn, setIsHistoryOn] = useState(false);
    const [isUpdatedPositionOn, setIsUpdatedPositionOn] = useState(false);
    const [isShowPathOn, setIsShowPathOn] = useState(false);

    function selectEquipament(newEquipamentSelected) {
        setSelectedEquipament(newEquipamentSelected);
    }

    function toggleHistory(isHistoryOn) {
        setIsHistoryOn(!isHistoryOn);
    }

    function toggleUpdatedPosition(isUpdatedPositionOn) {
        setIsUpdatedPositionOn(!isUpdatedPositionOn);
    }

    function toggleShowPath(isShowPathOn) {
        setIsShowPathOn(!isShowPathOn);
    }

    return (
        <SelectedEquipamentContext.Provider value={{
            isHistoryOn, 
            toggleHistory, 
            selectedEquipament, 
            selectEquipament,
            isUpdatedPositionOn,
            toggleUpdatedPosition,
            isShowPathOn,
            toggleShowPath,
        }}>
            {children}
        </SelectedEquipamentContext.Provider>
    )

}

export function useSelectedEquipament(){
    const context = useContext(SelectedEquipamentContext);

    return context;
}