const data = require('../Data/data.json');
import styles from './Components/sytle.module.css';

export default function skills() {
    return (
        <div className={styles.skills}>
                    {data.data[0].email}
                    <br/>
                    {data.data[0].address}
                    <br/>

                    {data.data[0].skills}
        </div>
    )
}