export default function (state: any, { type, payload }: any) {
  switch (type) {
    case 'add':
      return [...state, { id: `${Date.now()}`, title: payload, completed: false }];
    case 'toggle':
      return state.map(({ completed, ...todo }: any) => ({
        ...todo,
        completed: payload === todo.id ? !completed : completed,
      }));
    case 'remove':
      return state.filter((todo: any) => payload !== todo.id);
    default:
      return state;
  }
}
