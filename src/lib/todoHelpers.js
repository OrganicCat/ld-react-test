export const addTodo = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random() * 10000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (list, updated) => list.map(todo => todo.id === updated.id ? updated : todo)