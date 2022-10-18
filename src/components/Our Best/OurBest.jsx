import Card from '../Card/Card'
import styles from './OurBest.module.sass'
import solimoCoffee from '../../img/Solimo-Coffee.png'
import prestoCoffee from '../../img/Presto-Coffee.png'
import aromisticoCoffee from '../../img/AROMISTICO-Coffee.png'

const OurBest = () => {
	const cardsData = [
		{
			imgUrl: solimoCoffee,
			alt: 'Solimo Coffee 2kg',
			name: 'Solimo Coffee Beans 2kg',
			price: '10.73$',
			link: 'solimo-coffee',
		},
		{
			imgUrl: prestoCoffee,
			alt: 'Presto Coffee 1kg',
			name: 'Presto Coffee Beans 1kg',
			price: '15.99$',
			link: 'presto-coffee',
		},
		{
			imgUrl: aromisticoCoffee,
			alt: 'AROMISTICO Coffee 1kg',
			name: 'AROMISTICO Coffee 1kg',
			price: '6.99$',
			link: 'aromistico-coffee',
		},
	]

	return (
		<div className={styles.OurBest}>
			<h2 className={styles.OurBest_Heading}>OurBest</h2>
			<div className={styles.OurBest_Cards}>
				<Card cardsData={cardsData} />
			</div>
		</div>
	)
}

export default OurBest
