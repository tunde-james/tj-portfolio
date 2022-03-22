import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import styles from './Home.module.css'

export default function Home() {
  return (
    <header id="home" className={styles.about}>
      <div className={`${styles.container} ${styles.containerFlex}`}>
        <article className={styles.intro}>
          <div>
            <p className={styles.introText}>Hi, my name is</p>
            <h4 className={styles.introName}>Tunde James.</h4>
            <h4 className={styles.introJob}>
              I'm a frontend developer, who build things for the web.
            </h4>
            <p className={styles.introDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nisl ex, auctor ac nisl eu, aliquet venenatis nunc.
              In hac habitasse platea dictumst. Praesent eget libero eu ex
              volutpat tincidunt vel non ante. Pellentesque cursus est nec
              pellentesque viverra. Praesent tincidunt vel orci vel dignissim.
              Ut ipsum enim, ultrices sit. Pellentesque cursus est nec
              pellentesque viverra. Praesent tincidunt vel orci vel dignissim.
              Ut ipsum enim, ultrices sit.
            </p>
          </div>
        </article>

        <article className={styles.social}>
          <img src="/images/man-1.png" alt="man at work" className={styles.socialImg} />
          <div className={styles.socialIcons}>
            <a
              href="https://linkedin.com/in/tunde-james20"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/tunde-james"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/TundeJames_20"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaTwitter />
            </a>
            <a
              href="https://mail.google.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <MdOutlineEmail />
            </a>
          </div>
        </article>
      </div>
    </header>
  )
}
