import useFetch from "../hooks/useFetch";
import { defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Spinner from "./Spinner";

defaults.color = 'white';

const chartOptions = {
    scales: {
        x: {
            ticks: {
                color: 'white', // X-axis tick color
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.1)', // X-axis grid color
            },
        },
        y: {
            ticks: {
                color: 'white', // Y-axis tick color
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.1)', // Y-axis grid color
            },
        },
    },
    plugins: {
        legend: {
            labels: {
                color: 'white', // Legend label color
            },
        },
    },
};

const Population = () => {
    const { data, loading, error } = useFetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");

    if (loading) return <Spinner />;
    if (error) return <p>Error: {error.message}</p>;

    const sortedData = data.data.sort((a, b) => a.Year - b.Year);
    const nation = data.data[0].Nation;

    const { annotations } = data.source[0]

    return (
        <div className="mx-3 mt-6">
            <h2 className='text-3xl font-semibold mb-10'>{nation} Population Data</h2>
            <div className='w-5/6 h-auto'>
                <Line
                    data={{
                        labels: sortedData.map(item => item.Year),
                        datasets: [
                            {
                                label: "Population(in Millions)",
                                data: sortedData.map(item => item.Population / 1000000),
                                borderColor: 'lightgreen',
                                backgroundColor: 'white',
                                tension: 0.1
                            }
                        ]
                    }}
                    options={chartOptions}
                />
                <div className='mt-6 text-center text-sm'>
                    <p>{annotations.source_name} - {annotations.dataset_name}</p>
                    <p className='text-xs italic mt-4'>
                        {annotations.source_description} Refer
                        <a href={annotations.dataset_link} target="_blank" rel="noopener noreferrer"> {annotations.dataset_link} </a>
                        for more details
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Population;
