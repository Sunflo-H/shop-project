import styles from '../css/CardList.module.css';
import { useParams } from 'react-router-dom';
function CardList(props) {
  let {category} = useParams();
  console.log(category);
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
    </div>

  )
}

export default CardList;