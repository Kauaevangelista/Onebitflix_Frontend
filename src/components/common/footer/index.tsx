import styles from "./styles.module.scss";
import { Container } from 'reactstrap'

const Footer = function () {
  return (
    <>
	<Container className={styles.footer}>
	  <img src="/logoOnebitcode.svg" alt="logoFooter" className={styles.footerLogo} />
      <a href="https://onebitcode.com" target={"blank"} className={styles.footerLink}>ONEBITCODE.COM</a>
    </Container>
    <Container className={styles.git}>
    <p>Feito com ❤ por <a href="https://github.com/kauaevangelista" target={"blank"} className={styles.linkGit}>Kauã Evangelista</a></p>
    </Container>
</>
  )
};

export default Footer