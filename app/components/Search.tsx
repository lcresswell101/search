'use client'

import Input from "@/app/components/input/Input";
import {FieldValues, SubmitHandler} from "react-hook-form";
import Button from "@/app/components/button/Button";
import Form from "@/app/components/form/Form";

type Inputs = {
    search: string,
}

const Search = () => {
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <Form<Inputs> onSubmit={onSubmit}>
            <Input
                name={'search'}
                type='text'
                placeholder={"Search"}
                className={"p-3 text-black"}
                rules={{
                    required: true,
                }}
            />

            <Button
                type={"submit"}
                text={"Search"}
            />
        </Form>
    )
}

export default Search