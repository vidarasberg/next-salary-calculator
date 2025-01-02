import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        Detta verktyg kan användas för att beräkna hur man vill göra med lön som
        anställd hos Independtech
      </p>
      <div className="flex h-screen items-center justify-evenly">
        <Link
          href={"internal-calculator"}
          className="rounded border-4 border-solid border-gray-600 p-4"
        >
          Internal
        </Link>
        <Link
          href={"external-calculator"}
          className="rounded border-4 border-solid border-gray-600 p-4"
        >
          External
        </Link>
      </div>
    </div>
  );
}
