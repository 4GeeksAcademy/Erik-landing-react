// components
import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx"
import Card from "./cards.jsx"
import Footer from "./footer.jsx"
import Spacer from "./spacer.jsx"
import Spacerh from "./spacerh.jsx"
import Clases from "./clases.jsx"

//monster img
import nargacuga from "../../img/nargacuga.jpg"
import diablos from "../../img/Diablos.jpg"
import fatalis from "../../img/Fatalis.jpg"
import rathalos from "../../img/Rathalos.jpg"
import tigrex from "../../img/Tigrex.jpg"

//class img
import greatsword from "../../img/Greatsword.jpg"
import longsword from "../../img/Longsword.jpg"
import bow from "../../img/Bow.jpg"
import hammer from "../../img/Hammer.jpg"
import axe from "../../img/Axe.jpg"



const monsters = [
    {
        image: fatalis,
        title: "Fatalis",
        description: "Fatalis has the appearance of a typical European dragon, with four legs and two large bat-like wings. It is covered in black scales with a certain purple luster."
    },
    {
        image: tigrex,
        title: "Tigrex",
        description: "The Tigrex is a quadruped wyvern with powerful wings turned into legs, equipped with large claws, it has a bright orange-yellow coloration with blue stripes."
    },

    {
        image: diablos,
        title: "Diablos",
        description: "It is a robust, large wyvern that is light brown in color and covered with a thick, hard shell. Its wings are more adapted to digging than flying, with strong blunt claws."
    },

    {
        image: nargacuga ,
        title: "Nargacuga",
        description: "Nargacuga appearance is reminiscent of a black panther, the Nargacuga is a quadruped wyvern with dark blue and gray fur, its wings function as legs and have hard sharped edges."
    },
    {
        image: rathalos,
        title: "Rathalos",
        description: "The Rathalos has the typical physiology of a wyvern, with large wings and a long tail. Its scales are red with black parts and a light belly, its wings have several claws."
    }

]

const hunters = [
    {
        image: hammer,
        title: "Hammer",
        description: "The Hammer (ハンマー Hanmā) is a weapon known from Monster Hunter that uses pure brute force. Firm and resistant, it does not stand out for its reach or mobility."
    },
    {
        image: longsword,
        title: "Long Sword",
        description: "The Long Sword (太刀 Tachi) is a melee slashing weapon introduced in Monster Hunter 2. The long sword is characterized by its fluid movements and the use of the spirit sword."
    },

    {
        image: bow,
        title: "Bow",
        description: "The Bow (弓 Yumi) is one of the most tactical weapons in the Monster Hunter Saga. Composed of a bow and a quiver, it is not the ideal weapon for novice hunters."
    },

    {
        image: greatsword ,
        title: "Great Sword",
        description: "The Greatsword (大剣 Daiken) is a melee slashing weapon introduced in Monster Hunter. This weapon is characterized by its great power, but also by its slowness."
    },
    {
        image: axe,
        title: "Charged Axe",
        description: "The Sword Ax (スラッシュアックス Slash Ax) is a melee slashing weapon introduced in Monster Hunter 3. As its name indicates, this weapon is capable of transmuting between two different modes."
    },


]





const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container" >
            <Jumbotron />
            </div>
            
            <Spacer />
           
            <div className="container d-flex py-3 justify-content-between">
                {
                monsters.map((item, index) => (
                    <Card image = {item.image} title = {item.title} description = {item.description} />
                ))
            }
            </div>

            <Spacerh />

            <div className="container d-flex py-3 justify-content-between">
                {
                hunters.map((item, index) => (
                    <Clases image = {item.image} title = {item.title} description = {item.description} />
                ))
            }
            </div>

            <Footer />
        </>
      
    )
}

export default Home;