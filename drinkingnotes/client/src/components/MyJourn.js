import React, {Component} from 'react';
import tearecord from './apis/tearecord'



class MyJour extends Component{


   constructor(props){
       super(props)
       this.state = {
        teaName: '',
        vessel: '',
        aroma: '',
        head: '',
        body: '',
        tail: '',
        comments:''
    }
    this.onInputChange = this.onInputChange.bind(this)
   }

   
   

    onInputChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
    })    
    }

    onSubmitHandler = (e) =>{
        e.preventDefault();

        const teaName = this.state.teaName;
        const vessel = this.state.vessel;
        const aroma = this.state.aroma;
        const head = this.state.head;
        const body = this.state.body;
        const tail = this.state.tail;
        const comments = this.state.comments;

        tearecord.post('/myjourn',{teaName,vessel,aroma,head,body,tail,comments})
            .then(response => console.log(response))
            .catch(error => console.error)


        // this.setState({
        //     teaName: '',
        //     vessel: '',
        //     aroma: '',
        //     head: '',
        //     body: '',
        //     tail: '',
        //     comments:''
        // })
    };




    render(){

        

        return(
            <div>
                <div className= "ui centered container">
                
                    <div className="ui large header center aligned">Tea Notes</div>
                                 

                <div className="content">
                    <form onSubmit = {this.onSubmitHandler}>
                        < div className = "ui vertical segment">
                            <h3 className="ui  header" > Name of Tea: </h3>
                                <input type="text" name="teaName" value= {this.state.teaName} onChange = {this.onInputChange}/>
                                <br />
                            <h3 className="ui header"> What brewing vassel did you used?: </h3>
                                <select name="vessel" value = {this.state.vessel} onChange = {this.onInputChange}>
                                    <option value="gaiwan">Gaiwan</option>
                                    <option value="teapot">Teapot</option>
                                    <option value="brewingMug">Just a Mug</option>
                                    <option value="other">I brew my own way</option>
                                </select>
                            <br />
                        </div>

                        < div className = "ui vertical segment">
                            <h3 className="ui header"> Aroma: What is the dominant smell of the tea? </h3>
                            
                            <select name="aroma" value = {this.state.aroma} onChange = {this.onInputChange}>
                                <option value="Animal/Fire">Animal/Fire</option>
                                <option value="Spicy">Spicy</option>
                                <option value="Fruity">Fruity</option>
                                <option value="Marine">Marine</option>
                                <option value="Mineral">Mineral</option>
                                <option value="Spicy">Spicy</option>
                                <option value="Earthy">Earthy</option>
                                <option value="Herbal">Herbal</option>
                                <option value="Floral">Floral</option>
                                <option value="Sweet">Sweet</option>
                            </select>

                            <h3 className="ui header">Testing Notes: How would you described the flavor profile?</h3>
                            
                            <div className="ui tiny header">Head Notes: What is your first impression?</div>
                            
                                <select name="head" value = {this.state.head} onChange = {this.onInputChange}>
                                    <option value="Animal/Fire">Animal/Fire</option>
                                    <option value="Spicy">Spicy</option>
                                    <option value="Fruity">Fruity</option>
                                    <option value="Marine">Marine</option>
                                    <option value="Mineral">Mineral</option>
                                    <option value="Spicy">Spicy</option>
                                    <option value="Earthy">Earthy</option>
                                    <option value="Herbal">Herbal</option>
                                    <option value="Floral">Floral</option>
                                    <option value="Sweet">Sweet</option>
                                </select>
                            
                            <div className="ui tiny header">Body Notes: What is the overall character of the tea? </div>
                                <select name="body" value = {this.state.body} onChange = {this.onInputChange}>
                                    <option value="Animal/Fire">Animal/Fire</option>
                                    <option value="Spicy">Spicy</option>
                                    <option value="Fruity">Fruity</option>
                                    <option value="Marine">Marine</option>
                                    <option value="Mineral">Mineral</option>
                                    <option value="Spicy">Spicy</option>
                                    <option value="Earthy">Earthy</option>
                                    <option value="Herbal">Herbal</option>
                                    <option value="Floral">Floral</option>
                                    <option value="Sweet">Sweet</option>
                                </select>
                            
                            <div className="ui tiny header">Tail Notes: What is the aftertaste?</div>
                                <select name="tail" value = {this.state.tail} onChange = {this.onInputChange}>
                                    <option value="Animal/Fire">Animal/Fire</option>
                                    <option value="Spicy">Spicy</option>
                                    <option value="Fruity">Fruity</option>
                                    <option value="Marine">Marine</option>
                                    <option value="Mineral">Mineral</option>
                                    <option value="Spicy">Spicy</option>
                                    <option value="Earthy">Earthy</option>
                                    <option value="Herbal">Herbal</option>
                                    <option value="Floral">Floral</option>
                                    <option value="Sweet">Sweet</option>
                                </select>

                            </div>

                            < div className = "ui hidden divider"> 
                            <h3 className="ui header"> How would you described your experience in your own words? </h3>
                            
                            <div className="field">
                                
                                <textarea name = 'comments'  value = {this.state.comments} onChange = {this.onInputChange}></textarea>
                            </div>
                            
                            
                            
                            
                            </div>
                        

                        <button> Submit</button>
                    </form>
                    </div>
                </div>

            </div>
        )


    }
}


export default MyJour