import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaSass } from 'react-icons/fa'
import {
  SiJavascript,
  SiGithub,
  SiStyledcomponents,
  SiSwagger,
  SiNextdotjs,
  SiRedux,
} from 'react-icons/si'
import { DiResponsive } from 'react-icons/di'

import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={`${styles.container} ${styles.containerFlex}`}>
        <h2 className={styles.iconHeader}>
          <span className={styles.headerNum}>02.</span> Skills & Tools
        </h2>
        <p>
          The skills, tools and technologies I use to bring your products to
          life:
        </p>
        <div className={styles.iconStack}>
          <div className={styles.iconBox}>
            <FaHtml5 className={styles.icon} />
            <p>HMTL 5</p>
          </div>
          <div className={styles.iconBox}>
            <FaCss3Alt className={styles.icon} />
            <p>CSS 5</p>
          </div>
          <div className={styles.iconBox}>
            <SiJavascript className={styles.icon} />
            <p>Javascript</p>
          </div>
          <div className={styles.iconBox}>
            <FaReact className={styles.icon} />
            <p>React JS</p>
          </div>
          <div className={styles.iconBox}>
            <SiNextdotjs className={styles.icon} />
            <p>Next JS</p>
          </div>
          <div className={styles.iconBox}>
            <SiRedux className={styles.icon} />
            <p>Redux</p>
          </div>
          <div className={styles.iconBox}>
            <FaGitAlt className={styles.icon} />
            <p>Git</p>
          </div>
          <div className={styles.iconBox}>
            <SiGithub className={styles.icon} />
            <p>GitHub</p>
          </div>
          <div className={styles.iconBox}>
            <FaSass className={styles.icon} />
            <p>SASS</p>
          </div>
          <div className={styles.iconBox}>
            <SiStyledcomponents className={styles.icon} />
            <p>Styled Components</p>
          </div>
          <div className={styles.iconBox}>
            <DiResponsive className={styles.icon} />
            <p>Responsive Design</p>
          </div>
          <div className={styles.iconBox}>
            <SiSwagger className={styles.icon} />
            <p>Rest APIs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
