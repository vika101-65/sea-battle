import { useState } from "react";

export interface Ship {
  size: number;
  direction: string;
  startX: number;
  startY: number;
  name: string;
  additionalClass?: string
}

export const shipDatas : Ship[]= [
	{ size: 4, direction: "row", startX: 10, startY: 385, name: 'four1' },
	{ size: 3, direction: "row", startX: 10, startY: 420, name: 'three1' },
	{ size: 3, direction: "row", startX: 120, startY: 420, name: 'three2' },
	{ size: 2, direction: "row", startX: 10, startY: 465, name: 'two1' },
	{ size: 2, direction: "row", startX: 88, startY: 465, name: 'two2' },
	{ size: 2, direction: "row", startX: 167, startY: 465, name: 'two3' },
	{ size: 1, direction: "row", startX: 10, startY: 510, name: 'one1' },
	{ size: 1, direction: "row", startX: 55, startY: 510, name: 'one2' },
	{ size: 1, direction: "row", startX: 100, startY: 510, name: 'one3' },
	{ size: 1, direction: "row", startX: 145, startY: 510, name: 'one4' },
];

export function Ships ({
  addingShipToField, 
  setclassShip, 
  shipOnDock, 
  setShipOnDock}: any) {
  
  const placeShip = (event: React.MouseEvent<HTMLElement>, ship:Ship) => {
    const classShip = event.currentTarget.getAttribute('class');
    setclassShip(classShip);

    const updatedShipOnDock = shipOnDock.map((item:Ship)=> {
      if (item.name === ship.name) {
        addingShipToField(item)
        return (
          {...item,
            additionalClass: 'selected-ship'
          })
      } else 
        return item;
    });
    
    setShipOnDock(updatedShipOnDock);
  }
  
  return (
    <>
      {
        shipOnDock.map((item: Ship) => 
          <div key={item.name} 
               className={`ship ship-${item.direction}-${item.size} ${item?.additionalClass}`} 
               style={{left: item.startX, top: item.startY}}
               onClick={(event) => placeShip(event, item)}
          >a</div>)
      }
    </>
  )
}