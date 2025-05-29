const listaTareas = document.querySelector('.listaTareas')
const totalTareas = document.querySelector('.totalTareas')
const totalRealizadas = document.querySelector('.totalRealizadas')
const btnAgregar = document.querySelector('#addBtn')
const inputTarea = document.querySelector('#inputTarea')

const tareas =[
    {id:1, tarea: 'Hacer la compra', realizada: false},
    {id:2, tarea: 'Lavar el coche', realizada: false},
    {id:3, tarea: 'Estudiar JavaScript', realizada: false},
]


function renderizarTareas() {
    let html = ''
    if (tareas.length === 0) {
        html = '<li>No hay tareas todavía.</li>'
    } else {
        for (let i = 0; i < tareas.length; i++) {
           
            const checkedAttribute = tareas[i].realizada ? 'checked' : '';
            html += `
                <li>
                    ${tareas[i].tarea}
                    <input type="checkbox" data-id="${tareas[i].id}" ${checkedAttribute} onchange="toggleRealizada(${tareas[i].id})">
                    <button onclick="borrar(${tareas[i].id})">Borrar</button>
                </li>
            `
        }
    }
    listaTareas.innerHTML = html
    actualizarResumen()
}

btnAgregar.addEventListener('click', () => {
    if (inputTarea.value.trim() === '') {
        alert('Por favor, ingresa una tarea.')

    } else {
        const nuevaTarea = {id: Date.now(), tarea: inputTarea.value, realizada: false}
        tareas.push(nuevaTarea)
        inputTarea.value = ''

        renderizarTareas()
    }
})


function borrar(id) {
    const index = tareas.findIndex(tarea => tarea.id === id)
    if (index !== -1) {
        tareas.splice(index, 1)
        renderizarTareas()
    }
}


function toggleRealizada(id) {
    const tareaIndex = tareas.findIndex(tarea => tarea.id === id);
    if (tareaIndex !== -1) {
        tareas[tareaIndex].realizada = !tareas[tareaIndex].realizada;
        actualizarResumen(); 
    }
}
// ---

function actualizarResumen() {
    totalTareas.textContent = tareas.length
    const realizadas = tareas.filter(tarea => tarea.realizada).length
    totalRealizadas.textContent = realizadas
}

renderizarTareas();





























// const listaTareas = document.querySelector('.listaTareas')
// const totalTareas = document.querySelector('.totalTareas')
// const totalRealizadas = document.querySelector('.totalRealizadas')
// const btnAgregar = document.querySelector('#addBtn')
// const inputTarea = document.querySelector('#inputTarea')

// const tareas =[
//     {id:1, tarea: 'Hacer la compra', realizada: false},
//     {id:2, tarea: 'Lavar el coche', realizada: false},
//     {id:3, tarea: 'Estudiar JavaScript', realizada: false},
// ]


// function renderizarTareas() {
//     let html = ''
//     if (tareas.length === 0) {
//         html = '<li>No hay tareas todavía.</li>'
//     } else {
//         for (let i = 0; i < tareas.length; i++) {
//             html += `<li>${tareas[i].tarea} <input type="checkbox" name="" id=""> <button onclick= "borrar (${tareas[i].id})">Borrar </button> </li>`
//         }
//     }
//     listaTareas.innerHTML = html
//     actualizarResumen()
// }

// btnAgregar.addEventListener('click', () => {
//     if (inputTarea.value.trim() === '') {
//         alert('Por favor, ingresa una tarea.')
       
//     } else {

//         const nuevaTarea = {id: Date.now(), tarea: inputTarea.value, realizada: false}
//         tareas.push(nuevaTarea)
//         inputTarea.value = ''
        
//         renderizarTareas()
//     }
       

//     })


// function borrar(id) {  
//     const index = tareas.findIndex(tarea => tarea.id === id)
//     if (index !== -1) {
//         tareas.splice(index, 1)
//         renderizarTareas()
//     }   

// }

// function actualizarResumen() {
//     totalTareas.textContent = tareas.length
//     const realizadas = tareas.filter(tarea => tarea.realizada).length
//     totalRealizadas.textContent = realizadas
// }

// renderizarTareas();



