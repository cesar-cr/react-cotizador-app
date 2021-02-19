import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { primeraMayuscula } from '../helpers';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`

const Resumen = ({ datos }) => {

    const { marca, year, plan } = datos;

    if (marca.trim() === '' || year.trim() == '' || plan.trim() === '') {
        return null;
    }

    return (
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Año: {year}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>
    )
}

Resumen.propTypes = {
    datos : PropTypes.object.isRequired
}

export default Resumen
