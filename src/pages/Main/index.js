import React, { Component } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container } from '../../Container';
import api from '../../services/api';
import { Form, SubmitButton, List, RefreshButton } from './styles';

class Main extends Component {
    state = {
        newChar: '',
        characters: [],
        loading: false,
        error: null,
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
        this.setState({ newChar: e.target.value, error: null });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true, error: false });

        const { newChar, characters } = this.state;
        try {
            if (newChar === '') throw new Error('Digite um personagem');

            const hasChar = characters.find((c) => c.data === newChar);

            if (hasChar === newChar) throw new Error('Personagem duplicado!');

            const response = await api.get(`/character/?name=${newChar}`);

            const data = response.data.results.map((value) => ({
                name: value.name,
                avatar_url: value.image,
            }));

            console.log(data);

            const unShiftChar = characters.unshift(...data);
            console.log(unShiftChar);

            this.setState({
                characters: [...characters],
                newChar: '',
                loading: false,
            });
        } catch (error) {
            this.setState({ error: true });
        } finally {
            this.setState({ loading: false });
        }
    };

    handleReset = () => {
        this.setState({ characters: [], newChar: '', error: false });
    };

    render() {
        const { newChar, characters, loading, error } = this.state;

        return (
            <Container>
                <h1>
                    <img
                        src="https://i.pinimg.com/564x/6e/1a/77/6e1a77a32f2a1fb8be1bb48f0bfe665e.jpg"
                        alt="RickMortyIcon"
                    />
                    Rick and Mortys API
                </h1>

                <Form
                    onSubmit={this.handleSubmit}
                    onReset={this.handleReset}
                    error={error}
                >
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
                    <RefreshButton>
                        <MdRefresh size={20} color="#fff" />
                    </RefreshButton>
                </Form>
                <List>
                    {characters.map((character) => (
                        <li key={String(character.id)}>
                            <Link
                                to={`/character/${encodeURIComponent(
                                    character.name
                                )}`}
                            >
                                <img
                                    src={character.avatar_url}
                                    alt={character.name}
                                />
                            </Link>
                            <span
                                href={`/character/${encodeURIComponent(
                                    character.name
                                )}`}
                            >
                                {character.name}
                            </span>
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
