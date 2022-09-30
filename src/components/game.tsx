import { useState } from "react";
import { ComputerField } from "./computerField";
import { PlayerField } from "./playerField";
import { Ship, shipDatas, Ships } from "./ships";

export function Game () {
  const [shipOnField, setShipOnField] = useState<Ship[] | []>([]);
  const [classShip, setclassShip] = useState('');
  const [shipOnDock, setShipOnDock] = useState(shipDatas);

   const addingShipToField = (ship:Ship) => {
    // setShipOnField((prevSpis: Ship[] | []) => {
    //   const newShips = [...prevSpis];
    //   newShips.push(ship);
    //   return newShips;
    // })
    setShipOnField([ship]);
  };

  console.log(shipOnField);
  return (
    <>
     <PlayerField 
      shipOnField={shipOnField}
      classShip={classShip}
      setShipOnField={setShipOnField}
      setShipOnDock={setShipOnDock}
      shipOnDock={shipOnDock}

     />
     <ComputerField></ComputerField>
     <Ships 
        addingShipToField={addingShipToField}
        setShipOnDock={setShipOnDock}
        shipOnDock={shipOnDock}
        setclassShip={setclassShip}
     />
    </>
  )
}