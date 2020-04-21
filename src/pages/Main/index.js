import React, { Component } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../Container';
import api from '../../services/api';
import { Form, SubmitButton, List } from './styles';

class Main extends Component {
    state = {
        newChar: '',
        characters: [],
        loading: false,
    };

    componentDidMount() {
        const characters = localStorage.getItem('characters');

        if (characters) {
            this.setState({ characters: JSON.parse(characters) });
        }
    }

    componentDidUpdate(_, prevState) {
        const { characters } = this.state;

        if (prevState.characters !== characters) {
            localStorage.setItem('characters', JSON.stringify(characters));
        }
    }

    handleInput = (e) => {
        this.setState({ newChar: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true });

        const { newChar, characters } = this.state;

        const response = await api.get(`/character/?name=${newChar}`);

        const data = {
            name: response.data.results[0].name,
            avatar_url: response.data.results[0].image,
        };

        console.log(response.data);

        this.setState({
            characters: [...characters, data],
            newChar: '',
            loading: false,
        });
    };

    render() {
        const { newChar, characters, loading } = this.state;

        return (
            <Container>
                <h1>
                    <img
                        src="https://i.pinimg.com/564x/6e/1a/77/6e1a77a32f2a1fb8be1bb48f0bfe665e.jpg"
                        alt="RickMortyIcon"
                    />
                    Rick and Mortys API
                </h1>

                <Form onSubmit={this.handleSubmit}>
                    <input
                        value={newChar}
                        onChange={this.handleInput}
                        type="text"
                        placeholder="Digite o nome do personagem"
                    />

                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner size={16} color="#fff" />
                        ) : (
                            <FaPlus size={16} color="#fff" />
                        )}
                    </SubmitButton>
                </Form>
                <List>
                    {characters.map((character) => (
                        <li key={String(character.id)}>
                            <img
                                src={character.avatar_url}
                                alt={character.name}
                            />
                            <span>{character.name}</span>
                            <Link
                                to={`/character/${encodeURIComponent(
                                    character.name
                                )}`}
                            >
                                Detalhes
                            </Link>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}

export default Main;
