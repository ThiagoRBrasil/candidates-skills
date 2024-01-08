import { InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  label?: string
}

export default function Input({ value, label, ...rest }: IInput) {
  return (
    <div className="flex flex-row gap-2 items-center w-full">
      {label && (
        <label>{label}</label>
      )}
      <input value={value} className='flex justify-center items-center py-1 px-2 w-full border-2 rounded' {...rest} />
    </div>
  );
}