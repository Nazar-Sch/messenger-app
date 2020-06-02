export const contactsInfo = state => state.rootReducer.contacts;

export const id = state => state.rootReducer.selectedId;

export const dialog = state => state.rootReducer.selectedDialog;
export const messages = state => state.rootReducer.selectedDialog.map(item => item.messagesList);
// console.log(messages());
