import PIC from '../assets/p2.jpg'
import { Link } from "react-router-dom";
export function Upload() {
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundImage: `url(${PIC})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: 'white', fontWeight: 'bold', marginTop: '25rem', fontSize: '2rem' }}>
                <div>Enter the rabbit hole before it gets late</div>
                <Link to={'/'} >Home</Link>
            </div>
        </div>
    )
}