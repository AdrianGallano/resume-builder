import React from 'react';

export const Document: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: '1em', fontFamily: 'serif', maxWidth: '800px', margin: 'auto' }}>
    {children}
  </div>
);

export const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section style={{ marginBottom: '1em' }}>
    <h2 style={{ borderBottom: '1px solid black' }}>{title}</h2>
    {children}
  </section>
);

export const SubHeading: React.FC<{ left: string; right: string; subleft: string; subright: string }> = ({ left, right, subleft, subright }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5em' }}>
    <div>
      <strong>{left}</strong>
      <div style={{ fontStyle: 'italic' }}>{subleft}</div>
    </div>
    <div style={{ textAlign: 'right' }}>
      <strong>{right}</strong>
      <div style={{ fontStyle: 'italic' }}>{subright}</div>
    </div>
  </div>
);

export const List: React.FC<{ items: string[], isGrid?: boolean }> = ({ items, isGrid = false }) => (
  <ul style={{
    paddingLeft: isGrid ? '0' : '1em',
    listStyleType: isGrid ? 'none' : 'disc',
    display: isGrid ? 'grid' : 'block',
    gridTemplateColumns: isGrid ? 'repeat(3, 1fr)' : 'none',
  }}>
    {items.map((item, index) => (
      <li key={index} style={{ marginBottom: '0.5em', display: 'flex', alignItems: 'flex-start' }}>
        <span style={{ marginRight: '0.5em' }}>{isGrid && '•'}</span>
        {item}
      </li>
    ))}
  </ul>
);
