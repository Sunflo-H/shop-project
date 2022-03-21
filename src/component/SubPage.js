import { useState } from "react";
import SubJumbotron from './SubJumbotron';
import Card from './CardList';
import { useParams, useHistory } from "react-router-dom";

function SubPage(props) {
    const {shopName} = useParams();
    const history = useHistory();
    console.log(props.tshirts);
    
    function sortByGender(text) {
        let newTshirts = props.tshirts.filter(tshirt => {
            console.log(tshirt);
            return tshirt.gender === text
        });
        console.log(newTshirts);
        return newTshirts;
    }

    if(shopName === "woman") {
        let data = sortByGender(shopName);
        return(
            <div>
                <h1>이 서브페이지에는 여자옷 페이지가 뜬다</h1>
                <SubJumbotron></SubJumbotron>
                <Card tshirt={data}></Card>
            </div>
        )
    } else if (shopName === "man") {
        let data = sortByGender(shopName);
        return(
            <div>
                <h1>이 서브페이지에는 남자옷 페이지가 뜬다</h1>
                <SubJumbotron></SubJumbotron>
                <Card tshirt={data}></Card>
            </div>
        )
    } else if (shopName === "new") {
        let data = sortByGender(shopName);
        return(
            <div>
                <h1>이 서브페이지에는 신상품 페이지가 뜬다</h1>
                <SubJumbotron></SubJumbotron>
                <Card tshirt={data}></Card>
            </div>
        )
    } else {
        return(
            <div>
                <h1>없는 페이지입니다.</h1>
            </div>
        )
    }
    // return (
    //     <div>
    //         <SubJumbotron></SubJumbotron>
    //         {/* <CardList></CardList> */}
    //     </div>
    // )
}

export default SubPage;