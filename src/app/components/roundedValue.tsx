export default function RoundedValue({
  label,
  value,
  fractionDigits = 0,
  suffix = "kr",
}: {
  label: string;
  value: number;
  fractionDigits?: number;
  suffix?: string;
}) {
  return (
    <div>
      {label}: {value.toFixed(fractionDigits)} {suffix}
    </div>
  );
}
