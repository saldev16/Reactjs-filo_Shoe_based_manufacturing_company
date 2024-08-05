export const loadStateFn = (params) => localStorage.getItem(params);

export const loadStateFnAndRemove = (state, clearState) => {
    try {
        const stateStr = localStorage.getItem(state);
        if (clearState) removeStateFn(state);
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

export const saveStateFn = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const clearStateFn = () => localStorage.clear();

export const removeStateFn = (key) => localStorage.removeItem(key);
