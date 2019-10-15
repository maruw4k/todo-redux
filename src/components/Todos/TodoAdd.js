import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import {
  getInputValueChangeAction,
  addItemAction,
  getInfoTextAction
} from "../../store/actions/createActions";
import AddBtn from "../UI/MainBtn";
import InputText from "../UI/Input";
import InfoText from "../UI/InfoText";

const TodoAdd = props => {
  const {
    inputValue,
    list,
    infoText,
    getInputValueChangeAction,
    addItemAction,
    getInfoTextAction
  } = props;

  const handleAddToDo = () => {
    if (list.length >= 10) {
      const infoText = "Maksymalna ilość zadań to 10";
      getInfoTextAction(infoText);
    } else if (inputValue === undefined || inputValue === "") {
      const infoText = "Proszę wprowadzić zadanie";
      getInfoTextAction(infoText);
    } else if (inputValue.length < 3) {
      const infoText = "Wpisany tekst jest zbyt krótki";
      getInfoTextAction(infoText);
    } else {
      addItemAction(inputValue);
      getInfoTextAction(false);
    }
  };

  return (
    <>
      <InputText
        placeholder="Wpisz zadanie"
        type="text"
        value={inputValue || ""}
        onChange={getInputValueChangeAction}
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
    infoText: state.infoText
  };
};

const mapDispatchToProps = dispatch => ({
  getInputValueChangeAction: e =>
    dispatch(getInputValueChangeAction(e.target.value)),
  addItemAction: id => dispatch(addItemAction(id)),
  getInfoTextAction: infoText => dispatch(getInfoTextAction(infoText))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAdd);

TodoAdd.propTypes = {
  addItemAction: PropTypes.func,
  getInfoTextAction: PropTypes.func,
  getInputValueChangeAction: PropTypes.func,
  infoText: PropTypes.string,
  inputValue: PropTypes.string,
  list: PropTypes.array
};
