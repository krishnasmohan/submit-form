import React,{useState} from "react"


function Componenets(){

    const [formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        query:'',
        message:'',
        consent:''
    });

    const [error,setError] = useState({})

    function updateForm(event){
        
        setFormData(()=>({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }
    let err = {};
    const validate = () => {

        if(formData.firstName === ''){
            err.firstName = 'First name is required';
        }
        if(formData.lastName === ''){
            err.lastName = 'Last name is required';
        }
        if(formData.email === ''){
            err.email = 'Email is required';
        }else{
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!regex.test(formData.email)){
                err.email = 'Valid email id required'
            }
        }
        if(formData.query === ''){
            err.query = 'Quary is required';
        }
        if(formData.message === ''){
            err.message = 'Message is required';
        }
        if(formData.consent === ''){
            err.consent = 'Consent is required';
        }
        setError({...err});
        
        return Object.keys(err)<1;
    }
    
    const handleSubmmit=(e)=>{
        e.preventDefault();
        let formValid = validate()
        if(formValid){
            alert('Form submitted')
        }
    }

    return(
        <div>
            <div className="container">
                <div className="sub-container">
                    <div className="form-container">
                        <div className="submit-form-container">
                            <h1>Contact Us</h1>
                            <form action="">
                                <div className="submit-form">
                                    <div>
                                        <label htmlFor="firstName" className="info">First Name <span className="star-mark"> * </span></label>
                                        <input type="text" name="firstName" className="input name" onChange={updateForm} />
                                        <span className="error">{error.firstName}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="info">Last Name <span className="star-mark"> * </span></label>
                                        <input type="text" name="lastName" className="input name" onChange={updateForm} />
                                        <span className="error" >{error.lastName}</span>
                                    </div>
                                </div>
                                <div className="info-container">
                                    <label htmlFor="email" className="info">Email Address <span className="star-mark">*</span></label>
                                    <input type="text" name="email" className="input  email" onChange={updateForm} />
                                    <span className="error">{error.email}</span>
                                </div>
                                <label htmlFor="firstName" className="info">Query Type <span className="star-mark"> * </span></label>
                                <div className="submit-form">
                                    <div>
                                        <div className="query-type">
                                            <input type="radio" name="query" onChange={updateForm} />
                                            <p>General Enquiry</p>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="query-type">
                                            <input type="radio" name="query" onChange={updateForm} />
                                            <p>Support Request</p>
                                        </div>
                                    </div>
                                </div>
                                <span className="error">{error.query}</span>
                                <div className="info-container">
                                    <label htmlFor="email" className="info">Message <span className="star-mark">*</span></label>
                                    <input type="text" name="message" className="message" onChange={updateForm} />
                                    <span className="error">{error.message}</span>
                                </div>
                                <div className="consent">
                                    <input type="checkbox" name="consent" onChange={updateForm} />
                                    <p>I consent to being contacted by the team <span className="star-mark">*</span></p>
                                    <span className="error">{error.consent}</span>
                                </div>
                                <button type="button" onClick={handleSubmmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Componenets