import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Type } from "typescript";

export default function ServerError() {

    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as Type

    return (
        <Container component={Paper}>
            {/* {
                Object.entries(state).map(([key, value]) => {
                    console.log(key);
                    console.log(value);
                })
            } */}
            {Object.entries(state).length > 0 ? (
                <>
                    <Typography variant='h3' color='error' gutterBottom>{Object.entries(state).at(0)}</Typography>
                    <Divider />
                    <Typography>
                        {Object.entries(state).at(2)}
                    </Typography> 
                </>) : (
                <Typography variant='h5' gutterBottom>Server Error</Typography>)
            }
            <Button onClick={() => {navigate("/catalog")}}>Go back to the store</Button>
        </Container>
    )
}