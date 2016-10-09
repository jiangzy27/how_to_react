export const ADD_TODO = 'ADD_TODO';//增加
export const COMPLETE_TODO = 'COMPLETE_TODO';//完成
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';//过滤
//三种切换条状态
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};


/*
 * action 创建函数
 */

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function completeTodo(index) {
    return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}