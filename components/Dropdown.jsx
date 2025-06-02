'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Dropdown({
  trigger,
  items,
  activationType = 'hover',
  position = 'bottom-center',
  menuClassName = '',
}) {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    if (activationType === 'hover') setOpen(true);
  };

  const handleMouseLeave = () => {
    if (activationType === 'hover') setOpen(false);
  };

  const handleClick = () => {
    if (activationType === 'click') setOpen((prev) => !prev);
  };

  const positionClass =
    position === 'bottom-left'
      ? 'left-0 mt-2'
      : position === 'bottom-right'
      ? 'right-0 mt-2'
      : 'left-1/2 -translate-x-1/2 mt-2';

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div onClick={handleClick} className="cursor-pointer">
        {trigger}
      </div>
      <div
  className={`absolute ${positionClass} bg-white border border-gray-200 shadow-lg rounded-xl z-50 transition-all duration-200 ease-in-out ${
    open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
  } ${menuClassName} w-auto min-w-max`}
>
  <ul className="py-4 px-6 grid grid-cols-3 gap-x-8 gap-y-2">
    {items.map((item) => (
      <li key={item.label}>
        <Link
          href={item.href}
          className="block px-2 py-1 text-sm text-gray-800 hover:bg-gray-100 rounded whitespace-pre"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>
    </div>
  );
}
