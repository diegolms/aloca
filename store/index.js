//create a store
export const state = () => ({

    users: {}

});

//getters

export const getters = {
    users(state){
        return state.users
    }
}

//mutations
export const mutations = {
    SET_USERS(state, users){
        state.users = users
    }
}

//actions
export const actions = {
    setUsers({commit}, users){
        commit("SET_USERS", users);
    }
}

