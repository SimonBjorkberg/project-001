const ColorBox = ({ color, setColor, setChooseColor }) => {

    return (<div onClick={() => {setColor(color); setChooseColor(false)}} className={`${color} w-8 h-8`}>

    </div>)
}

export default ColorBox;