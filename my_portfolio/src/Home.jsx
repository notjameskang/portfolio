import "./home.css"
function Home() {
  return (
    <>
      <main>
        <section id="Hero" class="hero-section">
          <div class="text">
            <h1>Network & IT Enthusiest</h1>
            <h2>Welcome to My Portfolio!</h2>
            <p>I am a recent graduate from Virginia Tech, where I earned dual degrees in Cybersecurity Management & Analytics and Business Information Technology. I am passionate about IT security and am currently pursuing industry-recognized certifications, including CompTIA Security+ and Network+, to further strengthen my skills and knowledge in the field.</p>

            <div class="links">
              <a href="#skills">
                <i class="fa-solid fa-code"></i>
                <span>Skills</span>
              </a>

              <a href="Projects.html">
                <i class="fa-solid fa-pen"></i>
                <span>Projects</span>
              </a>

              <a href="#contact">
                <i class="fa-solid fa-envelope"></i>
                <span>Contact</span>
              </a>

              <a href="resume.pdf" download="James Kang Resume-3.pdf">
                <i class="fa-solid fa-file"></i>
                <span>Get Resume</span>
              </a>
            </div>
          </div>
          <div class="headshot">

            <img src="/Users/jameskang/Desktop/VSC/portfolio/VulnCatcher/app/static/css/img/selfPortrait.jpg" alt="" />
          </div>
        </section>
        <section id="skills" class="skills-section">
          <h2>Skills</h2>
          <div class="text">...</div>

          <div class="cells">
            <div class="cell">
              <img src="html-logo.webp" alt="html logo" />
              <span>HTML</span>
            </div>

            <div class="cell">
              <img src="VulnCatcher/app/static/css/img/css-logo.webp" alt="css logo" />
              <span>CSS</span>
            </div>

            <div class="cell">
              <img src="SECURITYPLUS.webp" alt="security+ logo" />
              <span>Cybersecurity Principles</span>
            </div>

            <div class="cell">
              <img src="kisspng-python-computer-icons-programming-language-executa-1713885557346.webp" alt="python logo" />
              <span>Python</span>
            </div>

            <div class="cell">
              <img src="Microsoft_Excel-Logo.wine.png" alt="excel logo" />
              <span>Microsoft Excel</span>
            </div>
          </div>
        </section>
        <section id="contact" class="contact-section">
          <h2>Contact</h2>

          <div class="group">
            <div class="text">
              <p>I’m always open to connecting with professionals in cybersecurity and IT. Feel free to reach out if you’d like to collaborate, share ideas, or discuss opportunities.</p>
            </div>

            <form action="/contact" method="POST">
              <label for="name">Name</label>
              <input type="text" id="name" />

              <label for="email">Email</label>
              <input type="email" id="email" />

              <label for="subject">Subject</label>
              <input id="subject" name="subject" type="text"required />
          
              <label for="message">Message</label>
              <textarea id="message" cols="30" rows="10"></textarea>
              <label for="attachment">Attachment (optional)</label>
              <input id="attachment" name="attachment" type="file" accept=".pdf,.doc,.docx,.txt" />

              <button class="submit" type="submit">Send Message</button>
              <button class="reset" type="reset">Clear</button>
            </form>
          </div>
        </section>
      </main>
    </>
    )
}
export default Home