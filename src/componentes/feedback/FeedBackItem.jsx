import { useState } from "react"

const FeedBackItem = () => {
    
    //estados iniciales del componente
    const [ ratign , setRating] = useState(1)
    const [ text , setTexto] = useState("Buen instructor, mejorar recursos")

    const cambiarNota = () => {
        setRating((prev)=>{
            return prev + 1;
        })
    }

    return (
        <div className="card">
            <div className="num-ratig">
                {ratign}
            </div>

            <div className="text-ratig">
                {text}
            </div>
            <button onClick={ cambiarNota }>Cambiar nota</button>
        </div>
    )
}

export default FeedBackItem