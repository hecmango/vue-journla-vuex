import NoEntrySelected from "../views/NoEntrySelected.vue";
import EntryView from "../views/EntryView.vue";

export default {
    children: [
        {
            path: '',
            name:'no-entry',
            component: NoEntrySelected,
        },
        {
            path: ':id',
            name:'entry',
            component: EntryView,
            props: ( route ) => {
                return {
                    id: route.params.id
                }
            }
        },
    ]
}