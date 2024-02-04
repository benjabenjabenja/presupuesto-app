import { useState } from "react";
import "./App.css";
import Header from "./components/header";

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValid, setIsValid] = useState(0);
    return (
		<>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValid={isValid}
				setIsValid={setIsValid}
			/>
        </>
    );
}

export default App;
