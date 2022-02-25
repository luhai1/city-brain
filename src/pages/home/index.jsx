import React, { useEffect } from 'react'
import styles from './index.module.less'
import NarBar from '../../components/NavBar'
import { GeneralOverview } from "./components/GeneralOverview/index"
import { TerrainClass } from "./components/TerrainClass/index"
import { Map } from "./components/Map/index"
import { ConstructionLand } from "./components/ConstructionLand/index"
import { Plough } from "./components/Plough/index"
import { City } from "./components/City/index"
import { GreenCoverage } from "./components/GreenCoverage/index"





function Home() {
  // const [datas,setDatas] =useState()

  // useEffect(()=>{
  //   console.log('31');
  // },[])


  return (
    <div className={styles.home}>
      <NarBar></NarBar>
      <ul className={styles.mainContent}>
        <li className={styles.left}>
          <GeneralOverview></GeneralOverview>
          <TerrainClass></TerrainClass>
        </li>
        <li className={styles.centre}>
          <Map></Map>
          <ConstructionLand></ConstructionLand>
        </li>
        <li className={styles.right}>
          <Plough></Plough>
          <City></City>
          <GreenCoverage></GreenCoverage>
        </li>
      </ul>

    </div>
  );
}

export default Home;
