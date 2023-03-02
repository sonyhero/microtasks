import '../App.css'

function AppButton() {
    const onClickHandler = (name:string)=>{
        return(
            console.log(`Hello, I am ${name}!`)
        )
    }

    const foo1 = () => {
        console.log(100200)
    }

    const foo2 = (num: number) => {
        console.log(num);
    }

    return (
        <div className='App'>
            {/*<button onClick={(event)=>{console.log('Hello')}}>MyYouTubeChanel-1</button>*/}
            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>
            <button onClick={()=>onClickHandler('Vasya')}>MyYouTubeChanel-1</button>
            <button onClick={()=>onClickHandler('Anton')}>MyYouTubeChanel-2</button>
        </div>
    )
}

export default AppButton