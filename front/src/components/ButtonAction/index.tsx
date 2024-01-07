'use client'

import Link from 'next/link';
import { IconType } from 'react-icons';
import type { UrlObject } from 'url';

interface IButtonLink {
  type: 'primary' | 'secondary';
  label: string;
  onClick: () => void;
  icon?: IconType
}

export default function ButtonAction(props: IButtonLink) {
  const styleButton =
    props.type === 'primary'
      ? 'border-primary text-primary hover:bg-gray-200'
      : 'border-secondary bg-secondary text-white hover:bg-primary-900';

  const Icon = props.icon;

  return (
    <button
      className={`flex justify-center items-center  px-8 py-2 w-48 border-2 rounded font-semibold ${styleButton}`} onClick={props.onClick}>
      {Icon && <Icon className="me-2 text-center" />}
      {props.label}
    </button>
  );
}