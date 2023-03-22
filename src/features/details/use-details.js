import { selectDetails } from "./details-slice";
import { clearDetails } from "./details-slice";
import { loadCountriesByName } from "./details-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export const useDetails = (name) => {
    const dispatch = useDispatch()
    const details = useSelector(selectDetails)
    

  useEffect(() => {
    dispatch(loadCountriesByName(name))
    return (() => dispatch(clearDetails()))
  }, [name, dispatch]);

  return details;
}