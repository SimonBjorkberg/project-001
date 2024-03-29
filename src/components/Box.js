import { useEffect, useState } from "react";

const Box = ({ isEditing, color }) => {

    const [edit, setEdit] = useState(false)
    const [currentColor, setCurrentColor] = useState(color)

    useEffect(() => {
        setCurrentColor(color)
        // eslint-disable-next-line
    }, [edit])


    return (<>
        {isEditing ?
            <div onClick={() => setEdit(!edit)} className={`w-8 h-8 m-[0.5px] ${edit ? currentColor : "bg-gray-500"}`}></div>
            :
            <div className={`w-8 h-8 m-[0.5px] ${edit ? currentColor : "bg-gray-500"}`}></div>
        }
    </>)
}

export default Box;