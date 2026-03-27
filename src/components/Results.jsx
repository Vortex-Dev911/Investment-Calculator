import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
    const resultsData = calculateInvestmentResults(input);

    console.log(resultsData);
    return (
    <table id='result' className="glass-card" >
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map(yearData => {
                return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(yearData.interest * yearData.year)}</td>
                        <td>{formatter.format(yearData.annualInvestment * yearData.year + input.initialInvestment)}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>);
}

export default Results;