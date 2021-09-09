import Image from 'next/image'
import Link from 'next/link';
const data = require('../Data/data.json');
import image from '../public/PIC.jpeg';
import styles from './Components/sytle.module.css';
export default function general() {
    return (
        <div className={styles.a}>
        <Link href="./api/data">
         <a>
        <Image src={image} alt="Picture of the hala" className={styles.Image} /></a>
        </Link>
        <span className={styles.a}>
        {data.data[0].name}
        </span>
         </div>

    )
}