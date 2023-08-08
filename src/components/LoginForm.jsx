import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

//Get your ReCAPTCHA Api Key from => "google.com/recaptcha/admin/create"
const myCaptchaKey = "YOUR_RECAPTCHA_API_KEY"

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState('');
    

  const handleLogin = () => {
    if (recaptchaValue) {
      // Perform login logic here
      console.log('Logged in');
    } else {
      console.log('Please complete the reCAPTCHA.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <div className="w-72">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ReCAPTCHA
          sitekey= {myCaptchaKey}
          onChange={(value) => setRecaptchaValue(value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded mt-4"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
