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
      const yOccupUp = y -1 >= 0 ?  y - 1 : 0;
      const yOccupDown = y + 1 <= 9 ? y + 1 : 9;
      x = lastCellShip >= 9 ? x - lastCellShip + 9 : x;
      const sizeShip = shipDatas[i].size;

      const unOccupiedCell = [...newcomputerField[y]].map((item, index) => {

        if (index <= 9 - sizeShip ) {
          let sum = 0;

          for (let i = index; i < index + sizeShip; i++) {
            if (item.ship === false || item.occupyСell === false) {
              sum += 1 ;
            } 
          };

          if (sum === shipDatas[i].size) { 
            return index;
          }
          return null;
        }
        
      })
      console.log('unOccupiedCell', unOccupiedCell)
      

      // for (let a = x ; a <= x + shipDatas[i].size; a++) {
      //   sum += unOccupiedCell[x];
      // } 
        
      // console.log('unOccupiedCell', unOccupiedCell, 'sum', sum);

      for (let a = x ; a < x + shipDatas[i].size; a++) {
        // newcomputerField[y][a]    
        newcomputerField[y][a].ship = true;
        newcomputerField[y][a].occupyСell = true;
        newcomputerField[yOccupUp][a].occupyСell = true;
        newcomputerField[yOccupDown][a].occupyСell = true;
      };
      
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