url = 'https://jsonplaceholder.typicode.com/todos';

var data = fetch(url).then(response => response.json());


  // Funciones para obtener y mostrar los resultados
function obtenerIDs() {
    let resultados = '';
    data.then(res => {
        res.forEach(element => {
            resultados += ' ID: ' + element.id + '<br>'
        });
        mostrarResultado('Lista de todos los pendientes (ID):<br>' + resultados);
    })
  }

function obtenerIDsYTitulos() {
    let resultados = '';
    data.then(res => {
        res.forEach(element => {
            resultados += ' ID: ' + element.id + ' Titulo: ' + element.title + '<br> '
        });
        mostrarResultado('Lista de todos los pendientes (ID\'s y títulos):<br>' + resultados);
    })
  }

function obtenerPendientesSinResolver() {
    let resultados = '';
    data.then(res => {
        res.forEach(element => {
            if(element.completed == false){
                resultados += ' ID: ' + element.id + ' Titulo: ' + element.title + '<br> '
            }
        });
        mostrarResultado('Lista de todos los pendientes sin resolver (ID\'s y títulos):<br>' + resultados);
    })
  }

function obtenerPendientesResueltos() {
    let resultados = '';
    data.then(res => {
        res.forEach(element => {
            if(element.completed == true){
                resultados += ' ID: ' + element.id + ' Titulo: ' + element.title + '<br> '
            }
        });
        mostrarResultado('Lista de todos los pendientes resueltos (ID\'s y títulos):<br>' + resultados);
    });
  }

function obtenerIDsYUsuarios() {
    let resultados = '';
    data.then(res => {
        res.forEach(element => {
            resultados += ' ID: ' + element.id + ' UserID: ' + element.userId + '<br> '
            
        });
        mostrarResultado('Lista de todos los pendientes (ID y UserID):<br>' + resultados);
    });

  }

function obtenerPendientesResueltosConUsuarios() {
    let resultados = '';
    data.then(res => {
        res.forEach(element => {
            if(element.completed == true){
                resultados += ' ID: ' + element.id + ' UserID: ' + element.userId + '<br> '
            }
        });
        mostrarResultado('Lista de todos los pendientes resueltos (ID y userId):<br>' + resultados);
    });
  }

function obtenerPendientesSinResolverConUsuarios() {
    let resultados = '';
    data.then(res => {
        res.forEach(element => {
            if(element.completed == false){
                resultados += ' ID: ' + element.id + ' UserID: ' + element.userId + '<br> '
            }
        });
        mostrarResultado('Lista de todos los pendientes sin resolver (ID y userId):<br>' + resultados);
    });
  }

  // Función para mostrar los resultados en el elemento de texto
  function mostrarResultado(resultado) {
    document.getElementById('resultados').innerHTML = resultado;
  }