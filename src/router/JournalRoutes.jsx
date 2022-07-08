import {Route,Routes,Navigate} from 'react-router-dom'
import { JournalPage } from '../journal/pages/JournalPage'


export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<JournalPage/>}/>
        
        <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
