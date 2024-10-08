import Instagram from '../assets/instagram.svg'

const Footer = () => {
  return (    
    <div className="bg-white">
      <div className= "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> 
        <div className="flex flex-col justify-between items-center">
          <div className="flex gap-3">
            <img className="w-6 h-6" src={Instagram}/>
          </div>
          <p>This is the footer component</p>
        </div>
      </div>
      </div>
  )
}

export default Footer 