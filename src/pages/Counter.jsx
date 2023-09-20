import React, {useState} from 'react';
import FunctionalCounter from "../components/Counter";
import Animation from "../components/Animation/Animation";
import ClassComponent from "../components/ClassComponent";


const Counter = () => {
    const [isVisible, setIsVisible] = useState(true)
    const onClickButton = (e) => {
        e.stopPropagation();
        console.log(e);
        setIsVisible((prev) => !prev);
    };

    return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FunctionalCounter style={{ border: "1px solid black", margin: 10 }} />
                <div
                    style={{ width: 150, height: 150 }}
                    className="animation__wrapper"
                    onClick={}
                >
                    { isVisible ? (
                        <Animation style={{ width: 160 }} />
                    ) : (
                        <button
                            style={{ margin: 10, padding: 5, width: 130, height: 130 }}
                            onClick={onClickButton}
                        >
                            Show Animation
                        </button>
                    )}
                </div>
                <ClassComponent style={{ border: "1px solid black", margin: 10 }} />
            </div>
    );
};

export default Counter;
