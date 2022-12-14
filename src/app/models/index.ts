export type ModelUser = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

export type ModelLabel = {
  id: number;
  name: string;
  color: string;
};

export type ModelCheckList = {
  name: string;
  done: boolean;
};

export type ModelComment = {
  user: number;
  name: string;
  date: string;
};

export type ModelCard = {
  id: number;
  name: string;
  description: string;
  priority: false;
  assign: Array<number>;
  checklist: Array<ModelCheckList>;
  deadline: string;
  comment: Array<ModelComment>;
  category: number;
};

export type ModelTaskCategory = {
  id: number;
  name: string;
  color: string;
  data: Array<ModelCard>;
};

export type ModelCategory = {
  id: number;
  name: string;
  color: string;
  data: Array<ModelCard>;
};
