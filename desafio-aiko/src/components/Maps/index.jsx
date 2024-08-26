import { useSelectedEquipament } from '../../hook/useSelectedEquipament';
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import equipmentPositionHistory from "../../../../data/equipmentPositionHistory.json";
import equipmentStateHistory from "../../../../data/equipmentStateHistory.json";

import "./styles.css";
import "leaflet/dist/leaflet.css";

export function Maps() {

    const { selectedEquipament, isHistoryOn, isUpdatedPositionOn } = useSelectedEquipament();

    const equipmentFiltered = equipmentPositionHistory.find(equipment => equipment.equipmentId === selectedEquipament);

    // const redIcon = new L.DivIcon({
    //     className: 'marker-icon-red marker-icon',
    //     iconSize: [25, 30],
    //     iconAnchor: [12.5, 41],
    // });

    // const greenIcon = new L.DivIcon({
    //     className: 'marker-icon-green marker-icon',
    //     iconSize: [25, 30],
    //     iconAnchor: [12.5, 41],
    // });

    // const yellowIcon = new L.DivIcon({
    //     className: 'marker-icon-yellow marker-icon',
    //     iconSize: [25, 30],
    //     iconAnchor: [12.5, 41],
    // });

    // function findMostRecentPosition(positions) {
    //     const mostRecentPosition = positions.reduce((mostRecent, current) => {
    //         return new Date(current.date) > new Date(mostRecent.date) ? current : mostRecent;
    //     });
    
    //     return mostRecentPosition;
    // };


    // function findMostRecentStatus(positions) {
    //     const mostRecentsStatus = positions.reduce((mostRecent, current) => {
    //         return new Date(current.date) > new Date(mostRecent.date) ? current : mostRecent;
    //     });
    
    //     return mostRecentsStatus;
    // };

    // function setState(id){
    //     if (id === "0808344c-454b-4c36-89e8-d7687e692d57"){
    //         return {
    //             description: "Operando",
    //             color: "greenIcon"
    //         }
    //     }
    //     if (id === "baff9783-84e8-4e01-874b-6fd743b875ad"){
    //         return {
    //             description: "Parado",
    //             color: "yellowIcon"
    //         }
    //     }
    //     return {
    //         description: "Manutenção",
    //         color: "redIcon"
    //     }
    // }

    // const mostRecentStatus = equipmentStateHistory.map(equipment => {
    //     console.log("ola: ", equipment)
    //     const mostRecentPosition = findMostRecentPosition(equipment.states);
    //     const status = setState(equipment.equipmentId);
        
    //     return {
    //         equipmentId: equipment.equipmentId,
    //         position: mostRecentPosition,
    //         status: {
    //             id:equipment.equipmentId,
    //             name: status.description,
    //             color: status.color,
    //         }
    //     };
    // });


    let mostRecentStatuses = equipmentStateHistory.map(equipmentState => {
        let mostRecentDate = null;
        let position = null;
    
        const matchingPositionHistory = equipmentPositionHistory.find(equipmentPosition => 
            equipmentState.equipmentId === equipmentPosition.equipmentId
        );
    
        if (matchingPositionHistory) {

            mostRecentDate = matchingPositionHistory.positions.reduce((mostRecent, current) => {
                return new Date(current.date) > new Date(mostRecent.date) ? current : mostRecent;
            }).date; 
    
            const result = matchingPositionHistory.positions.find(({ date }) => date === mostRecentDate);
            
            if (result) {
                position = [result.lat, result.lon];
            }
        }
    
        return {
            id: equipmentState.equipmentId,
            date: mostRecentDate,
            position,
        };
    });
    
    console.log(mostRecentStatuses);
    
    
    
    return ( 
        <>
            <MapContainer center={[-19.03822, -45.856232]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />

                {
                    isHistoryOn 
                    ? (
                        equipmentFiltered?.positions && (
                            equipmentFiltered.positions.map((position, index) => (
                                <Marker key={index} position={[position.lat, position.lon]}>
                                </Marker>
                            ))
                        )
                    )
                    : <></>
                }
                {
                    isUpdatedPositionOn 
                    ?
                    mostRecentStatuses.map((equipment, index) => (
                        <Marker 
                            key={index} 
                            position={equipment.position}
                        />
                    ))
                    : <></>
                }
            </MapContainer>
        </>
    );
}
