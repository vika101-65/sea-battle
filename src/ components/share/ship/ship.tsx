import React, { useState } from 'react';
import './Shipview.css';
import { ShipSize } from '../../field/field'

export function Ship({ ships, moveShip, changeDirectionShip }) {

  return (
    <div>
      {ships.map((item: ShipSize, index: number) =>

        <div className={`ship ship-${item.direction}-${item.size}`}
          key={index} 
          onMouseMove={(e) => moveShip(item.id, e)}
          onDoubleClick={() => changeDirectionShip(item.id)}
          style={{ left: item.startX, top: item.startY }}>
        </div>
      )}
    </div>

  )
}
