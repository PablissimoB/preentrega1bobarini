import { useParams } from "react-router-dom";
import { products } from "../../products";
import style from "./ItemDetailContainer.module.css"
import Button from "@mui/material/Button";

const ItemDetailContainer = () => {
  
  const {id} = useParams();
  const productSelected = products.find( 
    (element ) => element.id === Number(id)
  );
  

  return (
    <div className= {style.container}>
      <div>
          <h1> {productSelected.title} </h1>
          <img src={productSelected.img}  alt= {productSelected.title} className={style.image} />
          <h2> $ {productSelected.price} </h2>
          <Button>
            Agregar
          </Button>
        </div>
    </div>
  )
}

export default ItemDetailContainer
