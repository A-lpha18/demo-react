import styles from './Freatured.module.css' 
import { Freatured1 } from '../FreaturedShow/Freatured'
export const Freatured=()=>{
    return<>
        <section className={styles.Freatured}>
            <h1 className={styles.sectiontitle}>Hot Right Now </h1>
            <div className={styles.shows}>
                <Freatured1/>
            
            </div>
        </section>
    </>
}