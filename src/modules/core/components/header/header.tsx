import { HeaderStyles } from './header.styles';

export const MainHeader = () => {
	const styles = HeaderStyles();

	return (
		<header className={styles.root}>
			<span className={styles.hero}>Soluciones Eléctricas para<br/> su Hogar o Proyecto.</span>
			<div className={styles.background}/>
		</header>
	);
};
