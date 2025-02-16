import styles from './Header.module.css' 
//images
import JClogo from '../../assets/jc_logo_v2.svg'
import Crown from '../../assets/crown.svg'
import SearchIcon from '../../assets/ic_search.svg'
import micIcon from '../../assets/voice-search.svg'
import Acc from '../../assets/jio-logo.png'

let navLink=["Home","Sports","Movies","TVShows","More"]

export const Header=()=>{
    return<>
        <div className={styles.Header}>
            <div className={styles.navigation}>
                <img src={JClogo} className={styles.logo} alt="" />
                <div className={styles.premire}>
                    <img src={Crown} alt="" />
                    Go Premium
                </div>

                <ul className={styles.navLink}>
                    {navLink.map((link)=>{
                        return<>
                            <li>{link}</li>
                        </>
                    })}
                </ul>
            </div>
            <div className={styles.search}>
                    <div className={styles.searchBox}>
                        <img src={SearchIcon} alt="" className={styles.searchicon}/>
                        <input type="text" placeholder='Movies,Shows and more' className={styles.inputBox}required/>
                        <img src={micIcon} className={styles.micIcon} alt="" />
                    </div>
                    <div className={styles.account}>
                        <img src={Acc} alt="" className={styles.accIcon}/>
                    </div>
            </div>
        </div>
    </>
}