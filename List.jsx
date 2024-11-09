import PropTypes from 'prop-types'
function List(props){

    const category = props.category;
    const itemList = props.items;
    const listitems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>)


    return(<>
        <h3 className='category'>{category}</h3> 
        <ol className='items'>{listitems}</ol>
        </>);

}

List.propTypes = {
    items: PropTypes.array,
    category: PropTypes.string
}

List.defaultProps = {
    
}

export default List