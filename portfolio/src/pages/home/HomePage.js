import Logo from "../../components/Logo"
import styles from "../../styles/HomePage.module.css"

const HomePage = () => {
    return( 
        <section className={styles.Main}>
            <div className="p-t-2 pl-2">
                <Logo/>
            </div>
            <h1 className={styles.Text}>
                Hello
            </h1>
        </section>
    )
}

export default HomePage