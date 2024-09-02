import NavigationHeader from "../NavigationHeader"
import Search from "./Search"
import UserOptions from "../UserOptions/UserOptions"



function Navbar() {
  return (
    <div className="fixed bg-stone-950 w-full z-20 h-16 px-2 flex flex-row justify-between items-center">
        <NavigationHeader/>
        <Search/>
        <UserOptions/>
    </div>
  )
}

export default Navbar