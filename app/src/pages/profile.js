import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { toggleShowProfile, profileSelector } from "../store/profile";


export function ProfilePage(props) {
    const [count, setCount] = useState(0);

    const { firstName, lastName, age, isVisibleProfile } =
        useSelector(profileSelector);
    // const countFromRedux = useSelector(memoSelector);

    const dispatch = useDispatch();


    return (
        <div>



            <button onClick={() => dispatch(toggleShowProfile())}>
                toggle profile
            </button>


            {isVisibleProfile && (
                <>
                    <h1>firstName: {firstName}</h1>
                    <h1>lastName: {lastName}</h1>
                    <h1>lastName: {age}</h1>

                </>
            )}





        </div>
    );
}