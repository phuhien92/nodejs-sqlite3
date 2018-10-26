import styled from 'styled-components';

export const FormGroup = styled.div`
    position: relative;
`;

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`;

export const FormControlInput = styled.input`
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
`;

export const FormCaption = styled.div`
    padding: 10px 0;
    font-size: 16px;
`;

/* Expandable collection */
export const ExpandableBlock = styled.div`
    border: solid 1px #666a73;
    box-shadow: inset 0 0 0 1px #666a73;
    width: 100%;
    margin-bottom: 10px;
`;

export const ExpandableHeader = styled.div`
    border-bottom: solid 1px #dadada;
    min-height: 70px;
    padding: 8px 20px;
    font-size: 16px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
`;

export const ExpandableTitle = styled.h1`
    font-size: 16px;
    color: #000;
    margin: 10px 0 0 0;
`;

export const ExpandableSubtitle = styled.h5`
    font-size: 14px;
    color: #878787;
    font-weight: 500;
    margin: 5px 0 10px 0;
`;

export const ExpandableContent = styled.div`
    padding: 30px 52px;`
;

export const ExpandButtonLink = styled.button`
    background: none;
    color: #000;
    border: none;
    box-shadow: none;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 14px;
    cursor: pointer;
`;