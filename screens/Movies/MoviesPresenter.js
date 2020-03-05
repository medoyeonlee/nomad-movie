import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';

const MoviesPresenter = ({loading}) => 
loading ? <Loader/> : <Text>Movies????</Text>

MoviesPresenter.prototype = {
    loading:PropTypes.bool.isRequired
}

export default MoviesPresenter;