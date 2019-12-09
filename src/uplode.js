import React, { Component } from 'react'
import axios from 'axios';

export default class Uplode extends Component {
    constructor (){
        super();
        this.onFileChange=this.onFileChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            image:''
        }
    }
    onFileChange = (e) =>{
        this.setState({
           image: e.target.files[0] 
        })

    }
    onSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('image',this.state.image)
        axios.post("http://localhost:5000/uploads", formData,{

        }).then(res=>{
            console.log(res.data)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
           
        )
    }
}
