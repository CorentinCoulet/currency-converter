import React from 'react';

const CurrencyInput = ({ label, currency, amount, onAmountChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <span>{currency}</span>
    </div>
  );
};

export default CurrencyInput;
