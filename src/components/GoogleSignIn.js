import { GoogleLogin } from 'react-google-login';

const clientId = "492541872630-m4p6i45b3me650i6gf75dp82keing3vl.apps.googleusercontent.com";

    function Login() {
            const onSuccess = (res) => {
                console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
            }

            const onFailure = (res) => {
                console.log("LOGIN FAILED! res: ", res);
            }




        return(
            <div id="signInButton">
                <GoogleLogin
                    clientId={clientID}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'signle_host_origin'}
                    isSignedIn={true}
                />
            </div>
        )
    }