import { useEffect, useState } from "react";
import Box from "./Box";
import ColorPicker from "./ColorPicker"

const Main = () => {

    const [width, setWidth] = useState(1);
    const [height, setHeight] = useState(1);
    const [isEditing, setIsEditing] = useState(false)
    const [chooseColor, setChooseColor] = useState(false)
    const [color, setColor] = useState("")

    console.log(color)

    const numberCheck = (num, setter) => {
        if (num < 0) {
            setter(0);
        }
    }

    useEffect(() => {
        numberCheck(width, setWidth);
        numberCheck(height, setHeight);
    }, [width, height]);

    const createBoxes = () => {
        const boxes = [];
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                boxes.push(<Box isEditing={isEditing} color={color} key={`${i}-${j}`} />);
            }
        }
        return boxes;
    };

    return (
        <>
            <div className="bg-gray-500 flex h-[10%] w-full fixed justify-center gap-2">
                <div className="flex flex-row h-8 my-auto">
                    <input type="number" className="border-2 w-16 text-center" value={width} onChange={(e) => setWidth(e.target.value)} />
                    <p className="text-white text-2xl">x</p>
                    <input type="number" className="border-2 w-16 text-center" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <input type="checkbox" className="w-8 h-8 my-auto" value={isEditing} onChange={(e) => setIsEditing(e.target.checked)} />
                {chooseColor ? <div onClick={() => setChooseColor(false)} className={`${color} w-8 h-8 border-2 border-black my-auto`}></div> : <div onClick={() => setChooseColor(true)} className={`${color} w-8 h-8 border-2 border-black my-auto`}></div>}

                <ColorPicker chooseColor={chooseColor} setColor={setColor} setChooseColor={setChooseColor} />
            </div>

            <div className={`border-t-2 border-b-2 border-red-500 h-[90%] mt-auto ${isEditing ? "overflow-scroll" : "overflow-hidden"} w-full`}>
                <div style={{ gridTemplateColumns: `repeat(${width}, minmax(34px, 1fr))` }} className={`grid w-fit mx-auto`}>
                    {createBoxes()}
                </div>
            </div>
        </>
    )
}

export default Main; 