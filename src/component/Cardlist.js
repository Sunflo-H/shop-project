import styles from '../css/CardList.module.css';
import { useParams, Link } from 'react-router-dom';
import React from 'react';

const Card = ({ id, tshirt }) => {
  console.log("카드 하나하나 렌더링");
  let { category } = useParams();
  if(category === undefined) {
    category = "new"
  };
  return (
    <li key={id}>
      <div className={styles.imageContainer} >
        <Link to={`/${category}/detail/${id}`}>
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
  console.log("카드 리스트 렌더링");
  let { category } = useParams();
  return (
    <div className={styles.cardContainer}>
      <ul className={styles.cardList}>
        {
          props.tshirts.map(tshirt => {
            return (
              <React.Fragment key={tshirt.id}>
                <Card id={tshirt.id} tshirt={tshirt} />
              </React.Fragment>
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