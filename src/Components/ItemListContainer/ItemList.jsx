import Item from '../Item/Item'
import style from "./ItemList.module.css"

const ItemList = ({items}) => {
  return (
    <div className={style.itemList}>
        {items.map (
                (element)=>{
                return <Item key= {element.id} element = {element}/>
                }
            )
        }
    </div>
  )
}

export default ItemList
