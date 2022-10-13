import React from "react";
import { column, row } from "./components/playerField";

export function createField() {
  const field = [];
  for (let i = 0; i < row.length; i++) {
    const rowOfField = [];

    for (let a = 0; a < column.length; a++) {
      rowOfField.push({
        y: i,
        x: a,
        ship: false,
        key: `${column[a] + i}`
      });
    };

    field.push(rowOfField);
  }
  return field;
};

export function getCoordinate (event: React.MouseEvent<HTMLElement>) {
  const x = Number(event.currentTarget.getAttribute('data-x'));
  const y = Number(event.currentTarget.getAttribute('data-y'));
  return {x, y};
};

export function shoot(event: React.MouseEvent, field: any) {
  const { x, y } = (event.target as HTMLElement).dataset; console.log('cx', x, 'cy', y); console.log('computerField', field);
  const newComputerField = [...field];

  if (x && y) {
    const rowY = +y;
    const colX = +x;

    if (newComputerField[rowY][colX].ship) {
      newComputerField[rowY][colX].hurt = true;
    } else {
      newComputerField[rowY][colX].miss = true;
    }
  };
  return newComputerField;
};


