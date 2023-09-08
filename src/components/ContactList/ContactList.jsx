export const ContactList = ({contacts, onDeleteContact}) => {
    console.log('contacts :>>', contacts)
 return  (
<ul>
{contacts.map(({id, name, number}) => (
<li key={id}>
    <p>{name}: {number} </p>
    <button onClick={()=>onDeleteContact(id)}>Delite</button> </li>
    ))}
</ul>
)};
