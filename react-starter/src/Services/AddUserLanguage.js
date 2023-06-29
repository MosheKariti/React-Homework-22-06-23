export function AddUserLanguage(event,props) {
    if (event.target.checked) {
        props.setLanguages([...props.userLanguages, event.target.value]);
    } else {
        props.setLanguages(props.userLanguages.filter(x => x !== event.target.value));
    }
}