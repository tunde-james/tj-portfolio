import { Link } from 'react-router-dom'

export default function About() {
  const ResumeLink = (
    <Link
      // className={`${styles.navlink} ${styles.resumeBtn}`}
      to="/Babatunde_Tiamiyu_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </Link>
  )

  return (
    <header>
      <article>
        <img src="/public/images/man-1.png" alt="man at work" />
        <div>
          <p>Linkedin</p>
          <p>GitHub</p>
          <p>Twitter</p>
          <p>Gmail</p>
        </div>
      </article>

      <article>
        <div>
          <p>Hi, my name is</p>
          <h4>Tunde James</h4>
          <h4>I'm a frontend developer, who build things for the web</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nisl ex, auctor ac nisl eu, aliquet venenatis nunc. In
            hac habitasse platea dictumst. Praesent eget libero eu ex volutpat
            tincidunt vel non ante. Pellentesque cursus est nec pellentesque
            viverra. Praesent tincidunt vel orci vel dignissim. Ut ipsum enim,
            ultrices sit.
          </p>
        </div>
        <div>
          <button>{ResumeLink}</button>
        </div>
      </article>
    </header>
  )
}
