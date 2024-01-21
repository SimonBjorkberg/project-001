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
            <div className="bg-gray-500 flex justify-center gap-5">
                Width
                <input type="number" className="border-2 w-10" value={width} onChange={(e) => setWidth(e.target.value)} />
                Height
                <input type="number" className="border-2 w-10" value={height} onChange={(e) => setHeight(e.target.value)} />
                <input type="checkbox" value={isEditing} onChange={(e) => setIsEditing(e.target.checked)} />

                {chooseColor ? <div onClick={() => setChooseColor(false)} className={`${color} w-8 h-8 border-2 border-black`}></div> : <div onClick={() => setChooseColor(true)} className={`${color} w-8 h-8 border-2 border-black`}></div>}

                <ColorPicker chooseColor={chooseColor} setColor={setColor} setChooseColor={setChooseColor} />
            </div>

            <div className={`border-t-2 border-b-2 border-red-500 h-[80vh] ${isEditing ? "overflow-scroll" : "overflow-hidden"} w-full`}>
                <div style={{ gridTemplateColumns: `repeat(${width}, minmax(34px, 1fr))` }} className={`grid w-fit mx-auto`}>
                    {createBoxes()}
                </div>
            </div>
        </>
    )
}

export default Main; 