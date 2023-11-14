import React, { useState } from 'react';
import CurrencyInput from './CurrencyInput';
import CurrencySelect from './CurrencySelect';

const CurrencyConverter = () => {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount] = useState(0);

function convertCurrency(amount, fromCurrency, toCurrency) {
    const exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.75, JPY: 110.15 },
        EUR: { USD: 1.18, GBP: 0.88, JPY: 129.96 },
        GBP: { USD: 1.33, EUR: 1.14, JPY: 147.21 },
        JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068 }
    };

    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        throw new Error('Devise non prise en charge');
    }

    if (typeof amount !== 'number' || amount <= 0) {
        throw new Error('Montant invalide');
    }

    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * conversionRate;

    return convertedAmount;
}

const amountInUSD = 100;
const amountInEUR = convertCurrency(amountInUSD, 'USD', 'EUR');

console.log(`${amountInUSD} USD équivaut à ${amountInEUR} EUR`);


  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencyInput
        label="Amount"
        currency={fromCurrency}
        amount={amount}
        onAmountChange={(value) => setAmount(value)}
      />
      <CurrencySelect
        label="From Currency"
        selectedCurrency={fromCurrency}
        onCurrencyChange={(value) => setFromCurrency(value)}
      />
      <CurrencySelect
        label="To Currency"
        selectedCurrency={toCurrency}
        onCurrencyChange={(value) => setToCurrency(value)}
      />
      <div>
        <p>Converted Amount: {convertedAmount}</p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
