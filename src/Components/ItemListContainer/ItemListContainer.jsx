import style from "./ItemListContainer.module.css"

const ItemListContainer = (props) => {
  
  return (
    <div className={style.itemListContainer}>
      <h1> {props.message}</h1>
    </div>
  )
}

export default ItemListContainer
