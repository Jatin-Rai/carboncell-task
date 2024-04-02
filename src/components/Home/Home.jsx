import WalletConnector from "../WalletConnector/WalletConnector";

const Home = () => {
    return (
        <div className="flex flex-col gap-20">
            <h3 className="text-3xl mt-4 font-semibold">Carbon Cell Assessment</h3>
            <div className="flex items-center justify-center">
                <WalletConnector />
            </div>
        </div>
    )
}

export default Home;
