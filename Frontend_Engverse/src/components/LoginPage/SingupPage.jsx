import { Button, Container, makeStyles, TextField, Typography, Link } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { common } from '@material-ui/core/colors';
import { Alert } from '@material-ui/lab';
import { useEffect, useRef, useState } from 'react';
import ImageUpload from './ImageUpload';
import * as userActions from '../../actions/userActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import LoaderPage from '../LoadingPage';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#9e9e9e',
        padding: '15px',
        borderRadius: '5px'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(3, 0, 2),
        color: 'white',
        minWidth: 150,
        fontWeight: 900,
        boxShadow: '0px 2px 0px white',
        border: '1px double white',
        borderRadius: '10px',
        fontFamily: 'Gilroy, Arial, sans-serif',
        '&:focus': {
            boxShadow: '0px 2px 0px white',
        },
        '&:hover': {
            color: 'white',
            border: '1px double white',
            boxShadow: '0 3px 3px white',
        },
    },

    input: {
        color: 'white',
        borderColor: 'white',
        '& > fieldset': {
            borderColor: 'white'
        },
        '& > .MuiInputLabel-root': {
            color: 'white'
        }
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: common.white,
        },
    },
});

const SignUpPage = ({ user, error, onUserCreate, loader }) => {
    const classes = useStyles();
    const history = useHistory();
    const avatarRef = useRef(null);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const avatar = avatarRef.current !== null ? avatarRef.current[0] : null;
        onUserCreate(username, password, avatar);
    };

    useEffect(() => {
        if (user?.email) {
            history.replace('/login');
        }
    }, [user, history]);

    const onInputChange = (e) => {
        if (e.target.id === 'username') {
            setUserName(e.target.value);
        } else if (e.target.id === 'password') {
            setPassword(e.target.value);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5" style={{ color: 'white' }}>
                    Регистрация
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <ImageUpload ref={avatarRef} />
                    <ThemeProvider theme={theme}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            color="primary"
                            fullWidth
                            id="username"
                            label="пользовательский email"
                            autoFocus
                            classes={{
                                root: classes.input,
                            }}
                            value={username}
                            onChange={onInputChange}
                            InputProps={{
                                className: classes.input,
                                focused: classes.input,
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            color="primary"
                            fullWidth
                            label="пароль"
                            type="password"
                            id="password"
                            value={password}
                            onChange={onInputChange}
                            classes={{
                                root: classes.input,
                            }}
                            InputProps={{
                                className: classes.input,
                                focused: classes.input,
                            }}
                        />
                    </ThemeProvider>
                    <Button color="secondary" variant="outlined" className={classes.button} fullWidth type="submit">
                        Зарегистрироваться
                    </Button>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            history.push('/login');
                        }}
                    >
                        Страница логина
                    </Link>
                    {error && <Alert severity="error">{error}</Alert>}
                </form>
            </div>
            {!!loader && <LoaderPage />}
        </Container>
    );
};

const mapStateToProps = (state) => ({
    error: state.common.error,
    user: state.user,
    loader: state.ebook.loader,
});

const mapDispatchToProps = (dispatch) => ({
    onUserCreate: (username, password, avatar) => dispatch(userActions.createNewUser(username, password, avatar)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
