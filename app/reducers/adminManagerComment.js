const initialState = {
    list: [],
    pageNum: 1,
    total: 0
}

export const actionTypes = {
    'GET_ALL_COMMENTS': 'GET_ALL_COMMENTS',
    'RESOLVE_GET_ALL_COMMENTS': 'RESOLVE_GET_ALL_COMMENTS',
    'DELETE_COMMENT': "DELETE_COMMENT",
    "AUDIT_COMMENT": "AUDIT_COMMENT"
}

export const actions = {
    get_all_comments: function(pageNum=1){
        return {
            type: actionTypes.GET_ALL_COMMENTS,
            pageNum: pageNum
        }
    },
    delete_comment: function(comment_id){
        return {
            type: actionTypes.DELETE_COMMENT,
            comment_id
        }
    },
    audit_comment: function(comment_id, audit_type){
        return {
            type: actionTypes.AUDIT_COMMENT,
            audit_type,
            comment_id
        }
    }
}

export function reducer(state = initialState, action){
    switch(action.type){
        case actionTypes.RESOLVE_GET_ALL_COMMENTS:
        console.log("RESOLVE_GET_ALL_COMMENTS")
        console.log(action.data)
            return {
                ...state,
                list: [...action.data.list],
                pageNum: action.data.pageNum,
                total: action.data.total
            }
        default:
            return state;
    }
}