import styles from '../styles/registerLogin.module.scss'
import Head from 'next/head'
import HeaderGeneric from '@/src/components/common/headerGeneric'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Footer from '@/src/components/common/footer'

const Login = function () {
    return (
        <>
        <Head>
            <title>Onebitflix - Login</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main className={styles.main}>
            <HeaderGeneric btnContent='Quero fazer parte' btnUrl='/register' logoUrl='/'/>
            <Container className='py-5'>
                <p className={styles.formTitle}>Bem vindo(a) de <span>volta!!</span></p>
                <Form className={styles.form}>
                    <p className='text-center'>
                        <strong>Bem vindo(a) ao <span className={styles.onebitflix}>Onebitflix</span></strong>
                    </p>
                    <FormGroup>
                        <Label for='email' className={styles.label}>E-MAIL</Label>
                        <Input id='email' name='email' type='email' required placeholder='Digite o seu email' className={styles.input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password' className={styles.label}>SENHA</Label>
                        <Input id='password' name='password' type='password' required placeholder='Digite a sua senha' className={styles.input}/>
                    </FormGroup>
                    <Button outline className={styles.formBtn}>Entrar</Button>
                </Form>
            </Container>
                <Footer/>
        </main>
        </>
    )
}

export default Login