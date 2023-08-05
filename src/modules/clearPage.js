export default function clearPage(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}