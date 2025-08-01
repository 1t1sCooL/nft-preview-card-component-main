import Footer from "./Footer.tsx";
import styles from  './App.module.css'

function App() {
return(<>
        <div className={styles.container}>
            <h1 className={styles.hidden}>
                Equilibrium #3429
            </h1>
            <img className={styles.img}
                 src='../../public/image-equilibrium.jpg'
                 alt='Equilibrium'
            />
            <h2 className={styles.header}>
                Equilibrium #3429
            </h2>
            <p className={styles.description}>
                Our Equilibrium collection promotes balance and calm.
            </p>
            <div>
                <span className={styles.price}>0.041 ETH</span>
                <span className={styles.daysLeft}>3 days left</span>
            </div>
            <div className={styles.author}>Creation of Jules Wyvern</div>
        </div>
        <Footer/>
        </>
    )
}

export default App
