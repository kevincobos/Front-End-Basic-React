const dataBeingUse = [
    {
        id:"1",
        title:"Milk",
        price:"50",
    }, 
    {
        id:"2",
        title:"Orange",
        price:"1.50",
    },
    {
        id:"3",
        title:"Apple",
        price:"2.50",
    },  
];
function ListUse() {
    const listItem = dataBeingUse.map(newValues => {
        const itemText = `${newValues.title} - ${newValues.price}`
        return <li>{itemText} </li>
    });
    return (
        <div>
            <ul> {listItem} </ul>
        </div>
    );
}

export default ListUse;