import loinImage from './images/lion.png';
import chickenImage from './images/chicken.png';
import griffImage from './images/griff.png';
import elophantImage from './images/elophant.png';
import { PlayerType } from "./Player";
import { Cell, Position } from "./board";

export class MoveResult {
  constructor(private killedPiece: Piece) { }
  getKilled() {
    return this.killedPiece;
  }
}

export interface Piece {
  ownerType: PlayerType;
  currentPosition: Position;
  move(from: Cell, to: Cell): MoveResult;
  //특정cell에서 다른cell로 move시 결과가 MoveResult
  render(): string;
}

abstract class DefaultPiece implements Piece {
  private _dead = false;

  constructor(public currentPosition: Position, public ownerType: PlayerType) {
  }

  move(from: Cell, to: Cell) {
    if (!this.canMove(to.poisiton)) {
      throw new Error('Can not move!');
    }

    const moveResult =
      new MoveResult((to.getPiece() != null) ? to.getPiece() : null);
      //이동하는 곳에 piece가 있으면
    to.put(this); //다른 셀로 옮김
    from.put(null); // 이전 셀에서 지움
    this.currentPosition = to.poisiton;
    //옮긴곳 좌표 바꿈
    return moveResult;
  }

  abstract canMove(pos: Position);
  abstract render();
}


//각 piece 움직임 설정 후 이미지 입혀 render
export class Lion extends DefaultPiece {
  canMove(pos: Position) {
    const canMove = (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col)
      || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col)
      || (pos.col === this.currentPosition.col + 1 && pos.row === this.currentPosition.row)
      || (pos.col === this.currentPosition.col - 1 && pos.row === this.currentPosition.row)
      || (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col + 1)
      || (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col - 1)
      || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col + 1)
      || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col - 1);
    return canMove;
  }

  render(): string {
    return `<img class="piece ${this.ownerType}" src="${loinImage}" width="90%" height="90%"/>`;
  }
}

export class Elephant extends DefaultPiece {
  canMove(pos: Position) {
    return (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col + 1)
      || (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col - 1)
      || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col + 1)
      || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col - 1);
  }

  render(): string {
    return `<img class="piece ${this.ownerType}" src="${elophantImage}" width="90%" height="90%"/>`;
  }
}

export class Griff extends DefaultPiece {
  canMove(pos: Position) {
    return (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col)
      || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col)
      || (pos.col === this.currentPosition.col + 1 && pos.row === this.currentPosition.row)
      || (pos.col === this.currentPosition.col - 1 && pos.row === this.currentPosition.row);
  }

  render(): string {
    return `<img class="piece ${this.ownerType}" src="${griffImage}" width="90%" height="90%"/>`;
  }
}

export class Chick extends DefaultPiece {
  canMove(pos: Position) {
    return this.currentPosition.row + ((this.ownerType == PlayerType.UPPER) ? +1 : -1) === pos.row;
  }

  render(): string {
    return `<img class="piece ${this.ownerType}" src="${chickenImage}" width="90%" height="90%"/>`;
  }
}
