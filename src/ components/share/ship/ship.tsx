import React from 'react';
import './Shipview.css';
import { ShipSize } from '../../field/field'

export function Ship({ ships, moveShip }) {

  // const showCoordinates = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e)
  // }

  return (
    <div>
      {ships.map((item: ShipSize, index: number) =>

        <div className={`ship ship-row-${item.size}`}
          key={index} 
          onMouseMove={(e) => moveShip(item.id, e)}
          style={{ left: item.startX, top: item.startY }}>
        </div>
      )}
    </div>

  )
}
