import styles from "./styles.module.scss";
import { Container } from 'reactstrap'

const CardsSection = function () {
  return (
    <>
	<p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
	<Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
    <div className={styles.card1}>
			<p className={styles.cardTitle}>FRONT-END</p>
			<p className={styles.cardDescription}>
                O curso de Frontend é uma formação para quem deseja aprender a criar interfaces de usuário para sites e aplicativos web.
            </p>
		</div>
    <div className={styles.card2}>
			<p className={styles.cardTitle}>BACK-END</p>
			<p className={styles.cardDescription}>
            O curso de Backend é uma formação para quem deseja aprender a criar a lógica e a funcionalidade de aplicativos e sistemas web.
			</p>
		</div>
    <div className={styles.card3}>
			<p className={styles.cardTitle}>MOBILE</p>
			<p className={styles.cardDescription}>
            O curso de Mobile é uma formação para quem deseja aprender a desenvolver aplicativos móveis nativos para iOS e Android.
			</p>
		</div>
    <div className={styles.card4}>
			<p className={styles.cardTitle}>GIT & GITHUB</p>
			<p className={styles.cardDescription}>
            O curso de Git & Github é uma formação para quem deseja aprender a usar o sistema de controle de versão Git e a plataforma de hospedagem de código Github.
			</p>
		</div>
    <div className={styles.card5}>
			<p className={styles.cardTitle}>PROJETOS</p>
			<p className={styles.cardDescription}>
            Os projetos criados dentro do curso Programador Fullstack são desenvolvidos pelos alunos para aplicar os conceitos e habilidades aprendidas durante o curso.
			</p>
		</div>
    <div className={styles.card6}>
			<p className={styles.cardTitle}>CARREIRA</p>
			<p className={styles.cardDescription}>
            O módulo de Carreira do Curso é uma seção voltada para ajudar os alunos a entrar no mercado de trabalho da programação.
			</p>
		</div>
    </Container>
    </>
  );
};

export default CardsSection;