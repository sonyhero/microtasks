import React, {ChangeEvent} from 'react';

type InputProps = {
    title: string
    setTitle: (title: string) => void
}
const Input = (props: InputProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.setTitle(e.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeHandler}/>
    );
};

export default Input;