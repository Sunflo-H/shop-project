import styles from '../css/Cardlist.module.css';

function CardList(props) {
  return (
    <div className={styles.cardContainer}>
      <h1>BEST</h1>
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