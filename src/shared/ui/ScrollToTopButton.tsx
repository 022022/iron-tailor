'use client';

import React from 'react';
import UpIcon from '@/shared/lib/icons/UpIcon';

export const ScrollToTopButton: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="Наверх"
      onClick={handleClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <UpIcon width={32} height={32} />
    </button>
  );
};