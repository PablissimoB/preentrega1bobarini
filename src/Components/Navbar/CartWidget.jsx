import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from "./Navbar.module.css"

const CartWidget = () => {
  return (
    <div>
      <ShoppingCartIcon className={style.cartIcon}/>
    </div>
  )
}

export default CartWidget
