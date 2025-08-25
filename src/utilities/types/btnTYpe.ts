export interface BtnType {
  btnText: string;
  clickFunction?: () => void;
  deleteFunction?: (param: string | number) => void;
  type?: "button" | "submit" | "reset";
}
