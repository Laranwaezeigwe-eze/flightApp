import {useDispatch, useSelector} from "react-redux";
import {decreaseCounter, increaseCounter, restartCounter, setCount, switchCounterSigns} from "./store/counter/slice";
import {useEffect} from "react";

function Todo ({initialCount}){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCount(initialCount));
    }, [dispatch, initialCount]);
    const increment=()=>{
       dispatch(increaseCounter())
    };
    const decrement=()=> {
        dispatch(decreaseCounter())
    };
    const switchSigns=()=>{
        dispatch(switchCounterSigns())
    };
    const restart=()=> {
        dispatch(restartCounter())
    };

    return(
        <div>
        <h1 className={'mt-4'}>Count: <span data-testid={'count'}>{count}</span></h1>
            <div className={'mt-5 flex justify-center gap-4'}>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={restart}>Restart</button>
                <button onClick={switchSigns}>Switch Signs</button>
            </div>
        </div>
    )
}

export default Todo;