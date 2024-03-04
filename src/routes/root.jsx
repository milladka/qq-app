import PIC from '../assets/p1.jpg'
import { Link } from "react-router-dom";
export function Root() {
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundImage: `url(${PIC})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: 'white', fontWeight: 'bold', marginTop: '25rem', fontSize: '2rem', textAlign: 'center' }}>
                <div>Enter the rabbit hole before it gets late</div>
                <Link to={'upload'} >Upload</Link>
            </div>
        </div>
    )
}