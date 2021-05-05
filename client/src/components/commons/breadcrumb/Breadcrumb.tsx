import './Breadcrumb.scss';
import { useHistory } from 'react-router-dom';

export const Breadcrumb = (props: {categories: string[]}) => {

    const history = useHistory();
    const categoriesLength = props.categories.length;


    const handleClick = (category: string) => {
        history.push(`/items?search=${category}`);
    }

    return (
        <span className="breadcrumb">
            {props.categories.map((cat, index) => <span onClick={() => handleClick(cat)} className={index === categoriesLength -1 ? 'bold-category' : '' }>{ cat + (index === categoriesLength -1 ? '': ' > ') }</span>)}
        </span>
    )
}