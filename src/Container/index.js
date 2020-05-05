import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    background-color: #fff;
    max-width: 850px;
    justify-content: center;
    align-items: center;
    margin: 80px auto;
    border-radius: 4px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
    h1 {
        font-size: 25px;
        flex-direction: row;
        align-items: center;
    }
    img {
        width: 50px;
        height: 50px;
    }
`;
export const Form = styled.form`
    display: flex;
    margin-top: 30px;
    flex-direction: row;
    input {
        flex: 1;
        border-radius: 4px;
        border: 1px solid #03bb85;
        padding: 10px 15px;
        flex-direction: row;
        font-size: 16px;

        transition: border 0.5s ease-out;
    }
`;
