import journalApi from "../../../../api/journalApi";

export const loadEntries = async  ( {commit} ) => {
    const response = await journalApi.get('/entries.json')

    if(!response.data) {
        commit('setEntries', [])
        return
    }
    const entries = [];
    for( let id of Object.keys(response.data)) {
        entries.push({
            id,
            ...response.data[id]
        })
    }
    commit('setEntries', entries)
}

export const updateEntry = async  ( { commit }, entry  ) => {
    const {date, text, picture} = entry
    await journalApi.put(`/entries/${entry.id}.json`, {date, text, picture})
    commit('updateEntry', {...entry})
}

export const createEntry = async  ( { commit }, entry  ) => {
    const {date, text, picture} = entry
    const dataToSave = { date, text, picture }
    const { data } = await journalApi.post('/entries.json', dataToSave)
    dataToSave.id = data.name

    commit('addEntry', dataToSave)

    return data.name   
}

export const deleteEntry = async ({ commit }, id) => {
    await journalApi.delete(`/entries/${id}.json`)
    commit('removeEntry', id)
}