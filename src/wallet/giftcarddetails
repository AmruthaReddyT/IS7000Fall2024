import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GiftCardDetails({ giftCardId, onBack }) {
  const [giftCard, setGiftCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGiftCardDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get(http://3.218.8.102/api/giftcards/${giftCardId}, {
          headers: {
            'Authorization': Bearer ${token},
            'Content-Type': 'application/json'
          }
        });

        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }

        const data = response.data;
        setGiftCard(data);
      } catch (error) {
        console.error('Error fetching gift card details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGiftCardDetails();
  }, [giftCardId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg mt-4">
      <h2 className="text-2xl font-bold mb-4">Gift Card Details</h2>
      <p>Name: {giftCard.name}</p>
      <p>Amount: ${giftCard.giftcardamount}</p>
      <p>Added Date: {giftCard.addDate}</p>
      <button
        onClick={() => window.location.href = http://3.218.8.102/giftcard/${giftCard.id}/edit}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Edit Gift Card
      </button>
      <button
        onClick={onBack}
        className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-4"
      >
        Back
      </button>
    </div>
  );
}

export default GiftCardDetails;