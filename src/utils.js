export function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString();
}