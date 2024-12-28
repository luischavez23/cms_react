import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Contact, groupContact } from "../schemas/Contact";
import Select from "./Select";

type FormProps = {
  handleContact: (contact: Contact) => void;
};

const Forms = ({ handleContact }: FormProps) => {
  const methods = useForm<Contact>({
    resolver: zodResolver(Contact),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleContact)}>
        <Input name="name">Name</Input>
        <Input name="lastname">Last name</Input>
        <Input name="email">Email</Input>
        <Select
          name="groupContact"
          options={groupContact}
          defaultMessage="--Select an option--"
        />
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button typeButton="submit">Send</Button>
          <Button onClick={() => methods.reset()} variant="secondary">
            Clear
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Forms;
