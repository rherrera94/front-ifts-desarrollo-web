import empleados from '../datos/variables'
export default function Cumpleanios() {
    if (empleados.length===0){
        return(
            <div>
                <h3>Este mes no cumpleaños ningún compañero</h3>
            </div>
        )
        
    }else{
        return (
            <div className="cumple-tabla">
                <table className="tabla-cumpleanios">
                        <tr> 
                            <th>Día</th> 
                            <th>Empleado</th> 
                            <th>Interno</th>
                        </tr>
                        {empleados.map((unEmpleado, index) => {
                            let d=new Date(unEmpleado.cumpleanios);
                            let dcomp=new Date();
                            if(d.getMonth()===dcomp.getMonth()){  
                                let dia=d.getDate();
                                return (
                                    <tr>
                                        <td>{dia}</td> 
                                        <td>{unEmpleado.nombre}</td>
                                        <td>{unEmpleado.interno}</td>
                                    </tr>         
                                    );
                            }
                            return null;
                        })}
                </table>
            </div>
        )    
    }
    
}
