import journalApi from "../../../../api/journalApi";

export const loadEntries = async  ( {commit} ) => {
    const response = await journalApi.get('/entries.json')
    const entries = [];
    for( let id of Object.keys(response.data)) {
        entries.push({
            id,
            ...response.data[id]
        })
    }
    commit('setEntries', entries)
}

export const updateEntry = async  ( /* {commit}*/  ) => {

}

export const createEntry = async  ( /* {commit}*/  ) => {

}