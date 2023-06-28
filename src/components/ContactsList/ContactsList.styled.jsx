import styled from 'styled-components';

export const ListWrapper = styled.div`
  overflow-y: scroll;
  width: 540px;
  height: 500px;
  padding: 0;
  border: 1px solid;
  border-color: ${p => p.theme.colors.btnBorderColor};
  border-radius: 5px;
  box-shadow: ${p => p.theme.shadows.secondShadow};

  /* Styling the scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.ScrollBarColor};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${p => p.theme.colors.ScrollBarHoverColor};
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const List = styled.ul`
  display: block;
  padding: 10px 10px 10px 18px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: ${p => p.theme.fonts.second};
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
`;

export const Item = styled.li`
  font-family: ${p => p.theme.fonts.second};
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
  box-shadow: ${p => p.theme.shadows.mainShadow};
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
  color: ${p => p.theme.colors.clearWhite};
  background-color: ${p =>
    p.edit
      ? p.theme.colors.btnEditColor
      : p.delete
      ? p.theme.colors.btnDeleteColor
      : 'initial'};
  box-shadow: ${p => p.theme.shadows.mainShadow};
  border-radius: 4px;
  border: none;
  outline: none;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p =>
      p.edit
        ? p.theme.colors.btnEditColor
        : p.delete
        ? p.theme.colors.btnDeleteHoverColor
        : 'initial'};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
