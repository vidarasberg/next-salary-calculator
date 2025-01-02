export default function RoundedValue(props: { label: string; value: number }) {
  return (
    <div>
      {props.label}: {props.value.toFixed(0)} kr
    </div>
  );
}
