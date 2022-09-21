import React from 'react';

export interface MatrixShip {
  x: number;
  y: number;
  ship: boolean
}
export function Battle () {
  const matrix: Array<MatrixShip[]>= [];
  for (let x = 0; x < 10; x++) {
    let row :MatrixShip[] = [];
    for (let y = 0; y < 10; y++) {
      row.push({x, y, ship: false})
    }
    matrix.push(row);
  }
  // console.log('matrix', matrix)
  return(
    < >
    </>
  )
}