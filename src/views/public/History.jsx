import React from "react";
import "../../components/css/History.css";

export default function History() {
  return (
    <div className="history d-flex flex-column">
      <h2>¿Dónde se produce el Café?</h2>
      <div className="history-container">
        <div className="history-column">
          <h3>Países más productores de café</h3>
          <div>
            <h3>Vietnam</h3>
            <p>
              El café tradicional vietnamita es una bebida fuerte y amarga
              preparada con un tueste oscuro, normalmente de Robusta. Se le
              añade leche condensada y la bebida suele enfriarse sobre hielo. A
              veces puede prepararse con leche fresca, pero no es habitual.
            </p>
          </div>
          <div>
            <h3>Colombia</h3>
            <p>
              El café colombiano está considerado como el mejor café suave del
              mundo, debido tanto a las condiciones naturales de las
              plantaciones en las que se cultiva como al proceso de producción y
              recolección.
            </p>
          </div>
          <div>
            <h3>Brasil</h3>
            <p>
              El café brasileño es conocido por su acidez neutra a baja, perfil
              equilibrado, dulzura sutil y notas de sabor a chocolate y nueces
              tostadas . La mayoría de los cafés producidos en Brasil se
              procesan naturalmente, lo que da como resultado un sabor más
              fuerte y más cuerpo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
