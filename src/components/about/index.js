import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.container} ${styles.containerFlex}`}>
        <h2 className={styles.aboutMe}>
          <span className={styles.headerNum}>01.</span> About Me
        </h2>
        <div className={styles.aboutDescription}>
          <p className={styles.aboutInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nisl ex, auctor ac nisl eu, aliquet venenatis nunc. In
            hac habitasse platea dictumst. Praesent eget libero eu ex volutpat
            tincidunt vel non ante. Pellentesque cursus est nec pellentesque
            viverra. Praesent tincidunt vel orci vel dignissim. Ut ipsum enim,
            ultrices sit. Pellentesque cursus est nec pellentesque viverra.
            Praesent tincidunt vel orci vel dignissim. Ut ipsum enim, ultrices
            sit.
          </p>
          <article className={styles.socialImg}>
            <img
              src="/images/man-1.png"
              alt="man at work"
              className={styles.aboutImg}
            />
          </article>
        </div>
      </div>
    </section>
  )
}
