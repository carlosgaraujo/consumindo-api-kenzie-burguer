import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../provides/UserContext'
import LoginPage from '../LoginPage'
import ShopPage from '../ShopPage'

export const ProtectRoutes = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem("@TOKEN")
  const { tokenUser } = useContext(UserContext)

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);


  return (
    tokenUser ? <ShopPage /> : <LoginPage />
  );
}
