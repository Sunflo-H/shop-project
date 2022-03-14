import styles from '../css/Cardlist.module.css';
import t1 from '../img/t1.webp';
import t2 from '../img/t2.webp';

function CardList(props) {
  return (
    <div className={styles.cardContainer}>
      <h1>BEST</h1>
      <ul className={styles.cardList}>
        <li>
          <div className={styles.imageContainer}>
            <img src={t1}></img>
          </div>
          <div className={styles.textContainer}>
            <p>오렌지 티셔츠</p>
            <p>15000원</p>
          </div>
        </li>
        <li>
          <div className={styles.imageContainer}>
            <img src={t2}></img>
          </div>
          <div className={styles.textContainer}>
            <p>야자수 티셔츠</p>
            <p>15000원</p>
          </div>
        </li>
        <li>c</li>
        <li>d</li>
        <li><div className={styles.imageContainer}>
          <img src={t2}></img>
        </div>
          <div className={styles.textContainer}>
            <p>야자수 티셔츠</p>
            <p>15000원</p>
          </div></li>
        <li>f</li>
        <li>g</li>
        <li>h</li>
      </ul>
    </div>

  )
}

export default CardList;