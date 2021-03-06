import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
    display: flex;
    margin-top: 30px;
    flex-direction: row;
    input {
        flex: 1;
        border-radius: 4px;
        border: 1px solid ${(props) => (props.error ? '#e57373' : '#03bb85')};
        padding: 10px 15px;
        flex-direction: row;
        font-size: 16px;

        transition: border 0.5s ease-out;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs((props) => ({
    type: 'submit',
    disabled: props.loading,
}))`
    padding: 0 15px;
    border-radius: 4px;
    border: 1px solid #fff;
    background-color: #03bb85;
    color: #fff;
    margin-left: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${(props) =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
`;
export const RefreshButton = styled.button.attrs({
    type: 'reset',
})`
    padding: 0 15px;
    border-radius: 4px;
    border: 1px solid #fff;
    background-color: #03bb85;
    color: #fff;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const List = styled.ul`
    padding: 20px;
    margin-top: 15px;

    li {
        display: flex;

        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        font-size: 16px;
        color: #333;
        font-weight: bold;
        padding: 15px 0;

        & + li {
            border-top: 1px solid #d3d3d3;
        }
        a {
            text-decoration: none;
            font-size: 16px;
            color: #2f9331;

            &:hover {
                color: #008000;
                transition: 0.2s;
            }
        }
        span {
            font-size: 18px;
            /* cursor: pointer; */
        }
        img {
            height: 90px;
            width: 90px;

            border-radius: 4px;
        }
    }
`;
