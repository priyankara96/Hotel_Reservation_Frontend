import React, { Component } from 'react';
import axios from 'axios';
import { Button } from "antd";
import Sidebar from '../../components/Sidebar/Sidebar';

const Exercise = props => ( 
    <tr >
    <td > { props.exercise.name } </td> 
    <td > { props.exercise.name1 } </td> 
    <td > { props.exercise.birthday.substring(0, 10) } </td>
    <td > { props.exercise.gender } </td>
    <td > { props.exercise.nic } </td> 
    <td > { props.exercise.email } </td> 
    <td > { props.exercise.number } </td> 
    <td > { props.exercise.role } </td> 
    <td>
    <a href = { "/alledit/" + props.exercise._id } onclick="window.location.reload(true)" > Edit </a> &nbsp; | &nbsp;
    <a href = "/All_Data" style={{color:"red"}} onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a > 
    </td> 
    </tr>
)

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this) 
        this.handleSearchArea = this.handleSearchArea.bind(this);

        this.state = { exercises: [] };
    }

    componentDidMount() {
        axios.get('http://192.168.8.195:8280/users/getUsers')
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    deleteExercise(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:8000/CommonSignup/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                exercises: this.state.exercises.filter(el => el._id !== id)
            })
        }

    }

    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise = { currentexercise }
            deleteExercise = { this.deleteExercise }
            key = { currentexercise._id }
            />;
        })
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:8000/CommonSignup/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.name.includes(searchKey) || 
                props.name1.includes(searchKey) ||
                props.nic.includes(searchKey) ||
                props.role.includes(searchKey)
            )

            this.setState({ exercises: result })

        });

    }


    render() {
        return ( 
            <>
            <Sidebar />
            <div style={{marginLeft:"50px", marginRight:"50px", marginTop:"10px"}}>
            <Button href="/UserManagement" type="button" class="btn btn-outline-secondary" style={{marginLeft:"0px"}} > Back </Button>
            <div className = "row" >
            
                <div className = "col-lg-9 mt-2 mb-2" >
                <h3 > Details of all Users </h3> 
                </div > 

                    <div className = "col-lg-3 mt-2 mb-2" >

                        <input className = "form-control"
                        type = "search"
                        placeholder = "Search"
                        name = "searchQuery"
                        onChange = { this.handleSearchArea } >
                        </input> 

                    </div > 
            </div>


            <table className = "table">
            <thead className = "thead-light" >
            <tr>
            <th> First Name </th> 
            <th> Last Name </th> 
            <th> Birth Day </th> 
            <th> Gender </th> 
            <th> NIC </th> 
            <th> Email </th> 
            <th> TP </th> 
            <th> Role </th>
            <th > Actions </th> 
            </tr > 
            </thead> 
            <tbody > { this.exerciseList() } 
            </tbody> 
            </table>

            </div>
            </>
        )
    }
}