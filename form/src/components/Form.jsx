import React from 'react'

function Form() {
    const [formData, setFormData]=React.useState({
        showPassword:false,
    })
    const handleChange = (e) => {
        const inputName =e.target.name
        if(e.target.type==='checkbox'){
            console.log(e.target.value,e.target.checked);
            setFormData({
                ...formData,
                [inputName]: e.target.checked,
            });
        }
        else if(e.target.type==='file'){
            setFormData({
                ...formData,
                [inputName]: e.target.files,
            });
        }
            else{
                setFormData({...formData,
                    [inputName]:e.target.value,});
                
            }
        
    };
    const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(e)
    }
    return (
        <div className="sform">
            Form
            <form onSubmit={handleSubmit} className="form">

                <div>
                    <label>Username</label>
                    <input type="text" name="username" onChange={handleChange} />
                </div>
                <div>
                    <label >Password</label>
                    <input type={formData.showPassword ? "text":"password"} name="password" onChange={handleChange}/>
                </div>
                <div>
                    <input type="checkbox" name="showPassword" onChange={handleChange}/>
                    <label >Show Password</label>
                </div>
                <div>
                    <label> Age</label>
                    <input type="number" name="age" onChange={handleChange}/>
                </div>
                <div>
                    <label>DOB</label>
                    <input type="date" name="date" onChange={handleChange}/>
                </div>
                <div>
                    <label>Resume</label>
                    <input type="file" name="resume" onChange={handleChange}/>
                </div>
                <div>
                    <input type="submit"  />
                </div>
            </form>

        </div>
    )
}

export default Form