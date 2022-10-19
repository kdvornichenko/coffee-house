import PagesHeading from '../../components/Pages Heading/PagesHeading'
import styles from './ForYourPleasure.module.sass'
import pleasureBg from '../../img/For-your-pleasure-bg.png'
import pleasureAbout from '../../img/For-your-pleasure-about.png'
import PagesInfo from '../../components/Pages Info/PagesInfo'
import Card from '../../components/Card/Card'
import cardsData from '../../components/cardsData'

const ForYourPleasure = () => {
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
	return (
		<div className={styles.Pleasure}>
			<PagesHeading heading='Our Coffee' bgImg={pleasureBg} />
			<PagesInfo
				image={pleasureAbout}
				alt='Our Coffee'
				heading={'About our beans'}
				text={text}
			/>
			<div className={styles.Cards}>
				<Card cardsData={cardsData} />
			</div>
		</div>
	)
}

export default ForYourPleasure
