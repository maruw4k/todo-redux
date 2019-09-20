import React from "react";
import { connect } from "react-redux";
import {
  getInputValueChangeAction,
  addItemAction,
  getInfoTextAction
} from "../../store/actions/createActions";
import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

const InputText = styled.input`
  border: none;
  border-bottom: 2px solid ${theme.color.lightGray};
  font-size: ${theme.font.size.xs};
  margin: 0 2rem;
  padding: 0.5rem 0 0.5rem;
  color: black;
`;

const InfoText = styled.p`
  color: ${theme.color.gray};
  position: absolute;
  padding-left: 3rem;
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
  const {
    inputValue,
    inputValueChange,
    list,
    infoText,
    handleAddItem,
    infoTextChange
  } = props;

  const handleAddToDo = () => {
    if (list.length >= 10) {
      const infoText = "Maksymalna ilość zadań to 10";
      infoTextChange(infoText);
    } else if (inputValue === undefined || inputValue === "") {
      const infoText = "Proszę wprowadzić zadanie";
      infoTextChange(infoText);
    } else if (inputValue.length < 3) {
      const infoText = "Wpisany tekst jest zbyt krótki";
      infoTextChange(infoText);
    } else {
      handleAddItem(inputValue);
      infoTextChange(false);
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
    loaded: state.loaded,
    infoText: state.infoText
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
    },
    infoTextChange(infoText) {
      const action = getInfoTextAction(infoText);
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAdd);
