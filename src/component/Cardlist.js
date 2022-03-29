import styles from '../css/CardList.module.css';
import { useParams, Link } from 'react-router-dom';

const Card = ({key, tshirt}) => {
  let { category } = useParams();
  return (
    <li key={key}>
      <div className={styles.imageContainer}>
        <Link to={`/${category}/detail/${key}`}>
        <img src={tshirt.src}></img>
        </Link>
      </div>
      <div className={styles.textContainer}>
        <p>{tshirt.name}</p>
        <p>{tshirt.price}원</p>
      </div>
    </li>
  )
}

function CardList(props) {
  let { category } = useParams();
  return (
    <div className={styles.cardContainer}>
      {
        category === undefined ? <p>New Drops</p> : null
      }

      <ul className={styles.cardList}>
        {
          props.tshirts.map((tshirt, i) => {
            return <Card key={i} tshirt={tshirt} ></Card>
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