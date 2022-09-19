import Stack from '@mui/material/Stack';
import React from 'react';
import './Table.css'

// https://github.com/ConstCodeSchool/seabattle/tree/master/front

function Table () {
  const getCoordinats = (e: React.MouseEvent<HTMLElement>) => {
    // console.log(e);
  }

  const labelCol: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const labelRow: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="row-container" onClick={getCoordinats}>
      {labelRow.map((itemRow, indexRow) => {
        return (
          <Stack direction="row" key={itemRow}>
            <label className='row-label'>{itemRow}</label>
            {labelCol.map((itemCol) => {
              return (
                indexRow === 0 ? 
                  <div data-cell={itemCol+itemRow} key={itemCol+itemRow}>
                    <label className='col-label'>{itemCol}</label>
                  </div>
                  : <div data-cell={itemCol+itemRow} key={itemCol+itemRow}></div>
              )
            })}
          </Stack>  
        )
      })}
    </div>
  ) 
}

export default Table;
