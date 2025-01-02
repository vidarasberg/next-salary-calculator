import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        Detta verktyg kan användas för att beräkna hur man vill göra med lön som anställd hos Independtech
      </p>
      <div className="flex h-screen items-center justify-evenly">
        <Link href={"internal-calculator"} className="p-4 border-solid border-4 border-gray-600 rounded">Internal</Link>
        <Link href={"external-calculator"} className="p-4 border-solid border-4 border-gray-600 rounded">External</Link>
      </div>
    </div>
  );
}
