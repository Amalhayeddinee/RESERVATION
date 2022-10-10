
import React, { Component } from 'react'
import instance from '../firebase/instance';
import ResultatAdd from './ResultatAdd'
import ResultatList from './ResultatList';

export default class Resultat extends Component {
     state={
        name:"",
        unit:"",
        grade:"",
        results:[],

     };

     componentDidMount() {
    
          instance.get("/result.json").then((response) => {
       
            const fetchData=[]
            for(let key in response.data){
                fetchData.push({...response.data[key],id:key})
            }
             this.setState({
                results:fetchData
                
             })
             
          })}

     handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name]:e.currentTarget.value
        })
     }
     handlePost=(e)=>{
        e.preventDefault()
      const data={
        name:this.state.name,
        unit:this.state.unit,
        grade:this.state.grade
      }
      instance.post("/result.json",data).then((response)=>{
        console.log(response)

        
        const results = [
            ...this.state.results,
            { ...data, id: response.data.name },
          ];
           console.log(results)
  
          this.setState({
            results: results,
            name: "",
            unit: "",
            grade: "",
          });
      })
     }
    render(){
         const {name,unit,grade,results}=this.state
  return (
    <div className='container'>
      <ResultatAdd name={name} unit={unit} grade={grade} handleChange={this.handleChange} 
      handlePost={this.handlePost}/>
       <ResultatList
       results={results}
       />
    </div>
  )
}}
