import styles from './Card.module.sass'

const Card = ({ cardsData, onCardClick }) => {
	return cardsData.map(({ imgUrl, alt, name, country, price }) => {
		return (
			<div onClick={onCardClick} key={name} className={styles.Card_Link}>
				<div className={styles.Card} data-name={name}>
					<div className={styles.Card_ImgWrap}>
						<img className={styles.Card_Img} src={imgUrl} alt={alt} />
					</div>
					<p className={styles.Card_Name}>{name}</p>
					<p className={styles.Card_Country}>{country}</p>
					<p className={styles.Card_Price}>{price}</p>
				</div>
			</div>
		)
	})
}

export default Card
