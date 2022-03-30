import React from "react";
import CardList from "./CardList";
import Jumbotron from "./MainJumbotron";
import SubTitle from "./SubTitle";
import Sale from "./Sale";
import MainTitle from "./MainTitle";

const Home = ({getNewTshirts}) => {

    return (
        <>
            <MainTitle title={"T shop"} subTitle={"There’s One for Everyone"}/>
            <Jumbotron />
            <SubTitle title={"New Drops"} />
            <CardList tshirts={getNewTshirts()} />
            <Sale />
        </>
    )
}

export default Home;