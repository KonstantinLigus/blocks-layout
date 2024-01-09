import { useState } from "react";
import { BlockPacker, getArray } from "./helpers";

const container = { width: 20, height: 40 };

const blocks_1 = getArray({ width: 1.5, height: 7, rotated: false }, 50);
const blocks_2 = getArray({ width: 2.3, height: 4.5, rotated: false }, 70);
const blocks_3 = getArray({ width: 3.9, height: 2, rotated: false }, 50);

const totalBlocksAmmount = blocks_1.concat(blocks_2, blocks_3);

const blockPacker = new BlockPacker(totalBlocksAmmount, container);
blockPacker.packBlocks();

console.log("Containers:", blockPacker.containers.length);

function App() {
  const [containers] = useState(blockPacker.containers);
  return (
    <ul>
      {containers.map(({ width, height, blockPlacements }, ind) => (
        <li
          style={{
            position: "relative",
            width: `${width}in`,
            height: `${height}in`,
            border: "10px solid red",
          }}
          key={ind}
        >
          <ul>
            {blockPlacements.map(({ block: { width, height }, x, y }, ind) => (
              <li
                style={{
                  position: "absolute",
                  top: `${y}in`,
                  left: `${x}in`,
                  width: `${width}in`,
                  height: `${height}in`,
                  background: "blue",
                }}
                key={ind}
              />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default App;
