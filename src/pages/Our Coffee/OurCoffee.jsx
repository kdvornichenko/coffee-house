import PagesHeading from '../../components/Pages Heading/PagesHeading'
import styles from './OurCoffee.module.sass'
import ourCoffeeBg from '../../img/Our-coffee-bg.jpg'
import ourCoffeeAbout from '../../img/Our-coffee-about.png'
import PagesInfo from '../../components/Pages Info/PagesInfo'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import { useRef, useState } from 'react'
import CardModal from '../../components/Card Modal/CardModal'
import cardsData from '../../components/cardsData'

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

	const buttonsData = [
		{ name: 'All', filter: false },
		{ name: 'Brazil', filter: false },
		{ name: 'Kenya', filter: false },
		{ name: 'Columbia', filter: false },
	]

	const [cards, setCards] = useState(cardsData)
	const [activeBtn, setActiveBtn] = useState(buttonsData)
	const [cardModalData, setCardModalData] = useState(cardsData)
	const [showCardModal, isShowCardModal] = useState(false)

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
					item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 ||
					item.country.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
				)
			})
		)
		setActiveBtn(
			buttonsData.map(item => {
				return { ...item, filter: false }
			})
		)
	}

	const onCardClick = e => {
		setCardModalData(
			cardsData.filter(item => {
				return item.name === e.target.closest('[data-name]').dataset.name
			})
		)

		isShowCardModal(true)
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
				<div className={styles.Cards}>
					{cards.length > 0 ? (
						<Card cardsData={cards} onCardClick={onCardClick} />
					) : (
						"Ooops... We don't have that kind of coffee"
					)}
				</div>
				{showCardModal && (
					<CardModal
						isShowCardModal={isShowCardModal}
						cardModalData={cardModalData}
					/>
				)}
			</div>
		</>
	)
}

export default OurCoffee
