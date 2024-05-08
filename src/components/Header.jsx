import { Navlinks } from '../Data'
import HeroSlider from './HeroSlider'
import Navbar from './Navbar'
const Header = () => {
  return (
    <div>
      <Navbar link={Navlinks}/>
      <HeroSlider/>
    </div>
  )
}

export default Header
