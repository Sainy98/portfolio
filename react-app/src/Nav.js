import { useEffect, useState } from "react"

export default function Nav() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    const handleScroll = () => {
        const bgElement = document.getElementById('Background2');

        if (bgElement) {
            const currentScrollY = bgElement.scrollTop;

            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY); // Update last scroll position
        }
    };

    useEffect(() => {
        const bgElement = document.getElementById('Background2');

        if (bgElement) {
            bgElement.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (bgElement) {
                bgElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, [lastScrollY]);


    return (
        <nav className={`NavBar ${showNavbar ? 'visible' : 'hidden'}`}>
            <ul className="NavList">
                <li><a href="#About"><i class="fa-solid fa-user-graduate nav-icon"></i> About</a></li>
                <li><a href="#Skill"><i class="fas fa-cogs nav-icon"></i> Skill</a></li>
                <li><a href="#Edu"><i class="fas fa-graduation-cap nav-icon"></i> Education</a></li>
                <li><a href="#Project"><i class="fas fa-project-diagram nav-icon"></i> Project</a></li>
                <li><a href="#Hobby"><i class="fas fa-heart nav-icon"></i> Hobby</a></li>
                <li><a href="#Contact"><i class="fas fa-envelope nav-icon"></i> Contact</a></li>
                <li><a href="https://drive.google.com/file/d/1DniY0NP0EjNMafAOTaMBvpnosjekJgOj/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                ><i class="fa-solid fa-download nav-icon"></i> Resume</a></li>
            </ul>
        </nav>
    )
}