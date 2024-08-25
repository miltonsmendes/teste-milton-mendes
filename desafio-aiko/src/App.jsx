import {Maps} from './components/Maps'
import {DropdownButton} from "./components/DropdownButton"
import {SwitchButton} from "./components/SwitchButton"
import {SelectedEquipamentProvider} from "./hook/useSelectedEquipament"


import equipment from '../../data/equipment.json';

function App() {


  return (
    <SelectedEquipamentProvider>
      <DropdownButton options={equipment} />
      <SwitchButton />
      <Maps />
    </SelectedEquipamentProvider>
  )
}

export default App
