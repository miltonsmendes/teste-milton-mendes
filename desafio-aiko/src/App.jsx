import {Maps} from './components/Maps'
import {DropdownButton} from "./components/DropdownButton"
import {SwitchButtonHistory} from "./components/SwitchButtonHistory"
import {SwitchButtonUpdatedPosition} from "./components/SwitchButtonUpdatedPosition"
import {SelectedEquipamentProvider} from "./hook/useSelectedEquipament"


import equipment from '../../data/equipment.json';

function App() {


  return (
    <SelectedEquipamentProvider>
      <DropdownButton options={equipment} />
      <SwitchButtonHistory />
      <SwitchButtonUpdatedPosition />
      <Maps />
    </SelectedEquipamentProvider>
  )
}

export default App
