import Logo from "../../assets/logo.svg"
import { useNavigate } from 'react-router-dom'
import { CustomConnectButton } from "../CustomConnectButton"

export const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="px-6 bg-gray-100 py-4 flex items-center justify-between">
      <img 
        src={Logo} 
        alt='Logo' 
        onClick={() => navigate('/')} 
        className="cursor-pointer"
      />
      <CustomConnectButton/>
    </header>
  )
}