
type NewButtonType = {
    name: string
    callback:()=>void
}

export const NewButton=(props: NewButtonType)=>{

    const onClickHandler=()=>{
        props.callback()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}