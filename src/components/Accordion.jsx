import { useState } from "react";


export default function Accordion ({ title, children }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="accordion">
            {/* TÍTULO */}
            <button 
            className="accordion-header"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            >
            
            <span>{title}</span>
            <span>{open ? "-" : "+"}</span>
            </button>

            {/* CONTEÚDO */}
            <div className={`accordion-content ${open ? "open" : ""}`}>
                {children}
            </div>


        </div>
    )
}