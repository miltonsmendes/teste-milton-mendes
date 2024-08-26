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

    const { selectedEquipament, isHistoryOn, isUpdatedPositionOn } = useSelectedEquipament();

    const equipmentFiltered = equipmentPositionHistory.find(equipment => equipment.equipmentId === selectedEquipament);


    const findMostRecentPosition = (positions) => {
        const mostRecentPosition = positions.reduce((mostRecent, current) => {
            return new Date(current.date) > new Date(mostRecent.date) ? current : mostRecent;
        });
    
        return mostRecentPosition;
    };

    const mostRecentPositions = equipmentPositionHistory.map(equipment => {
        const mostRecentPosition = findMostRecentPosition(equipment.positions);
        return {
            equipmentId: equipment.equipmentId,
            position: mostRecentPosition,
        };
    });


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
                    mostRecentPositions.map((equipment, index) => (
                        <Marker 
                            key={index} 
                            position={[equipment.position.lat, equipment.position.lon]} 
                            // Caso queira usar um ícone personalizado, descomente as linhas abaixo:
                            // icon={redIcon} 
                        />
                    ))
                    
                    : <></>
                }
            </MapContainer>
        </>
    );
}
