import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

function CustomInput(props) {
    const [text, setText] = useState(props.value);
    const dispatch = useDispatch();

    let changeText = (e) => {
        setText(e.target.value);
        dispatch({
            type: 'UPDATE_ITEM_TEXT',
            payload: {
                id: props.id,
                text: e.target.value,
                updateKey: props.updateKey
            }
        });
    }

    return (
        <input onChange={(e) => {changeText(e);}} type="text" value={text.toString()} />
    );
}

export default CustomInput;
