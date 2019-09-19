import React from "react";
import { connect } from "react-redux";
import {
  getInputValueChangeAction,
  addItemAction
} from "../../store/createActions";
import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

const InputText = styled.input`
  border: none;
  border-bottom: 2px solid ${theme.color.lightGray};
  font-size: ${theme.font.size.xs};
  margin: 0 3rem;
  padding: 0.5rem 0 0.5rem;
  color: black;
`;

const InfoText = styled.p`
  color: ${theme.color.gray};
  position: absolute;
    padding-left: 2rem;
  bottom: 5px;
  font-size: ${theme.font.size.xxs};
  font-weight: ${theme.font.weight.light};
  margin: 0;
`;

const AddBtn = styled.button`
  padding: 0.7rem 0.5rem;
  background: ${theme.color.lightGray};
  border-radius: 3px;
  border: 2px solid ${theme.color.lightGray};
  cursor: pointer;
  transition: background-color 300ms;
  position: relative;
  z-index: 99;

  &:hover {
    background: ${theme.color.white};
  }
`;

const TodoAdd = props => {
  const { inputValue, inputValueChange, list, handleAddItem } = props;

  const handleAddToDo = () => {
    if (list.length > 10) {
      console.log("Maksymalna ilość zadań to 10");
    } else if (inputValue === "" || inputValue.length < 3) {
      console.log("Zbyt krótki tytuł");
    } else {
      handleAddItem(inputValue);
    }
  };

  return (
    <>
      <InputText
        placeholder="Wpisz zadanie"
        type="text"
        value={inputValue || ""}
        onChange={inputValueChange}
      />

      <AddBtn onClick={handleAddToDo}>Dodaj zadanie</AddBtn>

      <InfoText>{infoText}</InfoText>
    </>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list,
    loaded: state.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputValueChange(e) {
      const action = getInputValueChangeAction(e.target.value);
      dispatch(action);
    },
    handleAddItem() {
      const action = addItemAction();
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAdd);
