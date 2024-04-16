import React from 'react';
import '../colors.css';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import Header from './components/Header';

const maxWidth = "xl";

const AppLayout = () => {
  return (
    <Box
      component="section"
      sx={{ 
        minWidth: '320px',
        minHeight:"100vh",
        fontFamily:"'Spoqa Han Sans Neo', sans-serif"
      }}
    >
      <Header />
      <Container 
        maxWidth={maxWidth}
        sx={{
          // 작업 후 삭제 예정
          border: {
            xs: "1px solid green",
            md: "1px solid blue",
            lg: "1px solid red"
          }
        }}
      >
        <Outlet />
      </Container>
      <footer>
        <Container maxWidth="xl">
        footer
        </Container>
      </footer>
    </Box>
  )
}


export default AppLayout