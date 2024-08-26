import { useSelectedEquipament } from '../../hook/useSelectedEquipament';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';

import equipmentPositionHistory from "../../../../data/equipmentPositionHistory.json";
import equipmentStateHistory from "../../../../data/equipmentStateHistory.json";
import equipmentData from "../../../../data/equipment.json";

import "./styles.css";
import "leaflet/dist/leaflet.css";

export function Maps() {
    const { selectedEquipament, isHistoryOn, isUpdatedPositionOn } = useSelectedEquipament();

    const equipmentFiltered = equipmentPositionHistory.find(equipment => equipment.equipmentId === selectedEquipament);

    const redIcon = new L.DivIcon({
        className: 'marker-icon-red marker-icon',
        iconSize: [25, 30],
        iconAnchor: [12.5, 41],
    });

    const greenIcon = new L.DivIcon({
        className: 'marker-icon-green marker-icon',
        iconSize: [25, 30],
        iconAnchor: [12.5, 41],
    });

    const yellowIcon = new L.DivIcon({
        className: 'marker-icon-yellow marker-icon',
        iconSize: [25, 30],
        iconAnchor: [12.5, 41],
    });

    const blueIcon = new L.DivIcon({
        className: 'marker-icon-blue marker-icon',
        iconSize: [25, 30],
        iconAnchor: [12.5, 41],
    });

    function setState(id) {
        if (id === "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f") {
            return {
                description: "Manutenção",
                color: redIcon
            };
        }

        if (id === "0808344c-454b-4c36-89e8-d7687e692d57") {
            return {
                description: "Operando",
                color: greenIcon
            };
        }

        return {
            description: "Parado",
            color: yellowIcon
        };
    }

    let mostRecentStatuses = equipmentStateHistory.map(equipmentState => {
        let mostRecentDate = null;
        let position = null;
        let mostRecentDateStateHistory = null;
        let resultState = null;
        let name = null;

        const matchingPositionHistory = equipmentPositionHistory.find(equipmentPosition =>
            equipmentState.equipmentId === equipmentPosition.equipmentId
        );

        if (matchingPositionHistory) {
            mostRecentDate = matchingPositionHistory.positions.reduce((mostRecent, current) => {
                return new Date(current.date) > new Date(mostRecent.date) ? current : mostRecent;
            }).date;

            const resultPosition = matchingPositionHistory.positions.find(({ date }) => date === mostRecentDate);

            if (resultPosition) {
                position = [resultPosition.lat, resultPosition.lon];
            }

            mostRecentDateStateHistory = equipmentState.states.reduce((mostRecent, current) => {
                return new Date(current.date) > new Date(mostRecent.date) ? current : mostRecent;
            }).date;

            resultState = equipmentState.states.find(({ date }) => date === mostRecentDateStateHistory);

            const equipmentInfo = equipmentData.find(equipment => equipmentState.equipmentId === equipment.id);
            name = equipmentInfo?.name || "Unknown";
        }

        return {
            id: equipmentState.equipmentId,
            date: mostRecentDate,
            position,
            stateId: setState(resultState?.equipmentStateId),
            name,
        };
    });

    return (
        <MapContainer center={[-19.03822, -45.856232]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            {isHistoryOn && equipmentFiltered?.positions?.map((position, index) => (
                <Marker key={index} position={[position.lat, position.lon]} icon={blueIcon}>

                <Popup offset={[0, -30]}>
                    {new Date(position.date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        })}
                </Popup>

                </Marker>
            ))}

            {isUpdatedPositionOn && mostRecentStatuses.map((equipment, index) => (
                <Marker
                    key={index}
                    position={equipment.position}
                    icon={equipment.stateId.color}
                >
                    <Popup offset={[0, -30]}>{`${equipment.name}, Status: ${equipment.stateId.description}`}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
