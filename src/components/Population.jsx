import React from 'react';
import useFetch from "../hooks/useFetch";
import { Line } from 'react-chartjs-2';
import Spinner from "./Spinner";

const Population = () => {
    const { data, loading, error } = useFetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");

    if (loading) return <Spinner />;
    if (error) return <p>Error: {error.message}</p>;

    const chartData = {
        labels: data.map(item => item.Year),
        datasets: [
            {
                label: 'Population',
                data: data.map(item => parseInt(item.Population)),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
            },
        ],
    };

    return (
        <div className="mt-6">
            <h2>Population Data</h2>
            <div style={{ height: '400px', width: '600px' }}>
                <Line
                    data={data}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Population"
                            },
                            legend: {
                                display: false
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Population;
