import { AddUserLanguage } from "../Services/AddUserLanguage";

export function LanguagesToSelect(props) {
    const languages = require('../Data/languagesDB.json');
    return (
        <>
            <div className={'languages-div'}>
            {languages.map(x=>
                <>
                    <div className={'language-div'}>
                        <input className={'checkbox'} type={"checkbox"} value={x.name} onClick={()=> AddUserLanguage(event,props)}/>
                        <h6 className={'language-header'}>{x.name}</h6>
                        <img className={'flag'} src={x.flagSrc}/>
                    </div>
                </>
            )}
            </div>
        </>

    )
}