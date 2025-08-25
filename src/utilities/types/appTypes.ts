export interface SectionHeaderTypes {
  title: string;
  path: string;
}

export interface SectionHeaderNoLinkTypes {
  title: string;
}

export interface FooterLinkTypes {
  path: string;
  icon: React.ReactNode;
}

export interface FooterUsefulLinkTypes {
  path: string;
  linkName: string;
}

export interface FooterHeaderType {
  title: string;
}

export interface TextareaType {
  title: string;
  placeholderText: string;
  textRow: number;
  value?: string | number | string[] | File[] | boolean;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export interface StarRatingType {
  maxRating: number;
}

export interface StarFuncType {
  onRate: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
  full: boolean;
}

export interface InputType {
  name: string;
  type?: string;
  inputPlaceholder: string;
  inputValue?: string | number | string[] | File[] | boolean;
  inputHandler: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onImagesChange?: (images: string[]) => void;
  onBadgesChange?: (badges: number[]) => void;
}

export interface HeaderWithBackTypes {
  title: string;
  btnText: string;
}
