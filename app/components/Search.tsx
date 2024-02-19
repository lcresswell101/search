'use client'

import Input from "@/app/components/input/Input";
import {SubmitHandler} from "react-hook-form";
import Button from "@/app/components/button/Button";
import Form from "@/app/components/form/Form";

type Inputs = {
    search: string,
}

const Search = () => {
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <div className="container flex justify-center mt-32">
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
                    className="bg-blue-500 text-white"
                />
            </Form>
        </div>
    )
}

export default Search