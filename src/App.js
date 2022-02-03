import React from 'react';
import Average from './Average';

const App = () => {
  return <Average/>;
};

export default App;


// Info.js useEffect 구현하기
// const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr/>
//       {visible && <Info/>}
//     </div>
//   )