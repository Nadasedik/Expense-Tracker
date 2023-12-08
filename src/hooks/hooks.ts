import { useDispatch, useSelector,TypedUseSelectorHook } from "react-redux";
import { AppDispatch, AppState } from "../store/store";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;