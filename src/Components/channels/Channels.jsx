import { useState } from 'react';
import styles from './Channels.module.css';
import ch1 from '../../assets/channel1.jpg';
import ch2 from '../../assets/channel2.png';
import ch3 from '../../assets/channel3.jpg';
import ch4 from '../../assets/channel4.jpg';
import ch5 from '../../assets/channel5.jpg';
import ch6 from '../../assets/channel6.jpg';
import ch7 from '../../assets/channel7.jpg';

export const Channels = () => {
  let [channels, setChannels] = useState([
    1,2,3,4,5,6,7
  ]);

  return (
    <div className={styles.channel}>
      {/* {channels.map((channel, index) => (
        <div key={index} className={styles.channelItem}>
          <img src={channel.img} alt={channel.name} className={styles.channelImg} />
          <li>{channel.name}</li>
        </div>
      ))} */}
      <img src={ch1} alt="" />
      <img src={ch2} alt="" />
      <img src={ch3} alt="" />
      <img src={ch4} alt="" />
      <img src={ch5} alt="" />
      <img src={ch6} alt="" />
      <img src={ch7} alt="" />
    </div>
  );
};