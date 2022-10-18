import PagesHeading from '../../components/Pages Heading/PagesHeading'
import styles from './OurCoffee.module.sass'
import ourCoffeeBg from '../../img/Our-coffee-bg.jpg'
import ourCoffeeAbout from '../../img/Our-coffee-about.png'
import PagesInfo from '../../components/Pages Info/PagesInfo'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import solimoCoffeeDecaf from '../../img/Solimo-coffee-decaf.png'
import solimoCoffeeIntense from '../../img/Solimo-Coffee-Intense.png'
import lavazzaRossa from '../../img/Lavazza-rossa.png'
import hausbrandtGourmet from '../../img/Hausbrandt-Gourmet-Columbus.png'
import { useState } from 'react'

const OurCoffee = () => {
	const text = (
		<>
			Extremity sweetness difficult behaviour he of. On disposal of as landlord
			horrible. <br /> <br />
			Afraid at highly months do things on at. Situation recommend objection do
			intention
			<br /> so questions.
			<br />
			As greatly removed calling pleased improve an. <br />
			Last ask him cold feel
			<br /> met spot shy want. Children me laughing we prospect answered
			followed. At it went
			<br /> is song that held help face.
		</>
	)

	const cardsData = [
		{
			imgUrl: solimoCoffeeDecaf,
			alt: 'Solimo Coffee Decaffeinated 1kg',
			name: 'Solimo Coffee Decaffeinated 1kg',
			price: '14.99$',
			country: 'Brazil',
			link: 'solimo-coffee-decaf',
		},
		{
			imgUrl: solimoCoffeeIntense,
			alt: 'Solimo Coffee Intense 1kg',
			name: 'Solimo Coffee Intense 1kg',
			price: '15.99$',
			country: 'Kenya',
			link: 'solimo-coffee-intense',
		},
		{
			imgUrl: lavazzaRossa,
			alt: 'Lavazza Rossa 1kg',
			name: 'Lavazza Rossa 1kg',
			price: '10.99$',
			country: 'Columbia',
			link: 'lavazza-ross',
		},
		{
			imgUrl: hausbrandtGourmet,
			alt: 'Hausbrandt Gourmet Columbus 1kg',
			name: 'Hausbrandt Gourmet Columbus 1kg',
			price: '12.99$',
			country: 'Brazil',
			link: 'hausbrandt-gourmet-columbus',
		},
	]

	const buttonsData = [
		{ name: 'All', filter: false },
		{ name: 'Brazil', filter: false },
		{ name: 'Kenya', filter: false },
		{ name: 'Columbia', filter: false },
	]

	const [cards, setCards] = useState(cardsData)
	const [activeBtn, setActiveBtn] = useState(buttonsData)

	const onCardsFilterClick = e => {
		const attr = e.target.getAttribute('data-label')
		setCards(
			cardsData.filter(item => {
				if (item.country === attr) {
					return item
				}
				if (attr === 'All') {
					return cardsData
				}
			})
		)
		setActiveBtn(
			buttonsData.map(item => {
				return item.name === attr ? { ...item, filter: true } : item
			})
		)
	}

	const onSearchInput = e => {
		setCards(
			cardsData.filter(item => {
				return (
					item.name.toLowerCase().indexOf(e.target.value) > -1 ||
					item.country.toLowerCase().indexOf(e.target.value) > -1
				)
			})
		)
		setActiveBtn(
			buttonsData.map(item => {
				return { ...item, filter: false }
			})
		)
	}

	return (
		<>
			<div className={styles.OurCoffee}>
				<PagesHeading heading='Our Coffee' bgImg={ourCoffeeBg} />
				<PagesInfo
					image={ourCoffeeAbout}
					alt='Our Coffee'
					heading={'About our beans'}
					text={text}
				/>
				<Filter
					onCardsFilterClick={onCardsFilterClick}
					onSearchInput={onSearchInput}
					activeBtn={activeBtn}
				/>
				<div className={styles.OurCoffee_Cards}>
					{cards.length > 0 ? <Card cardsData={cards} /> : 'Empty'}
				</div>
			</div>
		</>
	)
}

export default OurCoffee
