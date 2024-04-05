import React from 'react';
import ProfilePicture from './ProfilePicture';

function Client() {
    return (
        <div className="client-page">
            <header>
                {/* Aquí puedes colocar el logo o el nombre de tu tienda */}
            </header>

            <main>
                <section className="profile">
                    <ProfilePicture imageUrl="URL_DE_LA_IMAGEN" alt="Foto de perfil del cliente" />
                </section>

                <section className="cart">
                    <h2>Carrito de Compras</h2>
                    {/* Componente para el carrito de compras */}
                </section>
            </main>

            <footer>
                {/* Aquí puedes colocar información adicional, como enlaces a redes sociales o información de contacto */}
            </footer>
        </div>
    );
}

export default Client;

