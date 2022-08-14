		
		const MostrarContenido = function(){
			console.log(`function function_ID(){
							if(SSCONN.var_name){
								
			//=======================================================================
			
							// CODIGO A EJECUTAR AQUI:

			//=======================================================================
			//=======================================================================
							// DETENER INTERVAL
							clearInterval(interval_ID)
			//=======================================================================
								
							}
						}
						
			const interval_ID = setInterval(function_ID,0)`)

		}
// contenedora de json's
		const SSCONN = {};
		async function getSheetData(URL_API, SheetName, Var_Name){

			const information = [{
				tableName: SheetName,
				type:"getSheetData"
			}]

				let formData = new FormData();

				formData.append("data", JSON.stringify(information));
				await fetch(URL_API, {
				method: "POST",
				body: formData,
				}).then((res)=>{
					return res.json()
				}).then((ArrayFilas)=>{
					SSCONN[Var_Name] = ArrayFilas;
				})
				
			}

			
		


		// INSERTAR FILA
		async function insertRows(URL_API, TableName, Objects_Array){

			let formData = new FormData();


			information = {
				type: "insertRows",
				tableName: TableName
			}
			Objects_Array.push(information);
			formData.append("data", JSON.stringify(Objects_Array));
			await fetch(URL_API, {
				method: "POST",
				body: formData,
			}).then(rep=>{
				return rep.json();
			}).then(respuesta=>{
				
			})
		}

		async function selectRows(URL_API, TABLENAME, Objects_Array, WHERE, Var_Name){

			let formData = new FormData();

			let information = {"type":"selectRows","tableName":TABLENAME,"where":WHERE}

			Objects_Array.push(information);

			formData.append("data", JSON.stringify(Objects_Array));
			
			await fetch(URL_API, {
				method: "POST",
				body: formData,
			}).then(rep=>{
				return rep.json();
			}).then(rowsSeleccionadas=>{
				SSCONN[Var_Name] = rowsSeleccionadas;
			})
		}


	

		async function updateRows(URL_API, TABLENAME, Objects_Array, WHERE){

			let formData = new FormData();

			let information = {"type":"updateRows","tableName":TABLENAME,"where":WHERE}

			Objects_Array.push(information);

			formData.append("data", JSON.stringify(Objects_Array));
			
			await fetch(URL_API, {
				method: "POST",
				body: formData,
			}).then(rep=>{
				
			}).then(respuesta=>{
				
			})
		}


		async function deleteRows(URL_API, TABLENAME, Objects_Array, WHERE){

			let formData = new FormData();

			let information = {"type":"deleteRows","tableName":TABLENAME,"where":WHERE}

			Objects_Array.push(information);
			console.log(JSON.stringify(Objects_Array))

			formData.append("data", JSON.stringify(Objects_Array));
			
			await fetch(URL_API, {
				method: "POST",
				body: formData,
			}).then(rep=>{
				
			}).then(respuesta=>{
				
			})
		}


		
