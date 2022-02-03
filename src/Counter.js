import React, { useReducer } from 'react';

// 현재상태, 업데이트에 필요한 정보를 담은 액션
function reducer(state, action) {
    //action.type에 따라 다른 작업 수행
    switch(action.type) {
        case 'INCREMENT' :
            return { value : state.value + 1 };
        case 'DECREMENT' :
            return { value : state.value - 1 };
        default:
            //아무것도 해당되지 않을 때 기존 상태 반환
            return state;
    }
}

const Counter = () => {
    //value = 상태 값, setValue = 상태를 설정할 수 있는 함수
    //useState = 상태의 기본 값
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return(
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>-1</button>
        </div>
    );
};

export default Counter;