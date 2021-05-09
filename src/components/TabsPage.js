import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import "bootstrap/dist/css/bootstrap.min.css";
import './TabsPage.css';

class TabsPage extends Component {
    constructor() {
        super();        
        this.state = {
            data: [
                {
                title: "Index",
                details: [
                    { info: "'Far Out' - facts about science and space!"},
                    { info: "'That's Life - Disturbing facts about food and everything else..."},
                    { info: "'How Adorable' - Animal facts that will definitely put a smile on your face."}
                ],
                alert: ""
                },
                {
                title: "Far Out",
                details: [
                    { info: "If you open your eyes in a pitch-black room, the color you’ll see is called 'eigengrau'" },
                    { info: "There may be no sound in space, but it does have a distinct smell: a bouquet of diesel fumes, gunpowder, and barbecue... the aroma produced by dying stars."},
                    { info: "The light emitted by 200,000 galaxies makes our universe a shade of beige. Scientists at Johns Hopkins University christened the color “cosmic latte."}
                    ],
                alert: "INCOMING!!! Astronomically Weird Facts!"
                },
                {
                title: "That's Life",
                details: [
                    { info: "Jelly beans are so shiny because they're coated with shellac, which is made from insect poop."},
                    { info: "The FDA allows an average of one rodent hair per 100 grams of peanut butter manufactured."},
                    { info: "If you've ever gotten red eyes after swimming, it's not from chlorine, it's the result of chemicals mixing with urine."}
                ],
                alert: "READER BEWARE! THIS MIGHT RUIN YOUR DAY"
                },
                {
                title: "That's Adorable",
                details: [
                    { info: "Sea otters hold hands when they sleep to keep from drifting apart."},
                    { info: "Squirrels plant thousands of new trees each year by merely forgetting where they put their acorns."},
                    { info: "Long-time bird watcher and nature writer Candace Savage has observed that crows are so intelligent they can play pranks on each other."}
                ],
                alert: "Definitely read these if the Gross Facts ruined your day!"
                }
            ]
        }
    }
    
    render() {

        return (
            <div className="backGround d-flex justify-content-center align-items-center m-auto" style={{width: '60rem', height: '55rem'}}>
                <Tabs onSelect = { (index, title) => alert(this.state.data[index].alert)} style={{height: '35rem', width: '45rem', backgroundColor: 'black', border: '2px solid #000'}}>
                {
                    this.state.data.map((item) =>
                        <Tab label={item.title} >
                        <ul>
                            {item.details.map((sub) =>
                            <li className="m-5" style={{color: '#fff'}}>
                                {sub.info}
                            </li>
                            )}
                        </ul>
                        </Tab>
                    )
                }
                </Tabs>
            </div>
        )  
    } 
}


export default TabsPage;