let boardReducer = (state = {
    boards: [],
    boardLoading: false,
    boardError: null,
    boardSuccess: null,
    boardDelete: null,
    boardDeleteLoading: false,
    boardDeleteError: null,
    boardDeleteSuccess: null,
    boardUpdate: null,
    boardUpdateLoading: false,
    boardUpdateError: null,
    boardUpdateSuccess: null,
    boardCreate: null,
    boardCreateLoading: false,
    boardCreateError: null,
    boardCreateSuccess: null,

}, action) => {
    switch (action.type) {
        case 'CREATE_ITEM':
            return {
                ...state,
                boards: [...state.boards, action.payload]
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                boards: state.boards.filter(board => board.id !== action.payload.id)
            };
        case 'UPDATE_ITEM':
            return {
                ...state,
                boards: state.boards.map(board => {
                    if (board.id === action.payload.id) {
                        action.payload.isModify = true;
                        return action.payload;
                    }
                    return board;
                })
            };
        case 'UPDATE_ITEM_TEXT':
            return {
                ...state,
                boards: state.boards.map(board => {
                    if (board.id === action.payload.id) {

                        if (action.payload.updateKey === 'title') {
                            board.title = action.payload.text;
                        }

                        return board;
                    }
                    return board;
                })
            };
        case 'UPDATE_ITEM_SUCCESS':
            return {
                ...state,
                boards: state.boards.map(board => {
                    if (board.id === action.payload.id) {
                        action.payload.isModify = false;
                        return action.payload;
                    }
                    return board;
                })
            };
        case 'GET_ITEMS':
            return {
                ...state
            };
        case 'CREATE_ITEM_LOADING':
            return {
                ...state,
                boardLoading: true,
                boardError: null,
                boardSuccess: null,
            };
        case 'CREATE_ITEM_SUCCESS':
            return {
                ...state,
                boardLoading: false,
                boardSuccess: action.payload,
            };
        case 'CREATE_ITEM_ERROR':
            return {
                ...state,
                boardLoading: false,
                boardError: action.payload,
            };
        default:
            return state;
    }
}

export default boardReducer;