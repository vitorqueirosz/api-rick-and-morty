import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 3px; */
    background-color: rgb(34, 34, 40);
    max-width: 500px;
    max-height: 500px;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    border-radius: 6px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
`;

export const Link = styled.a`
    margin-bottom: 10px;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #03bb40;
    /* color: #f15710; */

    &:hover {
        color: #fff;
        transition: 0.2s;
    }
`;

export const CharList = styled.article`
    img {
        width: 38%;
        height: auto;
        border-radius: 2px;

        display: flex;
        margin: 0 auto;
    }
    h1 {
        font-size: 18px;
        margin-top: 5px;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        color: #fff;
    }
    h3 {
        flex-direction: row;
        color: #fff;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
        font-size: 12px;
    }
    p {
        font-size: 12px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: #03bb40;
        margin-bottom: 5px;

        &:nth-child(2) {
            color: #000;
            font-size: 20px;
        }
    }
    span {
        font-size: 12px;
        display: inline-block;
        flex-direction: row;
        justify-content: center;
        color: #03bb40;
        margin-right: 20px;
        margin-left: 10px;
    }
`;
export const Card = styled.article`
    background-color: rgb(34, 34, 40);
    /* color:363b3f */
    max-width: 400px;
    height: 350px;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    border-radius: 6px;
    box-shadow: 0px 2px 6px 2px #03bb40;
    padding: 25px 20px;
    flex-direction: row;

    &:hover {
        box-shadow: 0 2px 8px 0 #03bb65;
    }
`;
export const Loading = styled.h1`
    font-size: 25px;
    color: #03bb40;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
`;
