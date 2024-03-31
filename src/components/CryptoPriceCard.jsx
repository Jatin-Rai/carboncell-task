/* eslint-disable react/prop-types */

const CryptoPriceCard = ({ currency, rate, symbol }) => {
    const convertSymbol = symbol => {
        switch (symbol) {
            case '&#36;':
                return '$';
            case '&pound;':
                return '£';
            case '&euro;':
                return '€';
            default:
                return symbol; // Return original symbol if not matched
        }
    };

    return (
        <div className="rounded-lg p-6 shadow bg-gray-900 text-white hover:shadow-green-500">
            <h3 className="text-lg font-semibold mb-2">{currency}</h3>
            <p className="text-xl font-bold text-green-400"><span className='text-yellow-400'>{convertSymbol(symbol)}</span> {rate}</p>
        </div>
    );
};

export default CryptoPriceCard;
