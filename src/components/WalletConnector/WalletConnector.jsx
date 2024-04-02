import { useState } from 'react';
import Web3 from 'web3';
import Message from '../Message/Message';
import MetaMaskIcon from '../../assets/metamask.svg'

function WalletConnector() {
    const [connected, setConnected] = useState(false);
    const [error, setError] = useState(null);

    const connectToMetaMask = async () => {
        try {
            // Check if MetaMask is installed
            if (!window.ethereum) {
                throw new Error("MetaMask not found. Please install MetaMask to use this feature.");
            }

            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Initialize Web3
            const web3 = new Web3(window.ethereum);

            // Check if connected
            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                setConnected(true);
            } else {
                throw new Error("Failed to connect to MetaMask. Please check your MetaMask settings and try again.");
            }
        } catch (error) {
            setError(error.message);
            setTimeout(() => setError(null), 3000);
        }
    };

    return (
        <div className='text-center'>
            <button onClick={connectToMetaMask} className={`flex items-center gap-5 px-6 py-2 rounded ${!connected ? 'border-2 border-green-500 text-green-500  hover:bg-green-500 hover:text-white' : 'text-white bg-green-500'}`} disabled={connected}>{!connected ? "Connect Wallet" : "Wallet Connected"} <img src={MetaMaskIcon} width={50} alt="metamask" /> </button>

            {error && <Message message={error} color={"bg-red-500"} />}
           
        </div>
    );
}

export default WalletConnector;
