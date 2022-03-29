import React, { useState } from "react";
import SubJumbotron from './SubJumbotron';
import CardList from './CardList';
import { useParams } from "react-router-dom";

function SubPage(props) {
    const { category } = useParams();

    function sortTshirt(category) {
        let newData;
        if (category === "new") newData = getNewTshirts();
        else newData = props.tshirts.filter(tshirt => tshirt.gender === category);
        return newData;
    }

    function getNewTshirts() {
        let totalCount = props.tshirts.length;
        const COUNT = 8;
        let newTshirts = props.tshirts.filter((tshirt, i) => (totalCount - i) <= (totalCount - COUNT));
        return newTshirts;
    }

    if (category === "woman") {
        return (
            <div>
                <SubJumbotron category = {category}></SubJumbotron>
                <CardList tshirts={sortTshirt(category)}></CardList>
            </div>
        )
    } else if (category === "man") {    
        return (
            <div>
                <SubJumbotron category = {category}></SubJumbotron>
                <CardList tshirts={sortTshirt(category)}></CardList>
            </div>
        )
    } else if (category === "new") {
        return (
            <div>
                <SubJumbotron category = {category}></SubJumbotron>
                <CardList tshirts={sortTshirt(category)}></CardList>
            </div>
        )
    } else {
        return (
            <div>
                <h1>없는 페이지입니다.</h1>
            </div>
        )
    }
}

export default SubPage;