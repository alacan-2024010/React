import {Navbar} from '../components/navbar/Navbar'
import { Convertidor } from '../components/convertidor/Convertidor'
import { Footer } from '../components/Footer/Footer'
export const App = () => {
  return (
    <main>
      <Navbar />
      <Convertidor />
      <Footer nombre='Alan Francisco' apellido='Lacán Flores' carne='2024010'/>
    </main>
  )
}

