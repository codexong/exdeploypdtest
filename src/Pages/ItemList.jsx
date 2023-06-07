import React , {useState, useEffect}from 'react';
import styled from 'styled-components';
import PdItem from '../Pages/PdItem';
import axios from 'axios';


const ItemListBlock = styled.div`
    box-sizing : border-box;
    padding-bottom : 3rem;
    width : 768px;
    margin : 0 auto;
    margin-top : 2rem;
    @media screen and (max-width : 768px){
        width : 100%;
        padding-left : 1rem;
        padding-right : 1rem;
    }
`

const ItemList = ({category}) => {

    const [articles, setArticles] = useState(null)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchDate = async () => {
            setLoading(true);
            try{
                 const query = category === 'food'?'food':`${category}`;

                 var response;

                 switch(query){
                    case "food" : 
                    response = await axios.get('https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=dw13O1bisWHxtxSYLcTJ%2FRibQvxPCzAWvEyjdrGKbDm3bopoDo%2BdazvXqnMI5BGwLv0WrICm6oXohW2wd1o92A%3D%3D&resultType=json')
                    console.log(response.data.getFoodKr.item)
                    setArticles(response.data.getFoodKr.item)
                    break;

                    case "walking" :
                    response = await axios.get('https://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=dw13O1bisWHxtxSYLcTJ%2FRibQvxPCzAWvEyjdrGKbDm3bopoDo%2BdazvXqnMI5BGwLv0WrICm6oXohW2wd1o92A%3D%3D&resultType=json')
                    console.log(response.data.getWalkingKr.item)
                    setArticles(response.data.getWalkingKr.item)
                    break;
                    default:alert("카테고리 선택") 
                 }
                 
            }catch(e){
                console.log(e)
            }
            setLoading(false)
        }
        fetchDate()
    },[category])

    if(loading){
        return<ItemListBlock>대기중</ItemListBlock>
    }

    if(!articles){
        console.log('응답이 없음')
        return null
    }

    return (
        <ItemListBlock>
            {articles.map((article) => (
                <PdItem key={article.MAIN_TITLE} article={article}/>
            ))}
        </ItemListBlock>
    );
};

export default ItemList;