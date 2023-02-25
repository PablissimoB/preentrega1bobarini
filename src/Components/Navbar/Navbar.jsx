import CartWidget from "./CartWidget"
import logo from "../../img/protofood.jpg"
import style from "./Navbar.module.css"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


const Navbar = () => {

  return (
    <div className={style.navbarContainer}>
        <Grid container spacing={1}>
          <Grid xs={2}>
              <img src={logo} alt="logo" className={style.logo} />
          </Grid>
          <Grid xs={8} className={style.flexContainer}>
            <ul>
              <li><a href="">Inicio</a> </li>
              <li> <a href="">Menu</a> </li>
              <li> <a href="">Contacto</a> </li>
            </ul>
          </Grid>
          <Grid xs={2} className={style.flexContainer}>
            <CartWidget />
          </Grid>
        </Grid>
      </div>
      
  )
}

export default Navbar