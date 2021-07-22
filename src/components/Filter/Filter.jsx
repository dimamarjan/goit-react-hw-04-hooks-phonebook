import { LabelContacts, LabelContactsText, InputContacts, AccentText } from "components/Filter/Filter.style"

export function Filter ({onHandleChange}) {    
    return (
        <div>
            <LabelContacts>
                <LabelContactsText>Find contacts by <AccentText>name</AccentText> or <AccentText>number</AccentText></LabelContactsText>
                <InputContacts
                    name="filter"
                    onChange={onHandleChange} />
            </LabelContacts>
        </div>
    );
}
