import CoffeeBeans from '../Coffee Beans/CoffeeBeans'
import styles from './PagesInfo.module.sass'

const PagesInfo = ({ image, alt, heading, text }) => {
	return (
		<div className={styles.PagesInfo_Wrap}>
			<div className={styles.PagesInfo}>
				<img src={image} alt={alt} />
				<div>
					<h2>{heading}</h2>
					<CoffeeBeans color='black' />
					<p>{text}</p>
				</div>
			</div>
			<span className={styles.PagesInfo_BottomLine} />
		</div>
	)
}

export default PagesInfo
