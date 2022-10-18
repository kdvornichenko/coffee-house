import styles from './PagesHeading.module.sass'

const PagesHeading = ({ heading, bgImg }) => {
	return (
		<div
			style={{ backgroundImage: `url('${bgImg}')` }}
			className={styles.PagesHeading}
		>
			<h1 className={styles.PagesHeading_H1}>{heading}</h1>
		</div>
	)
}

export default PagesHeading
