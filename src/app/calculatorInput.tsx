import { useState } from "react"

export default function CalculatorInput(props: { label: string, defaultValue: number }) {

    const [value, setValue] = useState(props.defaultValue)

    return <>
        <label htmlFor="input">{props.label}</label >
        <div>
            <input id="input" type="number" value={value} onChange={e => setValue(Number(e.target.value))} min="0" className="pill" />
            <span className="ps-1">h/månad</span>
        </div>
    </>
}