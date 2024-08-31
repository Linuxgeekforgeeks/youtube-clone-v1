import NavigationHeader from "../NavigationHeader"


function Navbar() {
  return (
    <div className="fixed bg-stone-950 w-full z-20 h-16 px-2 flex-row justify-between items-center">
        <NavigationHeader/>
    </div>
  )
}

export default Navbar