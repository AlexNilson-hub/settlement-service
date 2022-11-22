import { useForm, FormProvider} from 'react-hook-form'


interface FormInputProps {
    name: string
    label: string
}


const FormInputText = ({}: FormInputProps) => {
    const methods = useForm()
    const onSubmit = data => console.log(data);
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>

                <input type="submit" />
            </form>

        </FormProvider>
    )
}
export default FormInputText;