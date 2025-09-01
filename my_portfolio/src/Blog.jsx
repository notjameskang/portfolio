import "./blog.css"
function Blog() {
    return (
        <>
            <main class="portfolio-container">
                <header class="portfolio-header">
                    <h1>My Blog Posts</h1>
                    <p>Weekly Blog Posts</p>
                </header>

                <section class="projects-grid">
                    <article class="project-card" data-project="1">
                        {/* <div class="project-image">
                            <img src="blog1.jpeg?height=200&width=300" alt="Blog Post Image">
                        </div> */}
                        <div class="project-content">
                            <h3 class="project-title">My First Blog!</h3>
                            <p class="project-description">I am currently in the middle of job searching and working on personal web dev projects.</p>
                            <button class="view-project-btn" onclick="openModal(1)">View Blog</button>
                        </div>
                    </article>

                </section>

            </main>
            <div id="projectModal" class="modal">
                <div class="modal-content">
                    <span class="close-btn" onclick="closeModal()">&times;</span>
                    <div id="modalBody">
                    </div>
                </div>
            </div>
        </>
    )

}
export default Blog