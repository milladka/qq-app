import PIC from '../assets/p1-front.jpg'
import { Link } from "react-router-dom";
export function Root() {
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundImage: `url(${PIC})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: 'white', fontWeight: 'bold', marginTop: '25rem', fontSize: '2rem', textAlign: 'center' }}>
                <div> <Link to={'upload'} >Enter</Link> the rabbit hole before it gets late</div>

            </div>
        </div>
    )
}