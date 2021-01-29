export function setStorageItem(KEY, value) {
    const stringyItem = JSON.stringify(value);
    localStorage.setItem(KEY, stringyItem);
}

export function getStorageItem(KEY) {
    const stringyItem = localStorage.getItem(KEY);
    return JSON.parse(stringyItem);
}

export function removeStorageItem(KEY) {
    localStorage.removeItem(KEY);
}