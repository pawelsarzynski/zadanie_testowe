import React, { Component } from 'react';
import './SkiCams.css';

class SkiCam extends Component {
    constructor() {
        super();
        this.state = {
            videos: [],
        }
    }
    
    componentDidMount() {
        fetch('https://makevoid-skicams.p.mashape.com/cams.json', {
            method: 'GET',
            headers: {'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'},
            mode: 'cors',
            cache: 'default'
        }).then(results => results.json())
        .then(arr => Object.values(arr).filter(item => item.name === "Andalo" || item.name === "Monte Bondone"))
        .then(vids => {
            let videos = vids.map((vid, i) =>{
              let cam = Object.values(vid.cams);
              return (
                <div className="video" key="{ cam[i].name }">
                  <p className="date">{new Date().getDate()}-{new Date().getMonth() + 1}-{new Date().getFullYear()}</p>
                  <h2>{ vid.name }</h2>
                  <video width="320" height="240" controls>
                    <source src={ cam[i].url } />
                  </video>
                  <video width="320" height="240" controls>
                    <source src={ cam[i+1].url } />
                  </video>
                </div>
              )
            })
           this.setState({ videos: videos});
        })
        .catch(err => {
            return (
                <h1>Ooops, some error: { err }</h1>
            );
        });
    }
    
    render() {
        return !this.state.videos.length ? 
            (<main className="loginContainer">
               <h1>Loading</h1>
             </main>) :
        (
            <main className="container">
              { this.state.videos }
            </main>
        )
    }
}

export default SkiCam;

