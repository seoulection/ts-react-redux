import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface StateType {
  todos: TodoType[];
  filters: FiltersType;
};

type TodoType = {
  id: number;
  text: string | number;
  completed: boolean;
  color?: string;
};

type FiltersType = {
  status: string;
  colors: string[];
};

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
