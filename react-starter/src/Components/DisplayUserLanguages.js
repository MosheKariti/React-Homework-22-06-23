export function DisplayUserLanguages({userLanguages}) {
    return (
        <>
            <div className={'user-languages-div'}>
            {userLanguages.length === 0 && <h3 className={'user-languages-header'}>No Languages Selected</h3>}
            {userLanguages.length === 1 && <h3 className={'user-languages-header'}>You Speak {userLanguages.length} Language</h3>}
            {userLanguages.length > 1 && <h3 className={'user-languages-header'}>You Speak {userLanguages.length} Languages</h3>}
            {userLanguages && (
                <>
                {userLanguages.map(x=><h6 className={'user-languages'}>{x}</h6>)}
               </>
            )}
            </div>
        </>
    )
}