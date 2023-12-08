import { create } from 'zustand';

export interface IUserInputs {
  role?: string | string[] | null;
  region?: string | null;
  district?: string | null;
  dateOfBirth?: Date | null;
  fullName?: string;
  livingAddress?: string;
  workingAddress?: string;
  passportNumber?: string;
  phoneNumber?: string;
  username?: string;
  password?: string;
  pnfl?: string;
  rank?: string;
  position?: string;
  accountNonLocked?: boolean;
  _id?: number;
  photo?: string;
 
  
}


  

  

interface ILoginstore  {
  userInfo: IUserInputs;
  setUserInfo: (payload?: IUserInputs) => void;
}

export const useLoginStore = create<ILoginstore>((set) => ({
  userInfo: {},
  setUserInfo: (payload) => {
    console.log('payload',payload);
    
    set({ userInfo: payload || {} });
  }
}));
