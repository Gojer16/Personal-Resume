import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { SiHackerone } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";




function Footer () {

    const styles = {
        footer: {
            backgroundColor: '#333',
            color: '#fff',
            padding: '20px 0',
            textAlign: 'center',
            position: 'relative',
            bottom: '0',
            width: '100%',
        },
        footerContent: {
            maxWidth: '1200px',
            margin: '0 auto',
        },
        socialLinks: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '10px',
        },
        iconLink: {
            color: '#fff',
            textDecoration: 'none',
        },
        icon: {
            transition: 'transform 0.3s ease',
        },
    };
    

    return (
        <footer style={styles.footer}>
        <div style={styles.footerContent}>
            <h2>&copy; {new Date().getFullYear()} Orlando's Website</h2>
            <h2>Develop, Maintened and Secured By Gojer.</h2>
            <div style={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/orlando-ascanio-52527b2a8/" target="_blank" rel="" style={styles.iconLink}>
                    <FaLinkedin size={24} style={styles.icon} />
                </a>
                <a href="https://github.com/gojer16" target="_blank" rel="" style={styles.iconLink}>
                    <FaGithub size={24} style={styles.icon} />
                </a>
                <a href="https://x.com/dovaking927" target="_blank" rel="" style={styles.iconLink}>
                    <BsTwitterX size={24} style={styles.icon} />
                </a>
                <a href='https://leetcode.com/u/gojer16/' target='_blank' rel="">
                <TbBrandLeetcode size={25} style={styles.icon} color='white'/>
                </a>
                <a href='https://hackerone.com/gojer?type=user' target='_blank' rel='' style={styles.iconLink}>
                <SiHackerone size={24} style={styles.icon}/>
                </a>
            </div>
        </div>
    </footer>
    )
}

export default Footer