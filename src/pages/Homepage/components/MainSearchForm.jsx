import React from 'react';
import './MainSearchForm.style.css';
import { Box, FormControl, InputLabel, Input, Select, MenuItem, Button } from '@mui/material';

const MainSearchForm = () => {
  return (
    <Box component="form" noValidate="false" className='mainSearchForm'>
      <h3>캠핑장 검색</h3>
      <div className='formDiv'>
        <h4>키워드</h4>
        <Input id="keyword" placeholder="키워드를 입력하세요" />
      </div>
      <div className='formDiv'>
        <h4>지역별</h4>
        <Select>
          <MenuItem value="">전체/도</MenuItem>
        </Select>
        <Select>
          <MenuItem value="">전체/시/군</MenuItem>
        </Select>
      </div>
      <div className='formDiv'>
        <h4>테마별</h4>
        <Select>
          <MenuItem value="">전체테마</MenuItem>
        </Select>
      </div>
      <Button type="submit" variant="contained">검색</Button>
    </Box>
  )
}

export default MainSearchForm