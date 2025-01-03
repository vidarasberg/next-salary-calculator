"use client";

import { ChangeEvent, useState, useMemo } from "react";
import CalculatorInput from "../components/calculatorInput";
import RoundedValue from "../components/roundedValue";
import { Percentages } from "../constants";

export default function InternalCalculator() {
  const [state, setState] = useState({
    hours: 160,
    hourlyRate: 1000,
    grossSalary: 55000,
    pension: 3000,
    salaryFirstThreeMonthsAfterFreelance: 55000,
  });

  const { hours, hourlyRate, grossSalary, pension, salaryFirstThreeMonthsAfterFreelance } = state;

  const pensionTax = pension * Percentages.PensionTax;

  const monthlyIncome = useMemo(() => hours * hourlyRate * Percentages.YourCutOfThePot, [hours, hourlyRate]);
  const employerFee = grossSalary * Percentages.EmployerFee;
  const totalMonthlyCost = grossSalary + pension + pensionTax + employerFee;
  const remaining = monthlyIncome - totalMonthlyCost;

  const costThreeMonths = useMemo(() => 
    salaryFirstThreeMonthsAfterFreelance * 3 + 
    salaryFirstThreeMonthsAfterFreelance * Percentages.EmployerFee * 3, 
    [salaryFirstThreeMonthsAfterFreelance]
  );

  const numberOfMonthsToHaveEnoughForFirstThreeMonthsAfterFreelance = costThreeMonths / remaining;

  function handleChange(event: ChangeEvent<HTMLInputElement>, field: keyof typeof state): void {
    console.log([field]);
    setState({ ...state, [field]: Number(event.target.value) });
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-2xl">Lönekalkylator</h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl">Intäkter / Debitering</h2>
          <CalculatorInput
            id="hours"
            label="Debiterade timmar"
            value={hours}
            description="h/månad"
            onChange={(e) => handleChange(e, 'hours')}
          />
          <CalculatorInput
            id="hourlyRate"
            label="Timarvode"
            value={hourlyRate}
            description="kr/timme"
            onChange={(e) => handleChange(e, 'hourlyRate')}
          />
          <RoundedValue label="Månadsintäkt" value={monthlyIncome} />
          <h2 className="text-xl">Löneuttag / Andra utgifter</h2>
          <CalculatorInput
            id="grossSalary"
            label="Bruttolön"
            value={grossSalary}
            description="kr/månad"
            onChange={(e) => handleChange(e, 'grossSalary')}
          />
          <RoundedValue label="Arbetsgivaravgift" value={employerFee} />
          <CalculatorInput
            id="pension"
            label="Pension"
            value={pension}
            description="kr/månad"
            onChange={(e) => handleChange(e, 'pension')}
          />
          <RoundedValue label="Skatt för pension" value={pensionTax} />
          <RoundedValue
            label="Total kostnad (löneuttag + pension)"
            value={totalMonthlyCost}
          />
          <RoundedValue label="Kvar i potten varje månad" value={remaining} />

          <h2 className="text-xl">Tiden som egen</h2>
          <CalculatorInput
            id="salaryFirstThreeMonthsAfterFreelance"
            label="Hur mycket lön vill jag plocka i månaden från Independtech de 3 första månaderna som egen"
            value={salaryFirstThreeMonthsAfterFreelance}
            description="kr/månad"
            onChange={(e) => handleChange(e, 'salaryFirstThreeMonthsAfterFreelance')}
          />

          <RoundedValue
            label="Total cost for three months (salary and employer fee)"
            value={costThreeMonths}
          />
          <RoundedValue
            label="Tid att jobba för att få månadslönen"
            value={numberOfMonthsToHaveEnoughForFirstThreeMonthsAfterFreelance}
            fractionDigits={1}
            suffix="månader"
          />
        </div>
      </div>
    </div>
  );
}
