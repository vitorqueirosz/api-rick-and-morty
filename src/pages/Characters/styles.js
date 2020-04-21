import styled from 'styled-components';

export const Container = styled.div`
    padding: 3px;
    background-color: #363b3f;
    max-width: 650px;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    border-radius: 6px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);

    small {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Link = styled.a`
    margin-bottom: 30px;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #f15710;
`;

export const CharList = styled.article`
    img {
        width: 300px;
        height: 300px;
        border-radius: 15px;

        display: flex;
        margin: auto;
    }
    h1 {
        font-size: 25px;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        color: #fff;
    }
    h3 {
        flex-direction: row;
        color: #d3d3d3;
        display: flex;
        justify-content: center;
        margin-bottom: 7px;
    }
    p {
        font-size: 16px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: #f15710;
        margin-bottom: 7px;
    }
    span {
        font-size: 12px;
        display: inline-block;
        flex-direction: row;
        justify-content: center;
        color: #f15710;
        margin-right: 20px;
        margin-left: 10px;
    }
`;
export const Card = styled.article`
    background-color: #363b3f;
    max-width: 400px;
    justify-content: center;
    align-items: center;
    margin: 80px auto;
    border-radius: 6px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 8, 0.8);
    padding: 25px 20px;
    flex-direction: row;
`;
