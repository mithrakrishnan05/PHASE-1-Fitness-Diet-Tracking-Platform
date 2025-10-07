import React from 'react';

export default function Header({ title }) {
  return (
    <header className="app-header card">
      <h1>{title}</h1>
      <div>
        <small>Demo • MySQL & Node (separate demo setups)</small>
      </div>
    </header>
  );
}
