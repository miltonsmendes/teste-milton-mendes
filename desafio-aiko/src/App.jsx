import {Maps} from './components/Maps'
import {DropdownButton} from "./components/DropdownButton"
import {SwitchButtonHistory} from "./components/SwitchButtonHistory"
import {SwitchButtonUpdatedPosition} from "./components/SwitchButtonUpdatedPosition"
import {SwitchButtonShowPath} from './components/SwitchButtonShowPath'
import {SelectedEquipamentProvider} from "./hook/useSelectedEquipament"
import "./App.css";


import equipment from '../../data/equipment.json';

function App() {

  return (
    <SelectedEquipamentProvider>
      <div className='appContainer'>
        <div className='container-history'>
          <DropdownButton options={equipment} />
          <SwitchButtonHistory />
          <SwitchButtonShowPath />
        </div>
        <div className='container-recent-status'>
          <SwitchButtonUpdatedPosition />
        </div>
        <div>
          <Maps />
        </div>
      </div>
    </SelectedEquipamentProvider>
  )
}

export default App
