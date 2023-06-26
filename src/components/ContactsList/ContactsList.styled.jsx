import styled from 'styled-components';

export const ListWrapper = styled.div`
  overflow-y: scroll;
  width: 540px;

  height: 500px;
  padding: 0;
  border: 1px solid;
  border-color: ${props => props.theme.colors.btnBorderColor};
  border-radius: 5px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.07);

  /* Styling the scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
  }
`;

export const List = styled.ul`
  display: block;
  padding: 10px;
`;

export const Item = styled.li`
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  height: 45px;
  border-radius: 6px;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  font-family: 'Poppins';
  font-weight: 400px;
  font-size: 16px;
  display: inline-block;
  width: 60px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: ${props =>
    props.edit ? 'orange' : props.delete ? '#de0000' : 'initial'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  border: none;
  outline: none;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props =>
      props.edit ? '#FF9966' : props.delete ? '#F44336' : 'initial'};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
