import React, { Component } from 'react';
import 'bootstrap';
import TrainListService from '../services/TrainListServices';

class TrainList extends Component {
  constructor(props){
    super(props)
    this.state={
      trains:[]
    }
   
  }
 

  componentDidMount(){
    TrainListService.getList().then((res)=>{
this.setState({trains:res.data});
    });
}


    render() {
        return (
            <>
            <div className='box_movie'>
               
            <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> TrainID </th>
              <th> Train Name </th>
              <th> Source </th>
              <th> Destination </th>
            </tr>
          </thead>
        <tbody>
            
        
        {
        this.state.trains.map(
          train =>
          <tr key={train.no}>
            <td>{train.id}</td>
            <td>{train.name}</td>
            <td>{train.source}</td>
            <td>{train.destination}</td>
          </tr>
        )
}
        </tbody>
        </table>
            </div>
            </>
        );
}
}
export default TrainList;