import { ChangeEventHandler } from "react";

export default function CalculatorInput(props: {
  id: string;
  label: string;
  value: number;
  description: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="rounded border-2 border-gray-300">
        <input
          className="w-60 p-2"
          id={props.id}
          type="number"
          value={props.value}
          onChange={props.onChange}
          min="0"
        />
        <div className="inline-flex select-none p-2">
          <div>{props.description}</div>
        </div>
      </div>
    </div>
  );
}
