import React, { useState } from 'react';
import { Battle } from '../share/battle/battle.tsx';
import { Ship } from '../share/ship/ship.tsx';
import Table from '../share/table/table.tsx';

export interface ShipSize {
  size: number;
  direction: string;
  startX: number;
  startY: number;
  id: string
}

const ships: ShipSize[] = [
  { size: 4, direction: "row", startX: 10, startY: 350, id: 'a' },
  { size: 3, direction: "row", startX: 10, startY: 390, id: 'b' },
  { size: 3, direction: "row", startX: 120, startY: 390, id: 'c' },
  { size: 2, direction: "row", startX: 10, startY: 435, id: 'd' },
  { size: 2, direction: "row", startX: 88, startY: 435, id: 'e' },
  { size: 2, direction: "row", startX: 167, startY: 435, id: 'f' },
  { size: 1, direction: "row", startX: 10, startY: 480, id: 'g' },
  { size: 1, direction: "row", startX: 55, startY: 480, id: 'h' },
  { size: 1, direction: "row", startX: 100, startY: 480, id: 'i' },
  { size: 1, direction: "row", startX: 145, startY: 480, id: 'j' },
];

export function Field() {
  const [allShips, setAllShops] = useState(ships);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const moveShip = (id, e) => {
    const newShips = allShips.map((item) => {
      if (item.id === id && e.buttons === 1) {console.log('e', e)
        item.startX = x - e.target.offsetWidth/2;
        item.startY = y - e.target.offsetHeight/2; 
        console.log(item);
      };
      return item;
    });
    setAllShops(newShips);
  }

  const onMouseMove = (event) => {
    console.log(event.pageX, event.pageY);
      setX(event.clientX);
      setY(event.clientY);
  }

  const changeDirectionShip = (id) => {
    const newShips = allShips.map((item) => {
      if(item.id === id) {
        item.direction = item.direction === "row" ? "column" : "row" ;
      }
      return item;
    })
  }

  return (
    <div className='pier'
      onMouseMove={(e) => onMouseMove(e)}
    >
      <Table />
      <Ship ships={allShips} moveShip={moveShip} changeDirectionShip={changeDirectionShip}/>
      <Battle/>
    </div>
  )
}