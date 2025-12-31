import Footer from "./Footer.tsx";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.hidden}>Equilibrium #3429</h1>
        <div className={styles.img}>
          <img
            className={styles.img}
            src="/NFTPreviewCardComponent/image-equilibrium.jpg"
            // src="/image-equilibrium.jpg"
            alt="Equilibrium"
          />
        </div>
        <h2 className={styles.header}>Equilibrium #3429</h2>
        <p className={styles.description}>
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className={styles.flexWrap}>
          <div className={styles.priceWrap}>
            <svg
              width="11"
              height="18"
              viewBox="0 0 11 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            <span className={styles.price}>0.041 ETH</span>
          </div>
          <div className={styles.daysLeftWrap}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>{" "}
            <span className={styles.daysLeft}>3 days left</span>
          </div>
        </div>
        <div className={styles.author}>
          <div className={styles.avatar}>
            <img
              //   src="/image-avatar.png"
              src="/NFTPreviewCardComponent/image-avatar.png"
              alt={"Author avatar"}
            />
          </div>
          Creation of <span className={styles.name}> Jules Wyvern</span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
