import '../App.css'
import {NewButton} from "../components/NewButton";

function AppNewButton() {
    const Button1Foo=(subscriber:string, age:number)=>{
        console.log(subscriber, age)
    }

    const Button2Foo=(subscriber:string)=>{
        console.log(subscriber)
    }

    const StupidButton = ()=> {
        console.log('I am a stupid button!')
    }

    return (
        <div className='App'>
            {/*<button>MyYouTubeChanel-1</button>
            <button>MyYouTubeChanel-2</button>*/}
            <NewButton name={'MyYouTubeChanel-1'} callback={()=>Button1Foo('Anton', 31)}/>
            <NewButton name={'MyYouTubeChanel-2'} callback={()=>Button2Foo('Ivan')}/>
            <NewButton name={'Stupid button'} callback={StupidButton}/>
        </div>
    )
}

export default AppNewButton