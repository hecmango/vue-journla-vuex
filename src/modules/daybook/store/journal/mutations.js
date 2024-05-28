
import Vue from 'vue';
export const setEntries = ( state, entries ) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = (  state , entryUpdated ) => {
    const index = state.entries.findIndex( i => i.id == entryUpdated.id)
    // state.entries[index] = entryUpdated
    Vue.set(state.entries, index, entryUpdated);
    
}

export const addEntry = ( state, entry ) => {
    state.entries = [ entry, ...state.entries ]
}

export const removeEntry = (state, id) => {
    state.entries = state.entries.filter(i => i.id !== id)
}