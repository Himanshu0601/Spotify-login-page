let Form = () => {
    return (
        <div className="main-body">
            <div className="container1">
                <div></div>
                <div>Sign up for free to start listening.</div>
                <div className="button"><div></div>
                    <div></div>Sign up with Facebook</div>
                <div className="button"><div></div>
                    <div></div>Sign up with Google</div>
                <div>
                    <div><hr /></div>
                    <div>or</div>
                    <div><hr /></div>
                </div>
            </div>

            <form className="container2">
                <h3>Sign up with your email address</h3>
                <div>
                    <div>What's your email?</div>
                    <input type="email" placeholder="Enter your email." />
                </div>
                <div>
                    <div>Create a password</div>
                    <input type="password" placeholder="Create a password." />
                </div>
                <div>
                    <div>What should we call you?</div>
                    <input type="text" placeholder="Enter a profile  name." />
                    <div>This appears on your profile.</div>
                </div>
                <div>What's your date of birth?</div>
                <div>
                    
                    <div>
                        <div> <div>Month</div>
                           <select >
                            <option value="">Months</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                           </select>
                            </div>
                        <div>
                        <div>Day</div>
                        <input type="text" placeholder="DD" />
                        </div>
                        <div>
                        <div>Year</div>
                            <input type="text" placeholder="YYYY" />
                        </div>
                    </div>
                </div>
                <div>
                    <div>What's your gender?</div>
                   <div>
                    <input type="radio" name="gender" id="" />Male
                    <input type="radio" name="gender" id="" />Female
                    <input type="radio" name="gender" id="" />Non-binary
                    <input type="radio" name="gender" id="" />Other
                    <input type="radio" name="gender" id="" />Prefer not to say
                    </div>
                </div>
                <div>
                    <input type="checkbox" />
                    <div>Share my registration data with Spotify's content providers for marketing purposes.</div>
                </div>
                <div>
                    <p>By clicking on sign-up, you agree to Spotify's  <a href="https://www.spotify.com/us/legal/end-user-agreement/">Terms and Conditions of Use</a>.
                    </p>
                    <p>To learn more about how Spotify collects, uses, shares and protects your personal data, please see <a href="https://www.spotify.com/us/legal/privacy-policy/">Spotify's Privacy Policy</a>. </p>
                </div>
                <div>
                <button>Sign up</button>
                <div>Have an account? <a href="https://accounts.spotify.com/en/login?creation_point=https%3A%2F%2Fwww.spotify.com%2Fin-en%2F&continue=https%3A%2F%2Fopen.spotify.com%2F%3Fflow_id%3Dd55ec553-5093-4b82-ba04-c6f848fe31b3%253A1688371216&flow_id=d55ec553-5093-4b82-ba04-c6f848fe31b3%3A1688371216&_gl=1*1v88yu1*_gcl_au*NDU5NzEzNzM1LjE2ODQ0MTg0OTM.">Log in</a></div>
                </div>
            </form>















        </div>
    )

}

export default Form;