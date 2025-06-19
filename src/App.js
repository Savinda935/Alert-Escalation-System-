import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AlertEscalationHome from './pages/Alert-escalationHome';
import CoreSwitchIncident from './components/CoreSwitch/CoreSwitchincident';
import VirtualMachineIncident from './components/VirtualMachine/VirtualMachineincident';
import BackupServerIncident from './components/BackupServer/Backupserverincident';
import AccessPointIncident from './components/Accespoint/Accespointincident';
import IDRACIncident from './components/IDRAC/IDRACincident';
import FirewallIncident from './components/Firewall/Firewallincident';

function App() {
  return (
    <div style={{ width: '100%' }}>
      <Routes>
        <Route path="/" element={<AlertEscalationHome />} />
        <Route path="/coreswitch-incident" element={<CoreSwitchIncident />} />
        <Route path="/virtualmachine-incident" element={<VirtualMachineIncident />} />
        <Route path="/backupserver-incident" element={<BackupServerIncident />} />
        <Route path="/accesspoint-incident" element={<AccessPointIncident />} />
        <Route path="/idrac-incident" element={<IDRACIncident />} />
        <Route path="/firewall-incident" element={<FirewallIncident />} />
      </Routes>
    </div>
  );
}

export default App;