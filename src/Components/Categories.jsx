import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
    {name:'food', text:'부산 맛집 정보 서비스'},
    {name:'walking', text:'부산 도보여행 정보 서비스'}
]

const CategoriesBlock = styled.div`
    display : flex;
    padding : 1rem;
    width : 768px;
    margin : 0 auto;
    @media screen and (max-width : 768px){
        width : 100%;
        overflow-x : auto;
    }
`
// const Category = styled.div`
//     font-size : 1.2rem;
//     cursor : pointer;
//     width-space : pre;
//     text-decoration : none;
//     color : inherit;
//     padding-bottom : 0.2rem;

//     &.hover{
//         color : #495057;
//     }

//     ${(props) => props.active && css`
//         font-weight : 600px;
//         border-bottom :2px solid #22b8cf;
//         color : #22b8cf;

//         &:hover{
//             color : #3bc9db;
//         }    
//     `}

//     }

//     & + & {
//         margin-left : 1rem;
//     }

// `

const Category = styled(NavLink)`
    font-size : 1.2rem;
    cursor : pointer;
    width-space : pre;
    text-decoration : none;
    color : inherit;
    padding-bottom : 0.2rem;

    &.hover{
        color : #495057;
    }

    &.active {
        font-weight:600;
        border-bottom : 2px solid #22b8cf;
        color : #22b8cf;
        &:hover{
            color : #22b8cf;
        }
    }

    & + & {

    }
`;
// const Categories = ({onSelect, category}) => {
//     return (
//        <CategoriesBlock>
//         {categories.map((c) => (
//             <Category key={c.name} active={category === c.name} onClick={() => onSelect(c.name)}>{c.text}</Category>
//         ))}
//        </CategoriesBlock>
//     );
// };

const Categories = () => {
    return (
       <CategoriesBlock>
        {categories.map((c) => (
            <Category key={c.name} className={({isActive}) => (isActive? 'active':undefined)} to={c.name === 'food' ? '/' : `/${c.name}`}>{c.text}</Category>
        ))}
       </CategoriesBlock>
    );
};

export default Categories;