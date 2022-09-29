import { useState } from "react";
import { GameField } from "./gameField";
import { Ship, shipDatas, Ships } from "./ships";

export function Game () {
  const [shipOnField, setShipOnField] = useState<Ship[] | []>([]);
  const [classShip, setclassShip] = useState('');
  const [shipOnDock, setShipOnDock] = useState(shipDatas);

   const addingShipToField = (ship:Ship) => {
    setShipOnField((prevSpis: Ship[] | []) => {
      const newShips = [...prevSpis];
      newShips.push(ship);
      return newShips;
    })
  };

  console.log(shipOnField);
  return (
    <>
     <GameField 
      shipOnField={shipOnField}
      classShip={classShip}
      setShipOnField={setShipOnField}
      setShipOnDock={setShipOnDock}
      shipOnDock={shipOnDock}

     />
     <Ships 
        addingShipToField={addingShipToField}
        setShipOnDock={setShipOnDock}
        shipOnDock={shipOnDock}
        setclassShip={setclassShip}
     />
    </>
  )
}