import styled  from 'styled-components'


export const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    gap: 25px;
    max-width: 36rem;
    margin: 0 auto;
    padding: 20px 20px 50px;

`;
export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;

`;
export const TodoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 95px;
`;
export const Subtitle = styled.h2`
    color: #BF4F74;
`;
export const Form = styled.form`
    width: 100%;
`;
export const TextFieldStyles = {
    width: '100%' 
}