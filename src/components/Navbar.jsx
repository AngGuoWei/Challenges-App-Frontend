/*We can pass in props when we call the component in App.jsx by specifiying 
the value <Navbar name="Gw" surname="Ang"/>to the NavBar component in the (name, surname) for exmaple */
const Navbar = () => {
  return (
    <div className="bg-white shadow">
      <div className= "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> 
        <div className="flex justify-between items-center">
            <p className="font-bold text-2xl">
              code challenges
            </p>
          <div className="">
            <button classname="bg-indigo-500 rounded px-3 py-1.5 ">Logout</button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Navbar