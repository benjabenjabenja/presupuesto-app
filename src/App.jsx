import { useEffect, useState } from "react";
import Header from "./components/header";
import IconPlus from './assets/img/nuevo-gasto.svg';
import "./App.css";
import Modal from "./components/Modal";

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValid, setIsValid] = useState(false);
	const [modal, setModal] = useState(false);
	const [animate, setAnimate] = useState(false);

	const [nuevoGasto, setNuevoGasto] = useState({});

	useEffect(
		() => {
			const data = +localStorage.getItem('data');
			setPresupuesto(data);
		}, []
	);
	
	useEffect(
		() => {
			
			localStorage.setItem("data", JSON.stringify(presupuesto));
            // setIsValid(presupuesto > 0)
        }, [presupuesto]
	);

	useEffect(
		() => {
			const { presupuesto } = nuevoGasto
			setPresupuesto(presupuesto);
		}, [nuevoGasto]
	)
	const handleNuevoGasto = () => {
		setModal(true);
		setTimeout(() => {
			setAnimate(true);
		}, 500);
	};


    return (
		<>
			<Header
				presupuesto={presupuesto > 0 ? presupuesto : '' }
				setPresupuesto={setPresupuesto}
				isValid={isValid}
				setIsValid={setIsValid}
			/>
			{
				isValid &&
					<div className="nuevo-gasto">
						<img src={IconPlus} alt="icon Nuevo gasto" onClick={handleNuevoGasto}/>	
					</div>
			}
			{modal && <Modal setModal={setModal} animate={animate} setAnimate={setAnimate} setNuevoGasto={setNuevoGasto} /> }
			
        </>
    );
}

export default App;
