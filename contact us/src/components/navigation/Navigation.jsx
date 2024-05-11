import styles from './Navigation.module.css'
export const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}> 
      <div className="logo"><img src="/images/logo.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About us </li>
        <li>Contact us</li>
      </ul>
      </nav>
  )
}
export default Navigation;
