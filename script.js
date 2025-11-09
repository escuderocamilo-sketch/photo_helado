document.addEventListener("DOMContentLoaded", function () {
  const botonesAgregar = document.querySelectorAll(".agregar-carrito");
  const listaCarrito = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total");
  const vaciarBtn = document.getElementById("vaciar-carrito");
  const comprarBtn = document.getElementById("comprar");

  let total = 0;

  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", function () {
      const item = boton.closest(".menu-item");
      const nombre = item.querySelector("h3").textContent;
      const precio = parseInt(item.querySelector(".precio").dataset.precio);

      const li = document.createElement("li");
      li.textContent = `${nombre} - $${precio.toLocaleString()}`;
      listaCarrito.appendChild(li);

      total += precio;
      totalSpan.textContent = total.toLocaleString();
    });
  });

  vaciarBtn.addEventListener("click", function () {
    listaCarrito.innerHTML = "";
    total = 0;
    totalSpan.textContent = "0";
  });

  comprarBtn.addEventListener("click", function () {
    if (total === 0) {
      alert("🛒 Tu carrito está vacío. Agrega algo antes de comprar.");
    } else {
      alert(`🎉 Gracias por tu compra en PhotoHelado 🍨\nTotal pagado: $${total.toLocaleString()}`);
      listaCarrito.innerHTML = "";
      total = 0;
      totalSpan.textContent = "0";
    }
  });
});
