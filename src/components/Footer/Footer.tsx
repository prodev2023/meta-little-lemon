import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<img src='/restaurant.jpg' alt='Restaurant' />
			<nav className={styles.footerNav}>
				<ul className={styles.footerNavLinks}>
					<li>Doormat Navigation</li>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#menu'>Menu</a>
					</li>
					<li>
						<a href='/booking'>Reservations</a>
					</li>
					<li>
						<a href='/'>Order Online</a>
					</li>
					<li>
						<a href='/'>Login</a>
					</li>
				</ul>
				<ul className={styles.footerNavLinks}>
					<li>Contact</li>
					<li>
						<a href='+1 568-475-0471'>Phone No</a>
					</li>
					<li>
						<a href='online@littlelemon.com'>Email</a>
					</li>
				</ul>
				<ul className={styles.footerNavLinks}>
					<li>Socials</li>
					<li>
						<a href='https://www.facebook.com/littlelemon'>Facebook</a>
					</li>
					<li>
						<a href='https://www.twitter.com/littlelemon'>Twitter</a>
					</li>
					<li>
						<a href='https://www.instagram.com/littlelemon'>Instagram</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
