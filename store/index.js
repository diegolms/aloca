//create a store
export const state = () => ({

    users: {},
    teams: {}

});

//getters

export const getters = {
    users(state){
        return state.users
    },

    teams(state){
        return state.teams
    }


}

//mutations
export const mutations = {
    SET_USERS(state, users){
        state.users = users
    },

    SET_TEAMS(state, teams){
        state.teams = teams
    }
}

//actions
export const actions = {
    setUsers({commit}, users){
        commit("SET_USERS", users);
    },

    setTeams({commit}, teams){
        commit("SET_TEAMS", teams);
    }
}

