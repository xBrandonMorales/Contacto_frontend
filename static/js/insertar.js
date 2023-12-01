document.addEventListener("DOMContentLoaded", () => {
    const insertForm = document.getElementById("insertForm");
    const insertResultDiv = document.getElementById("insertResult");

    insertForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const email = document.getElementById("email").value;
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;

        try {
            const response = await fetch("https://8000-xbrandonmor-ccontactosb-6zgf0rax43c.ws-us106.gitpod.io/contactos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, nombre, telefono }),
            });

            if (response.status === 200) {
                const data = await response.json();
                const message = `Contacto insertado: ${data.email}`;
                alert(message);
                // Limpiar los campos del formulario después de la inserción
                document.getElementById("email").value = "";
                document.getElementById("nombre").value = "";
                document.getElementById("telefono").value = "";
            } else {
                const errorMessage = "Error al insertar el contacto.";
                alert(errorMessage);
            }
            
        } catch (error) {
            console.error(error);
        }
    });
});