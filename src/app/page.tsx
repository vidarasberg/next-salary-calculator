"use client"

import { useState } from "react";

export default function Home() {
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

  return (
    <div className="flex items-center justify-center">

      <div className="flex flex-col p-4 gap-2">
        <h1>Lönekalkylator</h1>
        <div className="flex flex-col card" id="inputContainer">
          <h2>Intäkter / Debitering</h2>
          <div className="flex flex-wrap">
            <label htmlFor="timmar">Debiterade timmar</label>
            <div>
              <input id="timmar" type="number" value={hours} onChange={e => setHours(Number(e.target.value))} min="0" className="pill" />
              <span className="ps-1">h/månad</span>
            </div>
          </div>
          <div className="flex flex-wrap">
            <label htmlFor="timarvode">Timarvode</label>
            <div>
              <input id="timarvode" type="number" value={hourlyRate} onChange={e => setHourlyRate(Number(e.target.value))} min="0" className="pill" />
              <span className="ps-1">kr</span>
            </div>
          </div>
          <div className="flex flex-wrap">
            <label htmlFor="monthlyIncome">Månadsintäkt</label>
            <span id="monthlyIncome">{monthlyIncome}</span>
          </div>
          <h2>Löneuttag / Andra utgifter</h2>
          <div className="flex flex-wrap">
            <label htmlFor="bruttolön">Bruttolön</label>
            <div>
              <input id="bruttolön" type="number" value={grossSalary} onChange={e => setGrossSalary(Number(e.target.value))} min="0" className="pill" />
              <span>kr/månad</span>
            </div>
          </div>
          <div className="flex flex-wrap">
            <label htmlFor="employerFee">Arbetsgivaravgift</label>
            <span id="employerFee">{employerFee}</span>
          </div>
          <div className="flex flex-wrap">
            <label htmlFor="pension">Pension</label>
            <div>
              <input id="pension" type="number" value={pension} onChange={e => setPension(Number(e.target.value))} min="0" className="pill" />
              <span>kr/månad</span>
            </div>
          </div>
          <div className="flex flex-wrap">
            <label htmlFor="pensionTax">Skatt för pension</label>
            <span id="pensionTax">{pensionTax}</span>
          </div>
          <div className="flex flex-wrap">
            <label htmlFor="totalMonthlyCost">Total kostnad (löneuttag + pension)</label>
            <span id="totalMonthlyCost">{totalMonthlyCost}</span>
          </div>
          <div className="flex flex-wrap">
            <label htmlFor="remaining">Kvar i potten varje månad</label>
            <span id="remaining">{remaining}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
