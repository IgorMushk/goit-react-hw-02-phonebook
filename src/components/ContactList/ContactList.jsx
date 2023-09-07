export const ContactList = ({contacts}) => {
    console.log('contacts :>>', contacts)
 return  (
<ul>
{contacts.map(({id, name, number}) => (<li key={id}>{name}: {number} </li>))}
</ul>
)};
