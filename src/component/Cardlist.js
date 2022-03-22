import styles from '../css/CardList.module.css';

function CardList(props) {
  return (
    <div className={styles.cardContainer}>
      <p>New Drops</p>
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