// import L from "leaflet";


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


import { useSelectedEquipament } from '../../hook/useSelectedEquipament';

import "./styles.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

import equipmentPositionHistory from "../../../../data/equipmentPositionHistory.json";


export function Maps() {

    const { selectedEquipament, isHistoryOn } = useSelectedEquipament();
    // let equipmentPosition = [];


    const equipmentFiltered = equipmentPositionHistory.find(equipment => equipment.equipmentId === selectedEquipament);


//     function findMostRecentPosition(positions){
//         const mostRecentDate = positions.reduce((mostRecent, current) => {
//             return new Date(current.date) > new Date(mostRecent) ? current.date : mostRecent;
//         }, positions[0].date);
//         const mostRecentPosition = positions.find(position => position.date === mostRecentDate);
    
//         return mostRecentPosition;
//     };


//    const mostRecentPositions = equipmentPositionHistory.map(equipment => {
//         const positionIndex = findMostRecentPosition(equipment.positions)

//         equipmentPosition.push({
//             id: equipment.equipmentId, 
//             position: [equipment.position[positionIndex].lat, equipment.position[positionIndex].lon]
//         }) 
//     })


//     console.log(mostRecentPositions);

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
            </MapContainer>
        </>
    );
}
