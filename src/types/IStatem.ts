interface IGroup {
  isRotate: boolean;
}

export interface IState {
  totalQuantity: number;
  perPageQuantity: {
    firsGroup: null | IGroup[];
    secondGroup: null | IGroup[];
    thirdGroup: null | IGroup[];
    areaPercentage: number;
  };
  totalPages: number;
}
