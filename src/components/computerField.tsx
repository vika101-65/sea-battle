import { useEffect, useState } from "react"
import { createField } from "../differentFunction";
import { column, row } from "./playerField";

export interface CellComp {
  y: number;
  x: number;
  ship: boolean;
  key: string;
  occupyСell?: boolean;
};

export interface ShipComp {
  size: number;
  direction: string;
  name: string;
}

export const shipDatas: ShipComp[] = [
  { size: 4, direction: "row", name: 'four1' },
  { size: 3, direction: "row", name: 'three1' },
  { size: 3, direction: "row", name: 'three2' },
  { size: 2, direction: "row", name: 'two1' },
  { size: 2, direction: "row", name: 'two2' },
  { size: 2, direction: "row", name: 'two3' },
  { size: 1, direction: "row", name: 'one1' },
  { size: 1, direction: "row", name: 'one2' },
  { size: 1, direction: "row", name: 'one3' },
  { size: 1, direction: "row", name: 'one4' },
];

export function ComputerField() {
  const [computerField, setComputerField] = useState<CellComp[][] | []>([]);

  useEffect(() => {
    const computerField = createField();
    setComputerField(computerField);
  }, [])
  console.log('computerField', computerField);

  const startGame = () => {
    const newcomputerField = [...computerField];

    for (let i = 0; i < shipDatas.length; i++) {
      const y = Math.floor(Math.random() * shipDatas.length);
      let x = Math.floor(Math.random() * shipDatas.length); console.log('x', x, 'y', y);
      const lastCellShip = x + shipDatas[i].size;
      x = lastCellShip > 10 ? x - lastCellShip + 10 : x;
      const sizeShip = shipDatas[i].size;
      const trackedString = [...newcomputerField[y]];
      let sum = [];
      let countEmptyCell = 0;

      for (let cell = 0; cell <= trackedString.length - sizeShip; cell++) {
        for (let a = cell; a <cell + sizeShip; a++) {
          
          if (trackedString[a].ship === false || 
              trackedString[a].occupyСell === false) {
                countEmptyCell +=1;
          }; 
        };
        if (countEmptyCell === sizeShip) {
          sum.push(cell)
        };
        countEmptyCell = 0;
      };

     console.log('sum', sum)
      if (sum.includes(x)) {
        for (let a = x ; a < x + shipDatas[i].size; a++) {
          newcomputerField[y][a].ship = true;
        };
      } else {
        const rand = Math.floor(Math.random() * sum.length); console.log('rand',rand);
        x = sum[rand];
        for (let n = x ; n < x + shipDatas[i].size; n++) {
          newcomputerField[y][n].ship = true;
        };
      }
    };
    setComputerField(newcomputerField);
    console.log('computerField', computerField);
  }

  return (
    <div className="field">
      <h4>Computer Ships</h4>
      {computerField.map((itemRow, index) => {
        return (
          <div className='field-row' key={index}>
            <label className='row-label'>{row[index]}</label>
            {itemRow.map((itemCol, indexCol) =>
              <div className={`field-cell
                ${itemCol.ship ? 'ship-on-field' : ''}
              `}
                key={itemCol.key}
                data-x={itemCol.x}
                data-y={itemCol.y}
              >
                {index === 0 ? <label className='col-label'>{column[indexCol]}</label> : ''}
              </div>
            )}
          </div>
        )
      })}
      <button onClick={startGame}>Start</button>
    </div>
  )
}