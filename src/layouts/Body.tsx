// src/layouts/Body.tsx
import React from 'react';
import Container from '@mui/material/Container';

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }}>
      {children}
    </Container>
  );
};

export default Body;
