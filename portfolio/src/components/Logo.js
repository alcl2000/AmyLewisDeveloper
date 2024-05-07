import styles from "../styles/Logo.module.css"

const Logo = (color) => {
    return (
        <div>
            <a className={styles.LogoFont} style={color={color}} href="/">AL.</a>
        </div>
    )
}

export default Logo;