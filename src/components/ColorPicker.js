import ColorBox from "./ColorBox"

const ColorPicker = ({ chooseColor, setColor, setChooseColor }) => {

    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"]


 return (
    <div className={`${chooseColor ? "block" : "hidden"} absolute w-fit h-fit border-2 border-black right-2 top-2 grid grid-cols-2 bg-white`}>
        {colors.map((color) => {
             return <ColorBox color={color} setColor={setColor} setChooseColor={setChooseColor} />
        })}
    </div>
 )
}

export default ColorPicker;