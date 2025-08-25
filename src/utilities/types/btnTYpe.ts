export interface BtnType {
  btnText: string;
  clickFunction?: () => void;
  type?: "button" | "submit" | "reset";
}
