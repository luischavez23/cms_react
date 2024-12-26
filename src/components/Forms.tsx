import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
type Props = {};

const Forms = ({}: Props) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="name">Name</Input>
        <Input name="lastname">Last name</Input>
        <Input name="email">Email</Input>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button>Send</Button>
          <Button variant="secondary">Clear</Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Forms;
