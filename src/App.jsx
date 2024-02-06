/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "./components/header";
import IconPlus from './assets/img/nuevo-gasto.svg';
import Modal from "./components/Modal";
import ListaPresupuesto from "./components/ListaPresupuesto";
import "./App.css";

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValid, setIsValid] = useState(false);
	const [modal, setModal] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [total, setTotal] = useState([]);
	const [nuevoGasto, setNuevoGasto] = useState({});

	useEffect(
		() => {
			const data = +localStorage.getItem('data') || 0;
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
			if(Object.keys(nuevoGasto).length > 0) {
				const obj = {
					...nuevoGasto,
					create_at: Date.now()
				}
				const r = [...total, obj];
				setTotal(r);	
			}
			
		}, [nuevoGasto]
	);
	const handleNuevoGasto = () => {

		setModal(true);
		setTimeout(() => {
			setAnimate(true);
		}, 500);
	};

    return (
		<div className={modal? 'fijar': ''}>
			<Header
				total={total}
				presupuesto={presupuesto > 0 ? presupuesto : '' }
				setPresupuesto={setPresupuesto}
				isValid={isValid}
				setIsValid={setIsValid}
			/>
			{
				isValid && (
					<>
						<main>
							<ListaPresupuesto total={total} />
						</main>
						<div className="nuevo-gasto">
							<img src={IconPlus} alt="icon Nuevo gasto" onClick={handleNuevoGasto}/>	
						</div>
					</>
				)
			}
			{modal && <Modal
				setModal={setModal}
				animate={animate}
				setAnimate={setAnimate}
				setNuevoGasto={setNuevoGasto}
			/>}
			
        </div>
    );
}

export default App;
