import styles from '../css/Cardlist.module.css';

function CardList(props) {
  return (
    <div className={styles.cardContainer}>
      <h1>BEST</h1>
      <ul className={styles.cardList}>
        <li>
          <div className={styles.imageContainer}>
            <img src={props.tshirt[0].src}></img>
          </div>
          <div className={styles.textContainer}>
            <p>오렌지 티셔츠</p>
            <p>15000원</p>
          </div>
        </li>
        <li>
          <div className={styles.imageContainer}>
            <img src={props.tshirt[1].src}></img>
          </div>
          <div className={styles.textContainer}>
            <p>야자수 티셔츠</p>
            <p>15000원</p>
          </div>
        </li>
        <li>
          <div className={styles.imageContainer}>
            <img src={props.tshirt[2].src}></img>
          </div>
          <div className={styles.textContainer}>
            <p>야자수 티셔츠</p>
            <p>15000원</p>
          </div>
        </li>
        <li>c</li>
        <li>d</li>
        <li>f</li>
        <li>g</li>
        <li>h</li>
      </ul>
    </div>

  )
}

export default CardList;