import styles from './CardModal.module.sass'

const CardModal = ({ cardModal }) => {
	return cardModal.map(({ imgUrl, alt, name, description, country, price }) => {
		return (
			<div data-name={name} className={styles.CardModal} key={name}>
				<img src={imgUrl} alt={alt} style={{ width: '100px' }} />
				<div></div>
			</div>
		)
	})
}

export default CardModal
