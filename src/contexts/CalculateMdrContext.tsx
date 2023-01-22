import { createContext, ReactNode, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

export interface ICalculateMdr {
  amount: number;
  installments: number;
  mdr: number;
}

interface ICalculateMdrProviderProps {
  children: ReactNode;
}

interface ICalculateMdrContext {
  calculateMdr: (data: ICalculateMdr) => void;
  values: number[];
}

export const CalculateMdrContext = createContext({} as ICalculateMdrContext);

export const CalculateMdrProvider = ({
  children,
}: ICalculateMdrProviderProps) => {
  const [values, setValues] = useState<number[]>([]);
  function calculateMdr(data: ICalculateMdr) {
    const newData = {
      amount: data.amount * 100,
      installments: data.installments,
      mdr: data.mdr,
    };

    api
      .post('/', newData)
      .then((response) => {
        setValues(Object.values(response.data));
      })
      .catch((error) => {
        if (error.response.status === 408) {
          toast.error('Timeout error!', { autoClose: 3000 });
        } else if (error.response.status === 500) {
          toast.error('Internal Server Error!', { autoClose: 3000 });
        } else {
          toast.error(error.response.data.message, { autoClose: 3000 });
        }
      });
  }

  return (
    <CalculateMdrContext.Provider
      value={{
        calculateMdr,
        values,
      }}
    >
      {children}
    </CalculateMdrContext.Provider>
  );
};