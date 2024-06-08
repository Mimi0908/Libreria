// En mdboostrap.com.co hay plantillas para hacer el carrito por dentro.


import React from 'react'
import { useContext, dataContext } from 'react'

import imagen from "../../img/animals.jpg"

// traer en el enrutador la ruta de carrito vacio...

export default function CarritoElements() {

    const { librosDelCarrito, setLibrosDelCarrito } = useContext(dataContext)

    //libros del carrito llama al que ya esta creado en el "data context"

    const eliminarLibroDelCarrito = (e) => {
        const librosFiltrados = librosDelCarrito.filter((filtro) => filtro.id !== Number(e.currentTarget.id))
        //aquí se encuentra y se elimina el elemento del carrito
        
        setLibrosDelCarrito(librosFiltrados)
        // aquí se re ordena el carrito
    }

    const cantidad = () =>{
        setLibrosDelCarrito((actualeslibs) =>{
            return actualeslibs.map((libs) =>{

                const valor = document.getElementById(libs.id)
                return{ ...libs, precioCarrito: libs.precio * valor.value, cantidad: valor.value}
                //retornas los libros con el precio del carrito y multiplicarlo con el vlaor que contiene cantidad y actualiza el precio
            })
        })
    }

    // Da formato a los numeros o cantidades
    const formatoNumero = (number) =>{
        return new Intl.NumberFormat().format(number)
    }

    return librosDelCarrito.map((libs) => { // el .map sirve para iterar sobre el arreglo; el "libs" es como se llama el array 
        return (


            <section class="h-100" >
                <div class="container h-100 py-5">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-10">

                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                                <div>
                                    <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                                        class="fas fa-angle-down mt-1"></i></a></p>
                                </div>
                            </div>

                            <div class="card rounded-3 mb-4">
                                <div class="card-body p-4">
                                    <div class="row d-flex justify-content-between align-items-center">
                                        <div class="col-md-2 col-lg-2 col-xl-2">
                                            <img
                                                src={libs.image} //titulo del libro 
                                                class="img-fluid rounded-3" alt="Cotton T-shirt" />
                                        </div>
                                        <div class="col-md-3 col-lg-3 col-xl-3">
                                            <p class="lead fw-normal mb-2">{libs.title}</p> 
                                            
                                        </div>
                                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                <i class="fas fa-minus"></i>
                                            </button>

                                            <input id={libs.id} min="1" name="quantity" className='form-control form-control-sm' value={libs.cantidad} type="number" onChange={cantidad} 
                                            //en caso de cambio, llamara a la función "cantidad".
                                            />
                                            </div>
                                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 class="mb-0">$ {formatoNumero(libs.precioCarrito)}</h5>
                                        </div>



                                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg" id={libs.id} onclick={eliminarLibroDelCarrito}  /*al clickear, llamara a la funcion "eliminarcarrito" */></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="card">
                                <div class="card-body">
                                    <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        );
    })
}