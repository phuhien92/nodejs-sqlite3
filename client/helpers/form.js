import styled, {css} from 'styled-components';
import { fadeIn } from './animations';

export const Form = styled.form`
    position: relative;
    flex-basis: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    animation: ${fadeIn} 0.8s ease-out;
    width: 100%;
    margin-top: 20px;
`;

export const FormGroup = styled.div`
    position: relative;
    margin-bottom: 40px;
`;

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 700;

    > .reddot {
        color: red;
    }
`;

export const FormSubLabel = styled.div`
    color: #777;
    font-size: 12px;
`;