import { createContext, useContext, useState } from "react";

const FormContext = createContext(true);

export const FormContextProvider = ({ children }) => {
  const [formIsVisible, setformIsVisible] = useState(true);
  return (
    <FormContext.Provider value={{ formIsVisible, setformIsVisible }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const { formIsVisible, setformIsVisible } = useContext(FormContext);
  return { formIsVisible, setformIsVisible };
};
