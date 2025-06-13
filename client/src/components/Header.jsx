function Header() {
    return (
        <header className="header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="hello" style={{ textAlign: 'center' }}>
                <h1 tabIndex="0" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>My name is Orlando!</h1>
                <p tabIndex="0" style={{ fontSize: '1.5rem', marginTop: '0' }}>Front-End Developer</p>
                

                <nav aria-label="Main Navigation" style={{ width: '100%' }}>
                    <ul className="nav-list" style={{ display: 'flex', justifyContent: 'center', gap: '40px', listStyle: 'none', padding: '10px', width: "100%", backgroundColor: '#333', color: 'white', borderRadius: '5px', alignItems: "center" }}>
                        <li><a href="#home" aria-current="page" style={{ padding: "0 30px", color: 'white', textDecoration: 'none' }}>Home</a></li>
                        <li><a href="#about" style={{ padding: "0 30px", color: 'white', textDecoration: 'none' }}>About</a></li>
                        <li><a href="#projects" style={{ padding: "0 30px", color: 'white', textDecoration: 'none' }}>Projects</a></li>
                        <li><a href="#contact" style={{ padding: "0 30px" , color: 'white', textDecoration: 'none' }}>Contact</a></li>
                    </ul>
                </nav>
                <button className="cta-button" onClick={() => window.open('resume.docx', '_blank')}>Download Resume</button>
            </div>
        </header>
    );
}

export default Header;
