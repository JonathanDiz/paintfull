import React from "react";
import Layout from "../theme/Layout";
import Navigation from "../components/Navigation";
import Canvas from "../components/Canvas";

const Home: React.FC = () => {
    return (
        <Layout>
            <Navigation />
            <Canvas />
        </Layout>
    );
};

export default Home;
