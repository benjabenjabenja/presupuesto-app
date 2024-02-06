/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "./components/header";
import IconPlus from './assets/img/nuevo-gasto.svg';
import Modal from "./components/Modal";
import ListaGastos from "./components/ListaGastos";
import "./App.css";
import { randomId } from "./helpers";
import Filtro from "./components/Filtro";

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValid, setIsValid] = useState(false);
	const [modal, setModal] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [total, setTotal] = useState([]);
	const [reset, setReset] = useState(false);

	const [nuevoGasto, setNuevoGasto] = useState({});
	const [editarGasto, setEditarGasto] = useState({});
	const [eliminarGasto, setEliminarGasto] = useState('');

	const [filtroGasto, setFiltroGasto] = useState('');
	const [filtrados, setFiltrados] = useState([]);

	useEffect(
		() => {
			const data = +localStorage.getItem('data') || 0;
			const t = JSON.parse(localStorage.getItem("total")) || [];
			setPresupuesto(data);
			setTotal(t);
		}, []
	);

	useEffect(
		() => {
			if (reset) {
				setPresupuesto(0);
				setIsValid(false);
				setTotal([]);
				setReset(false);
				setEditarGasto({});
				setModal(false);

				localStorage.clear();
			}
		}, [reset]
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
					...nuevoGasto
				}

				if (nuevoGasto.id) {
					const updated = total.map(v => v.id == nuevoGasto.id ? nuevoGasto : v);
					setTotal(updated);
				} else {
					obj.id = randomId();
					obj.create_at = Date.now();
					const r = [...total, obj];
					setTotal(r);	
				}
			}
			
		}, [nuevoGasto]
	);

	useEffect(
		() => { 
			if (eliminarGasto && eliminarGasto !== '') {
				const updated = total.filter(v => v.id !== eliminarGasto);
				setTotal(updated);
			}
		}, [eliminarGasto]
	);

	useEffect(
		() => {
			if (Object.keys(editarGasto).length > 0) {
				setModal(true);

				setTimeout(() => {
					setAnimate(true);
				}, 500);
			}
		}, [editarGasto]
	);

	useEffect(
		() => {
			const filtered = total.filter(v => v.categoria === filtroGasto);
			setFiltrados(filtered);
		}, [filtroGasto]
	);


	useEffect(
		() => {
			localStorage.setItem("total", JSON.stringify(total));
		}, [total]
	);

	const handleNuevoGasto = () => {
		setModal(true);

		setEditarGasto({});
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
				setReset={setReset}
			/>
			{
				isValid && (
					<>
						<main>
							<Filtro
								filtroGasto={filtroGasto}
								setFiltroGasto={setFiltroGasto}
							/>
							<ListaGastos
								total={total}
								setEditarGasto={setEditarGasto}
								setEliminarGasto={setEliminarGasto}
								filtrados={filtrados}
							/>
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
				setEditarGasto={setEditarGasto}
				editarGasto={editarGasto}
			/>}
			
        </div>
    );
}

export default App;
