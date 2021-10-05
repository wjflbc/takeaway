const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };
        case 'MENU_REQUESTED':
            return {
                ...state


            };
        case 'MENU_ERROR':
            return {
                ...state,
                error: true
            };

        case 'ITEM_ADD':
            const id = action.payload;
            const itemInd = state.items.findIndex(item => item.id === id);
            if (itemInd >= 0) {
                const itemInState = state.items.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    num: ++itemInState.num
                }
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ]
                }
            }


            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                num: 1

            };
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };

        case 'ITEM_DELETE':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            return {
                ...state,
                items:[
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex +1)
                ]
            };


        default:
            return state;
    }
}

export default reducer;