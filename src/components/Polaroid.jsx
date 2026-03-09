export default function Polaroid ({ img, rotate }) {
    return(
        <div
        className="polaroid"
        style={{transform: `rotate(${rotate})`}}
        >
            <img src={img}alt="" />
         </div>
    )
}