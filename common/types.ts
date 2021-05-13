export interface IProject {
  name: string;
  icon: string;
  url: string;
}

export interface IDataElement {
  name: string;
  homepage: string;
}

export interface IDisplayElementProps {
  data: Array<IDataElement>;
}
