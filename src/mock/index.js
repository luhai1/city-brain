import Mock from "mockjs"
import data10000006567 from '../assets/data/10000006567.json';
import data10000006568 from '../assets/data/10000006568.json';
import data10000006569 from '../assets/data/10000006569.json';
import data10000006570 from '../assets/data/10000006570.json';
import data10000006571 from '../assets/data/10000006571.json';
import data10000006572 from '../assets/data/10000006572.json';
import data10000095054 from '../assets/data/10000095054.json';
import data10000095055 from '../assets/data/10000095055.json';



export default Mock.mock('/10000006567','get',()=>{
  return data10000006567
})

// export default Mock.mock('/data10000006568','get',()=>{
//   return data10000006568
// })

