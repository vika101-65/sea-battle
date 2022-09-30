import { useEffect, useState } from "react";
import { createField } from "../differentFunction";

export interface Cell {
  y: number;
  x: number;
  ship: boolean;
  key: string;
  preliminaryPosition?: boolean;
  errorCordinate?: boolean

};

export const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'];

export function PlayerField({
  shipOnField,
  classShip,
  setShipOnField,
  shipOnDock,
  setShipOnDock}:any) {
 
  const [field, setField] = useState<Cell[][] | []>([]);
  const [preliminaryCordShip, setpreliminaryCordShip] = useState({x:0, y:0})

  useEffect(() => {
    const field = createField();
    setField(field); 
  }, []);

  const fixShipOnField = (event: React.MouseEvent<HTMLElement>) => {
    // console.log('+++++++');
    // console.log('ship',shipOnField );
    const x = Number(event.currentTarget.getAttribute('data-x'));
    const y = Number(event.currentTarget.getAttribute('data-y'));
    const newField = [...field];

    newField.map(row => row.map((item) => item.preliminaryPosition = false));

    if (shipOnField.length) {
      const {direction, size} = shipOnField[0];
      const conditionLength = x + size;

      if (direction === "row") {
        for (let i = x; i < conditionLength; i++) { 
          newField[y][i].ship = true;
        }
      };
      setField(newField);
    }
    setShipOnField([]);

    const newShipsOnDock = [...shipOnDock].filter(item => item.name !== shipOnField[0].name);
        
    setShipOnDock(newShipsOnDock);
  };

  const preliminaryPositionShip = (event: React.MouseEvent<HTMLElement>) => {
    // console.log('event',event.currentTarget.getBoundingClientRect());
    const {x : newX, y: newY} = event.currentTarget.getBoundingClientRect();
    setpreliminaryCordShip({x: newX, y: newY}); 
    const x = Number(event.currentTarget.getAttribute('data-x'));
    const y = Number(event.currentTarget.getAttribute('data-y'));
    const preX = preliminaryCordShip.x;
    const preY = preliminaryCordShip.y;
    const newField = [...field];

    if (shipOnField.length) {

      if (newX !== preX || newY !== preY) {
        setpreliminaryCordShip({x: newX, y: newY}); 
        newField.map(row => 
          row.map((item) => {
            item.preliminaryPosition = false;
            item.errorCordinate = false;
            return item;
          })
        );
          setField(newField);  
      };

      const {direction, size} = shipOnField[0];
      
      if (direction === "row") {
        const conditionLength = x + size;

        if (conditionLength <= row.length) {
          for (let i = x; i < conditionLength; i++) { 
            newField[y][i].preliminaryPosition = true;
          }
        };

        if (conditionLength > row.length) {
          for (let i = x; i < conditionLength; i++) { 

            if (newField[y][i]) {
              newField[y][i].errorCordinate = true;  console.log('field', field)
            }
          }
        };        
      };

      setField(newField);
    };

    
   }
 
  return (
    <div className="field">
      <h4>Your Ships</h4>
      {field.map((itemRow,index) => {
        return (
          <div className='field-row' key={index}>
          <label className='row-label'>{row[index]}</label>
            {itemRow.map((itemCol, indexCol) =>
              <div className={`field-cell ${itemCol.ship ? 'ship-on-field ' : ''} 
                ${itemCol.preliminaryPosition ? 'preliminary-Position': ''}
                ${itemCol.errorCordinate ? 'error-cell' : ''}
                `}
                   key={itemCol.key} 
                   data-x={itemCol.x} 
                   data-y={itemCol.y}
                   onClick={fixShipOnField}
                   onMouseMove={event => preliminaryPositionShip(event)}
              >
                 {index === 0 ? <label className='col-label'>{column[indexCol]}</label> : ''} 
              </div>
            )}
          </div>

        )
      })}
      {/* <div className={classShip} style={{left: preliminaryCordShip.x, top: preliminaryCordShip.y }}></div> */}
    </div>
  )
}