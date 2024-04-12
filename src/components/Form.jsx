import { Dropdown, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function SignInForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Data to send to the server
        const formData = {
            username: username,
            password: password,
            role: role,
        };
        
        // Sending a POST request to the server's /auth/signup endpoint
        fetch('http://localhost:3001/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
                // Parse the JSON response from the server
                return response.json();
            } else {
                // Handle error here
                console.error('Error submitting form');
                throw new Error('Network response was not ok');
            }
        })
        .then((data) => {
            // Handle the JSON data returned from the server
            props.setUserData({
                role: role,
                username: username,
                password: password,
                token: data.token
            })
            // You can use the data object as needed here
            // For example, display a success message to the user
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle error
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDropdown">
                <Form.Label>User Role</Form.Label>
                <Dropdown onSelect={(eventKey) => setRole(eventKey)} required>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {role || 'Select a role'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="Client">Client</Dropdown.Item>
                        <Dropdown.Item eventKey="Practitioner">Practitioner</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>
    );
}

export default SignInForm;
