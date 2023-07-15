export type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
};

export type StateTypes = {
  users: User[];
  fetchUsers: () => void;
  addUser: (data: any) => void;
  removeUser: (id: number) => void;
  editUser: (id: number, data: User) => void;
};

export type EditUserType = {
  name: string;
  email: string;
  gender: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
};
