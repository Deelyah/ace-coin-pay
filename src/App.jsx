import "./App.css";
import Home from "./pages/Home";
import PaymentForm from "./pages/PaymentForm";
import { useFormContext } from "./store/formContext";

function App() {
  const { formIsVisible } = useFormContext();

  return (
    <>
      <main className="flex justify-center items-center min-h-screen w-full my-24">
        {formIsVisible && <PaymentForm />}
        {!formIsVisible && <Home />}
      </main>
    </>
  );
}

export default App;
