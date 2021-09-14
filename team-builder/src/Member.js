import './App.css';
import React from 'react'






export default function Memeber(props){

    const { values, update, submit } = props






    const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }

      const onChange = evt => {
        // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
        // a) pull the name of the input from the event object
        // b) pull the value of the input from the event object
        // c) use the `update` callback coming in through props
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
      }



    return(
        <form className='member-form' onSubmit={onSubmit}>
            <div className = 'member-inputs'>
                <label>Name: 
                    <input
                        type='text'
                        name='name'
                        placeholder="Enter your name."
                        onChange={onChange}
                        value={values.name}
                    />
                </label>
                <label>Age: 
                    <input
                        type='text'
                        name='age'
                        placeholder="Enter your age."
                        onChange={onChange}
                        value={values.age}
                    />
                </label>
                <label>Email:  
                    <input
                        type='email'
                        name='email'
                        placeholder="Enter your email."
                        onChange={onChange}
                        value={values.email}

                    />
                </label>
                <label>Phone: 
                    <input
                        type='text'
                        name='phone'
                        placeholder="Enter your phone number."
                        onChange={onChange}
                        value={values.phone}

                    />
                </label>
                <label>State
          
                    <select value={values.state} name="state" onChange={onChange}>
                        <option value=''>-- Select a State --</option>
                        <option value="MO">MO</option>
                        <option value="UT">UT</option>
                        <option value="NY">NY</option>
                        <option value="TX">TX</option>
                        <option value="CA">CA</option>
                        <option value="other">Other</option>
                    </select>
                </label>

                <label>Role
          
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value="TL">Team Leader</option>
                        <option value="MANAGER">Manager</option>
                        <option value="SUPERVISOR">Supervisor</option>
                        <option value="CEO">Ceo</option>
                        <option value="Junior">Junior Member</option>
                        <option value="Senior">Senior Member</option>
                    </select>

                <div className='submit'>
                 <button>submit</button>
                </div>

                </label>
            </div>
        </form>
    );
    



}