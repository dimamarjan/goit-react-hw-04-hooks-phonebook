import { ContactListSection, ContactListItem, ContactItemText, DelContactButton } from 'components/ContactList/ContactList.style'

export function ContactList({onDelete,filtredDataArr}) {
    return (
        <div>
            <ContactListSection>
                {filtredDataArr.map((contactItem) => (
                    <ContactListItem key={contactItem.id}>
                        <ContactItemText>{contactItem.name}: {contactItem.number}</ContactItemText>
                        <DelContactButton
                            value={contactItem.id}
                            onClick={onDelete}>
                            Delete</DelContactButton>
                    </ContactListItem>
                ))}
            </ContactListSection>
        </div>
    );
};

