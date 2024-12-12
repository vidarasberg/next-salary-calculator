"use client";

import { ChangeEvent, useState } from "react";
import CalculatorInput from "../components/calculatorInput";

export default function ExternalCalculator() {
  const [hours, setHours] = useState(160);
  const [hourlyRate, setHourlyRate] = useState(1000);
  const [grossSalary, setGrossSalary] = useState(55000);
  const [pension, setPension] = useState(3000);

  const pensionTax = pension * 0.2426;

  const debitering = hours * hourlyRate;
  const monthlyIncome = debitering * 0.7;

  const employerFee = grossSalary * 0.3142;

  const totalMonthlyCost = grossSalary + pension + pensionTax + employerFee;

  const remaining = monthlyIncome - totalMonthlyCost;

  function handleHoursChanged(event: ChangeEvent<HTMLInputElement>): void {
    setHours(Number(event.target.value));
  }

  function handleHourlyRateChanged(event: ChangeEvent<HTMLInputElement>): void {
    setHourlyRate(Number(event.target.value));
  }

  function handleGrossSalaryChanged(
    event: ChangeEvent<HTMLInputElement>
  ): void {
    setGrossSalary(Number(event.target.value));
  }

  function handlePensionChanged(event: ChangeEvent<HTMLInputElement>): void {
    setPension(Number(event.target.value));
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col p-4 gap-2">
        <h1 className="text-2xl">Lönekalkylator</h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl">Intäkter / Debitering</h2>
          <CalculatorInput
            id="hours"
            label="Debiterade timmar"
            value={hours}
            description="h/månad"
            onChange={handleHoursChanged}
          />
          <CalculatorInput
            id="hourlyRate"
            label="Timarvode"
            value={hourlyRate}
            description="kr/timme"
            onChange={handleHourlyRateChanged}
          />
          <div>Månadsintäkt: {monthlyIncome}</div>
          <h2 className="text-xl">Löneuttag / Andra utgifter</h2>
          <CalculatorInput
            id="grossSalary"
            label="Bruttolön"
            value={grossSalary}
            description="kr/månad"
            onChange={handleGrossSalaryChanged}
          />
          <div>Arbetsgivaravgift: {employerFee}</div>
          <CalculatorInput
            id="pension"
            label="Pension"
            value={pension}
            description="kr/månad"
            onChange={handlePensionChanged}
          />
          <div>Skatt för pension: {pensionTax}</div>
          <div>Total kostnad (löneuttag + pension): {totalMonthlyCost}</div>
          <div>Kvar i potten varje månad: {remaining}</div>
        </div>
      </div>
    </div>
  );
}
