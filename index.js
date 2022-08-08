const escolar = () => {
    let edad = document.getElementById( "edad" ).value;
    console.log( edad )

    if ( edad == '' ) {
        alert('No tenemos tu edad')
    }else if( edad <= 5 ){
        alert( 'Te toca Kinder' )
    }else if ( edad <= 12 ) {
        alert( 'Te toca Primaria' )
    } else if ( edad <= 15 ) {
        alert( 'Te toca secundaria' )
    } else if ( edad <= 18 ) {
        alert( 'Te toca Preparatoria' )
    } else if ( edad > 18 ) {
        alert( 'Te toca Universidad' )
    }
}

const multiple = () => {
    let edad = document.getElementById( "edad" ).value;
    switch ( true ) {
        case ( edad == '' ):
            alert( 'No tenemos tu edad' )
            break;
        case ( edad <= 5 ):
            alert( 'Te toca Kinder' )
            break;
        case (edad <= 12):
            alert( 'Te toca Primaria' )
            break;
        case (edad <= 15):
            alert( 'Te toca secundaria' )
            break;
        case (edad <= 18):
            alert( 'Te toca Preparatoria' )
            break;
        case ( edad > 18 ):
            alert( 'Te toca Universidad' )
            break;
    }
}