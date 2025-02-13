import React from 'react';
import { Link } from '@remix-run/react';

export const MenuLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link to={to} style={{
    marginBottom: '10px',
    color: 'var(--accent-9)',
    textDecoration: 'none',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--gray-3)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
    {children}
  </Link>
);

