import styles from '../css/CardList.module.css';
import { useParams } from 'react-router-dom';
function CardList(props) {
  let {category} = useParams();
  return (
    <div className={styles.cardContainer}>
      {
        category === undefined ? <p>New Drops</p> : null
      }
      
      <ul className={styles.cardList}>
        {
          props.tshirts.map((tshirt,i) => {
            return (
              <li key = {i}>
                <div className={styles.imageContainer}>
                  <img src={tshirt.src}></img>
                </div>
                <div className={styles.textContainer}>
                  <p>{tshirt.name}</p>
                  <p>{tshirt.price}원</p>
                </div>
              </li>
            )
          })
        } 
      </ul>
      {
        category === undefined ? 
        <div className={styles.btnContainer}>
          <button>Shop New</button>
        </div> : null
      }
    </div>

  )
}

export default CardList;