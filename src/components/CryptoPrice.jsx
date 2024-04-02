import useFetch from '../hooks/useFetch';
import CryptoPriceCard from './CryptoPriceCard';
import Spinner from './Spinner';

const CryptoPrice = () => {
    const { data, loading, error } = useFetch("https://api.coindesk.com/v1/bpi/currentprice.json");

    if (loading) return <Spinner />;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="mt-5 mx-auto max-w-screen-lg">
            <h2 className="text-3xl mb-8 font-semibold">{data.chartName} Prices Today</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(data.bpi).map(([currency, currencyData]) => (
                    <CryptoPriceCard
                        key={currency}
                        currency={currency}
                        rate={currencyData.rate}
                        symbol={currencyData.symbol}
                    />
                ))}
            </div>

        </div>
    );
};

export default CryptoPrice;
