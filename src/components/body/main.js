import React, { Component } from 'react'

export default class Main extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      maxVideo: 4,
      biginfo: [],
      othervideo: [],
      currentVideo: 0
    };
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.currentVideo != this.state.currentVideo) {
      this.getInformation(this.state.currentVideo)
    }
  }

  componentDidMount() {
  
    fetch('https://ign-apis.herokuapp.com/videos').then(
      res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
      items: result,
          })
          console.log(result.data[0].assets[0]);
          this.getInformation(this.state.currentVideo);
        })
   
  }

  getInformation(currentVideo){
    var result=this.state.items;
    var sidevideos = [];
    for (var index = 0; index < this.state.items.data.length; index++) {
      if (index != currentVideo) {
        let htmlsegement =
          <>
            <div className="player" key={result.data[index].contentId}>
              <video >
                <source src={result.data[index].assets[0].url} type="video/mp4" />
              </video>
              <h4><a href='#'>'${result.data[index].metadata.title}'</a></h4>

            </div>
            <hr /></>;
        sidevideos.push(htmlsegement);
      }

    }
    this.setState({
      biginfo: <>
        <div className="bigscreen">
          <div className="player" key={result.data[currentVideo].contentId}>
            <video id="big-video" controls onEnded={this.nextVideo.bind(this)} src={result.data[currentVideo].assets[0].url }>
              <source type="video/mp4" />
            </video>
          </div>
          <h2 id="big-title">{result.data[currentVideo].metadata.title}</h2>
          <p id="big-desc">{result.data[currentVideo].metadata.description}</p>
        </div>
      </>,
      othervideo:sidevideos
    })
  }
  changeValue() {
    this.setState({
      maxVideo: 10
    })
  }
  reduceValue() {
    this.setState({
      maxVideo: 4
    })
  }
  nextVideo(){
    var number= this.state.currentVideo;
    if(number===this.state.items.data.length){
      number=0;
    }
    else{
      number++
    }
    this.setState({
      currentVideo:number
    })
  }
 

  render() {
    //const { error, isLoaded, items } = this.state;


    var biginfo = this.state.biginfo;
    var showmore;
 
    var max = this.state.maxVideo
    // var result = this.state.items
    // var currentVideo=this.state.currentVideo

    if (max === 4) {
      showmore = <button onClick={this.changeValue.bind(this)}>Load More</button>
    }
    else {
     showmore= <button onClick={this.reduceValue.bind(this)}>Load Less</button>
    }

    var otherinfo=[]
    for(var a=0;a<max;a++){
      otherinfo.push(this.state.othervideo[a])
    }

   


    return (
      <main>
        {biginfo}
        { 
        <div className="other-videos">
          {otherinfo}
          {showmore}
        </div> }

      </main>
    );


  }


  //     }

}


