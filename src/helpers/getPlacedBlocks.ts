import { IBlock, IBlockPlacement, IContainer } from "../types";

class BlockPacker {
  containers: (IContainer & { blockPlacements: IBlockPlacement[] })[] = [];

  constructor(private blocks: IBlock[], private container: IContainer) {
    this.createNewContainer();
  }

  packBlocks(): void {
    this.blocks.forEach((block) => {
      this.putBlock(block);
    });
  }

  putBlock(block: IBlock): void {
    const placement = this.findBestPlacement(block);
    if (placement) {
      this.getLastContainerBlockPlacements().push(placement);
    } else {
      this.createNewContainer();
      this.putBlock(block);
    }
  }

  findBestPlacement(block: IBlock): IBlockPlacement | null {
    for (let y = 0; y <= this.container.height - block.height; y += 0.1) {
      for (let x = 0; x <= this.container.width - block.width; x += 0.1) {
        if (this.canPlaceBlockAt(block, x, y)) {
          return { block, x, y };
        }
      }
    }
    return null;
  }

  canPlaceBlockAt(block: IBlock, x: number, y: number): boolean {
    for (const placement of this.getLastContainerBlockPlacements()) {
      const { block: placedBlock, x: placedX, y: placedY } = placement;

      if (
        x < placedX + placedBlock.width &&
        x + block.width > placedX &&
        y < placedY + placedBlock.height &&
        y + block.height > placedY
      ) {
        return false;
      }
    }

    return true;
  }

  getLastContainerBlockPlacements(): IBlockPlacement[] {
    return this.containers[this.containers.length - 1].blockPlacements;
  }

  createNewContainer(): void {
    this.containers.push({
      ...this.container,
      blockPlacements: [],
    });
  }
}

export { BlockPacker };
