import { Link } from 'react-router-dom'
import styles from './Card.module.sass'

const Card = ({ cardsData }) => {
	return cardsData.map(({ imgUrl, alt, name, country, price, link }) => {
		return (
			<Link to={link} key={name} className={styles.Card_Link}>
				<div className={styles.Card}>
					<div className={styles.Card_ImgWrap}>
						<img className={styles.Card_Img} src={imgUrl} alt={alt} />
					</div>
					<p className={styles.Card_Name}>{name}</p>
					<p className={styles.Card_Country}>{country}</p>
					<p className={styles.Card_Price}>{price}</p>
				</div>
			</Link>
		)
	})
}

export default Card
