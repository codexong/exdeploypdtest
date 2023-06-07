import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../Components/Categories';
import ItemList from '../Pages/ItemList';

const ItemPage = ({match}) => {

    const params = useParams();
    const category = params.category || 'food'; //디폴드 -> food

    return (
        <div>
            <Categories></Categories>
            <ItemList category={category}></ItemList>
        </div>
    );
};

export default ItemPage;