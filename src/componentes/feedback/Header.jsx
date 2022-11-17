import propTypes from 'prop-types';

const Header = (bgColor, c) => {

        return(
        <header style={
                {     
                        backgroundColor: bgColor,
                        color: c
                }}>

            <h1>Encabezado</h1>
        </header>
        )
}

//valores por defecto
Header.defautlProps={
        bgColor: 'ed51a3',
        color: 'red',
}
//Validaciones de props
Header.propTypes={
        bgColor: propTypes.string,
        color: propTypes.string,
}
export default Header