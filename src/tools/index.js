export default function pickRandomFromArray(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
