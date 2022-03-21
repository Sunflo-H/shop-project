import styles from '../css/CardList.module.css';

function CardList(props) {
  return (
    <div className={styles.cardContainer}>
      <p>New Drops</p>
      <ul className={styles.cardList}>
        {
          props.tshirt.map((item,i) => {
            return (
              <li key = {i}>
                <div className={styles.imageContainer}>
                  <img src={props.tshirt[i].src}></img>
                </div>
                <div className={styles.textContainer}>
                  <p>{props.tshirt[i].name}</p>
                  <p>{props.tshirt[i].price}원</p>
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