import React ,{useEffect} from 'react'

import styles from './index.module.css'

import ComHead from '../../components/ComHead'
import TopMessage from '../../components/TopMessage'
import LeftMessage from '../../components/LeftMessage'
import CentreMessage from '../../components/CentreMessage'
import RightMessage from '../../components/RightMessage'
import BottomMessage from '../../components/BottomMessage'

function Home() {
  // const [datas,setDatas] =useState()

  useEffect(()=>{
    // api10000006567().then((res)=>{
    //   console.log(res);
    // })
    console.log('31');
  },[])


  return (
    <div className={styles.home}>
      <div className={styles.top_head}>
        <ComHead></ComHead>
      </div>

      <div className={styles.top}>
        <TopMessage></TopMessage>
      </div>

      <div className={styles.centre}>
        <LeftMessage></LeftMessage>
        <CentreMessage></CentreMessage>
        <RightMessage></RightMessage>
      </div>

      <div className={styles.bottom}>
        <BottomMessage></BottomMessage>
      </div>
    </div>
  );
}

export default Home;
