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
      <div className="border-2 border-gray-300 rounded">
        <input
          className="p-2 w-60"
          id={props.id}
          type="number"
          value={props.value}
          onChange={props.onChange}
          min="0"
        />
        <div className="select-none inline-flex p-2">
          <div>{props.description}</div>
        </div>
      </div>


    </div>
  );
}
