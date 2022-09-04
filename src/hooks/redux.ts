import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootStateType } from "../redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<{
  rootReducer: RootStateType;
}> = useSelector;
export default { useAppDispatch, useTypedSelector };
