import Header from "../components/Header"
import Hero from "../components/Hero"
import ProjectsList from "../components/ProjectsList"
import Footer from "../components/Footer"

function Home() {
    return (
        <>
            <Header />

            <div className="container ">
                <Hero />
                <ProjectsList />
                
            </div>
            <Footer />
        </>
    )
}

export default Home