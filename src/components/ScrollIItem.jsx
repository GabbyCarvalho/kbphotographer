import { useScrollAnimation } from "./useScrollAnimation"


export default function ScrollItem({ children, className = ""}) {
    const { ref, isVisible } = useScrollAnimation()

    return(
        <div
        ref={ref}
        className={`scroll-animate ${isVisible ? "show" : ""} ${className}`}
        >
        {children}

        </div>
    )



}