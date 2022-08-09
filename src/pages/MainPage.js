import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from "react-bootstrap";
import {useDispatch, useSelector, useStore} from "react-redux";
import {useEffect, useState} from "react";
import CustomInput from "../components/CustomInput";


function MainPage() {
    const dispatch = useDispatch();
    let store = useStore();
    let boards = useSelector(state => {
        return state.rootReducer.boardReducer.boards;
    });
    let [text, setText] = useState("");
    let [boardsHtml, setBoardsHtml] = useState([]);

    const fetchBoards = () => {
        dispatch({type: 'GET_ITEMS'});

        let tmpHtml = [];

        for (let i = 0; i < boards.length; i++) {
            let board = boards[i];
            if (board.isModify) {
                tmpHtml.push(
                    <tr key={board.id}>
                        <th scope="row">{board.id}</th>
                        <td><CustomInput
                                id={board.id}
                                value={board.title}
                                updateKey={"title"}/>
                        </td>
                        <td><Button onClick={() => {
                            handleUpdateClick(board)
                        }} className="btn-info">수정</Button></td>
                        <td><Button onClick={() => {
                            handleDeleteClick(board.id)
                        }} className="btn-danger">삭제</Button></td>
                    </tr>
                );
            } else {
                tmpHtml.push(
                    <tr key={board.id}>
                        <th scope="row">{board.id}</th>
                        <td>{board.title}</td>
                        <td><Button onClick={() => {
                            handleUpdateClick(board)
                        }} className="btn-info">수정</Button></td>
                        <td><Button onClick={() => {
                            handleDeleteClick(board.id)
                        }} className="btn-danger">삭제</Button></td>
                    </tr>
                );
            }
        }
        setBoardsHtml(tmpHtml);
    }

    const handleClick = () => {
        dispatch({
            type: 'CREATE_ITEM',
            payload: {
                id: boards.length + 1,
                title: 'New Board'
            }
        });
    }

    const handleDeleteClick = (id) => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: {
                id: id
            }
        });
    }

    const handleUpdateClick = (board) => {
        if (board.isModify) {
            dispatch({
                type: 'UPDATE_ITEM_SUCCESS',
                payload: {
                    id: board.id,
                    title: board.title,
                }
            });
        }
        else {
            dispatch({
                type: 'UPDATE_ITEM',
                payload: {
                    id: board.id,
                    title: board.title,
                }
            });
        }

    }

    useEffect(fetchBoards, [boards]);


    return (
        <div>
            <table style={{ marginTop: "20px", marginBottom: "20px" }} className="table">
                <caption>Optional table caption.</caption>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>수정</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                {boardsHtml}
                </tbody>
            </table>
            <div style={{textAlign:"right"}}>
                <Button onClick={handleClick} className={"btn-primary"}>Create</Button>
            </div>
        </div>
    );
}

export default MainPage;
