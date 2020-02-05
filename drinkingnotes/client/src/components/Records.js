import React, {Component} from 'react';
import tearecord from './apis/tearecord'



class Record extends Component{

    state = {teaList:[]}

    onEditHandler = (tea) =>{
        this.props.history.push("/update")
        let idx = this.state.teaList.findIndex(x => x.primary_key === tea.tea.primary_key)

        let index = idx + 1    

    }

    onClickHandler  = () =>{
        this.props.history.push("/myjourn")
    }

    onDeleteHandler = (tea) =>{
        let idx = this.state.teaList.findIndex(x => x.primary_key === tea.tea.primary_key)

        let index = idx + 1    

       
        tearecord.delete(`delete/${index}`)
            .then(res => {
                console.log(res.data);
            }).catch(ex => {
                console.log(ex.data)
            })



    }

     
  
    onSeeList = () =>{
        console.log('this button works')
        
        tearecord.get('/record')
            .then(res => {
                console.log(res)
                this.setState({teaList:res.data})
            })
            .catch(error => console.log(error));
            
    }

    render(){
   
       const{teaList} = this.state

        return( 
            <div >
            <h2 className ="ui header">Click the button below to create a note</h2>
            <button onClick= {this.onClickHandler}> Create a new note!</button>        
            <h2 className = "ui header"> Click the button to view all of the previous records</h2>
            <button onClick={this.onSeeList}>View Previous Records</button>
            {teaList.map(tea =>
               <div className= "ui segment grid" key = {tea.primary_key}>
                   <div className = "fourteen wide colum">
                    <div className = "ui header">{tea.tea_name} </div>
                    <b>I used a</b> <big>{tea.brew_vessel} </big><br/>
                    <b>The aroma was </b> <big> {tea.aroma}</big> <br/>
                    <b>The head was </b> <big>{tea.head}</big> <br/> 
                    <b>The main body was</b> <big>{tea.body} </big><br/>
                    <b>The aftertaste was</b> <big>{tea.tail} </big><br/> <br/>                   
                    Some observations about this tea or drinking experience: <br/>
                    {tea.notes}
                   </div>
                   <div className="ui two wide colum"> 
                    <div className="ui large buttons">
                        <button className ="ui button right floated colum">Edit</button>
                        <div className ="or"></div>
                        <button onClick={() => this.onDeleteHandler({tea})} className="ui button right floated colum">Delete</button>
                  </div>
                </div>

               </div> )}

            </div>
        )      


    }


}


export default Record