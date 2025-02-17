import styles from './Show.module.css'

export const Show=({Image})=>{
    return<>
        <div className={styles.movie}>
            <img src={Image} key={Image} alt="" />           
        </div>
    </>
}