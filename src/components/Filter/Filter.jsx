import FilterButtons from '../Filter Buttons/FilterButtons'
import styles from './Filter.module.sass'

const Filter = ({ onCardsFilterClick, activeBtn, onSearchInput }) => {
	return (
		<div className={styles.Filter}>
			<div className={styles.Filter_InputWrap}>
				<p className={styles.Filter_Text}>Lookiing for</p>
				<input
					className={styles.Filter_Input}
					type='text'
					placeholder='name or country'
					onChange={onSearchInput}
				/>
			</div>
			<div className={styles.Filter_BtnsWrap}>
				<p className={styles.Filter_Text}>Or Filter</p>
				<div className={styles.Filter_Btns}>
					<FilterButtons
						onCardsFilterClick={onCardsFilterClick}
						activeBtn={activeBtn}
					/>
				</div>
			</div>
		</div>
	)
}

export default Filter
