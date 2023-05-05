import styles from '../styles/registerLogin.module.scss'
import Head from 'next/head'
import HeaderGeneric from '@/src/components/common/headerGeneric'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Footer from '@/src/components/common/footer'
import { useRouter } from 'next/router'
import { useState, useEffect, FormEvent } from 'react'
import ToastComponent from '@/src/components/common/toast'
import authService from '@/src/services/authService'

const Login = function () {
    const router = useRouter()
    const [toastColor, setToastColor] = useState("") 
    const [toastIsOpen, setToastIsOpen] = useState(false)
    const [toastMessage, setToastMessage] = useState("")

    useEffect(() => {
        if (sessionStorage.getItem("onebitflix-token")) {
          router.push("/home");
      }
              // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(() => {
        const registerSucess = router.query.registred

        if (registerSucess === 'true') {
            setToastColor('bg-success')
            setToastIsOpen(true)
            setTimeout(() => {
            setToastIsOpen(false)
          }, 1000 * 3)
            setToastMessage("Cadastro feito com sucesso")        
        }
    }, [router.query])

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()
        const params = {email, password}

        const { status } = await authService.login(params)

        if (status === 200) {
            router.push('/home')
        } else {
            setToastColor('bg-danger')
            setToastIsOpen(true)
            setTimeout(() => {
            setToastIsOpen(false)
          }, 1000 * 3)
            setToastMessage("E-mail ou senha incorretos")       

        }
    }

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
                <Form className={styles.form} onSubmit={handleLogin}>
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
                    <Button outline className={styles.formBtn} type='submit'>Entrar</Button>
                </Form>
                <ToastComponent color={toastColor} isOpen={toastIsOpen} message={toastMessage}/>
            </Container>
                <Footer/>
        </main>
        </>
    )
}

export default Login