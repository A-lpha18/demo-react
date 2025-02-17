import styles from './Shows.module.css' 
import image from '../../assets/download.jpeg'
import { Show } from '../Show/Show'
export const Shows=()=>{
    return<>
        <section className={styles.shows}>
            <h1 className={styles.font}>Hindi Movies</h1>
                <div className={styles.allshows}>
                    <Show Image={image}/>
                    <Show Image={image}/>
                    <Show Image={image}/>
                    <Show Image={image}/>
                    <Show Image={image}/>
                    <Show Image={image}/>
                    <Show Image={image}/>
                </div>
        </section>
    </>
}