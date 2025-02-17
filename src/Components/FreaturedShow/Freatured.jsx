import styles from './Freatured.module.css'
//images
import show1 from '../../assets/Show1.webp'
import show2 from '../../assets/Show2.webp'
import show3 from '../../assets/Show3.webp'
import show4 from '../../assets/Show4.webp'
import show5 from '../../assets/Show5.webp'
import show6 from '../../assets/Show6.webp'
import show7 from '../../assets/Show7.webp'
import show8 from '../../assets/Show8.webp'
import show9 from '../../assets/Show9.avif'

export const Freatured1=()=>{
    return<>
             <div className={styles.freaturedshow}>
                <img src={show1} alt="" />
                <img src={show2} alt="" />
                <img src={show3} alt="" />
                <img src={show4} alt="" />
                <img src={show5} alt="" />
                <img src={show6} alt="" />
                <img src={show7} alt="" />
                <img src={show8} alt="" />
               
                
                </div>
    </>
}