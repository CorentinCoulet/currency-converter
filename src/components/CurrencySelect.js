import React from 'react';

const CurrencySelect = ({ label, selectedCurrency, onCurrencyChange }) => {
  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD'];

  return (
    <div>
      <label>{label}</label>
      <select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
