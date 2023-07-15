export type FormValuesType = {
  name: string;
  city: string;
  street: string;
  gender: string;
  email: string;
  phone: string;
};

export type SubmitFormType = {
  id: number;
  name: string;
  address: {
    city: string;
    street: string;
  };
  gender: string;
  email: string;
  phone: string;
};

export type PreviousReduceValueType = {
  [key: string]: number;
};
