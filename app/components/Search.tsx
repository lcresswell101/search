'use client'

import Input from "@/app/components/input/Input";
import {useForm, SubmitHandler} from "react-hook-form";
import Button from "@/app/components/button/Button";

type Inputs = {
    search: string,
}

const Search = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name={'search'}
                type='text'
                placeholder={"Search"}
                className={"p-3 text-black"}
                register={register}
            />
            
            <Button
                type={"submit"}
                text={"Search"}
            />
        </form>
    )
}

export default Search