import { column, row } from "./components/playerField";

export function createField () {
  const field = [];
  for (let i = 0; i < row.length; i++) {
    const rowOfField = [];

    for (let a = 0; a < column.length; a++) {
      rowOfField.push({
        y: i,
        x: a,
        ship : false,
        key: `${column[a]+i}`
      });
    };

    field.push(rowOfField);
  } 
  return field;
}