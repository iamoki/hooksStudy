import React, { useReducer } from 'react';
import useInputs from './useInputs';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    // const [state, dispatch] = useReducer(reducer, {
    //     name: '',
    //     nickname: ''
    // });
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;
    // const onChange = e => {
    //     dispatch(e.target);
    // }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;

// 여러개의 useState
// import React, { useState, useEffect } from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');
//     useEffect(() => {
//         console.log('effect');
//         console.log(name);
//         // 컴포넌트가 업데이트되기 직전에 작업을 수행하고 싶을때 뒷정리함수실행(cleanup)
//         return () => {
//             console.log('cleanup');
//             console.log(name);
//         };
//     //1.화면이 렌더링 될때만 이벤트를 실행 하고 싶을 때에는 두번째 파라미터에 빈 배열넣기
//     //2.특정값이 업데이트 될 때만 실행하고 싶을 때 배열에 해당값넣기
//     }, []);

//     // 이름변경하기
//     const onChangeName = e => {
//         //이름의 값을 인풋의 val로 변경함을 의미
//         setName(e.target.value);
//     }

//     //닉네임 변경하기
//     const onChangeNickname = e => {
//         //닉네임의 값을 인풋의 val로 변경함을 의미
//         setNickname(e.target.value);
//     }

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName}/>
//                 <input value={nickname} onChange={onChangeNickname}/>
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b> {nickname}
//                 </div>
//             </div>
//         </div>
//     );
// };