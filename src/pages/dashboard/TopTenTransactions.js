import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ToptenTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get(
                    'http://3.218.8.102/api/transactions?page=0&size=20&sort=id,asc&cacheBuster=1732507712003'
                );
                setTransactions(response.data.slice(0, 10));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching transactions:', error);
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="bg-gray-100 p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Top 10 Transactions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {transactions.map((txn) => (
                    <div
                        key={txn.id}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-700">{txn.name}</h3>
                        <p className="text-gray-500 mt-2">Date: {txn.transdate}</p>
                        <p className="text-gray-500 mt-2">Type: {txn.type}</p>
                        <p className="text-teal-700 font-semibold mt-4">
                            Amount: ${txn.amount.toFixed(2)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToptenTransactions;
