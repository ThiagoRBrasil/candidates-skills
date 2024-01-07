import { InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
}

export default function Input({ value, ...rest }: IInput) {
  return (
    <input value={value} className='flex justify-center items-center py-1 px-2 w-48 border-2 rounded' {...rest} />
  );
}