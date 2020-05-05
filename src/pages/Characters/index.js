import React, { Component } from 'react';
import Proptypes from 'prop-types';
import api from '../../services/api';

import { Container, CharList, Link, Card, Loading } from './styles';

class Characters extends Component {
    static propTypes = {
        match: Proptypes.shape({
            params: Proptypes.shape({
                character: Proptypes.string,
            }),
        }).isRequired,
    };

    state = {
        character: {},
        loading: true,
    };

    async componentDidMount() {
        const { match } = this.props;

        const charName = decodeURIComponent(match.params.character);

        const character = await api.get(`character/?name=${charName}`);

        console.log(character);

        const data = {
            name: character.data.results[0].name,
            avatar_url: character.data.results[0].image,
            species: character.data.results[0].species,
            status: character.data.results[0].status,
            origin: character.data.results[0].origin.name,
            location: character.data.results[0].location.name,
        };
        this.setState({
            character: data,
            loading: false,
        });
    }

    render() {
        const { character, loading } = this.state;

        if (loading) {
            return <Loading>Carregando...</Loading>;
        }

        return (
            <Container loading={loading}>
                <img src="" alt="" />
                <Link href="/">Voltar aos personagens</Link>
                <CharList>
                    <Card>
                        <img src={character.avatar_url} alt={character.name} />
                        <h1>{character.name}</h1>
                        <h3>Status</h3>
                        <p>{character.status}</p>
                        <h3>Especie</h3>
                        <p>{character.species}</p>
                        <h3>Origem</h3>
                        <p>{character.origin}</p>
                        <h3>Localizacao</h3>
                        <p>{character.location}</p>
                    </Card>
                </CharList>
                <small>`</small>
            </Container>
        );
    }
}

export default Characters;
