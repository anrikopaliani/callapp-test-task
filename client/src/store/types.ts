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
  fetchUsers: () => Promise<void>;
  addUser: (data: any) => Promise<void>;
  removeUser: (id: number) => void;
};
