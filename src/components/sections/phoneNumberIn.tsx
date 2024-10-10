import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumberInput: React.FC = () => {
  const [phone, setPhone] = useState<string>('');

  return (
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Phone</label>
      <PhoneInput
        country={'us'}
        value={phone}
        onChange={(phoneNumber: string) => setPhone(phoneNumber)}
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true,
        }}
        inputClass="block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg"
      />
      <p className="mt-2 text-sm text-gray-600">Selected phone number: {phone}</p>
    </div>
  );
};

export default PhoneNumberInput;
