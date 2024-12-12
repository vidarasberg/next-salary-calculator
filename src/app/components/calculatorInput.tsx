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
      <div>
        <input
          id={props.id}
          type="number"
          value={props.value}
          onChange={props.onChange}
          min="0"
        />
        <span>{props.description}</span>
      </div>
    </div>
  );
}
