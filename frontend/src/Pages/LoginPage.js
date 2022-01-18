import React from 'react';
import { Link, Grid, TextField, Button, InputAdornment, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';


const LoginPage = () => {
	return (
		<Grid container style={{ minHeight: '97vh' }}>
			<Grid
				container
				item
				xs={12}
				sm={6}
				alignItems="center"
				direction="column"
				justify="space-between"
				style={{ padding: 10 }}
			>
				<div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 200 }}>
					<div style={{ height: 100}} />
					<Typography variant='h4' color=
					'burlywood' fontFamily='Monospace' fontWeight='bold' >SRI LAKSHMI HEAVENS PG</Typography>
					<TextField
						variant="standard"
						label="Username"
						margin="normal"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircle />{' '}
								</InputAdornment>
							)
						}}
					/>
					<TextField
						variant="standard"
						label="Password"
						type="password"
						margin="normal"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LockIcon />
								</InputAdornment>
							)
						}}
					/>
					<div style={{ height: 20 }} />
					<Button type="submit" color="primary" size="small" variant="contained" style={{ width: '30%' }}>
						<Link href="/home" color="inherit" underline="none">
							Login
						</Link>
					</Button>
				</div>
			</Grid>
		</Grid>
	);
};

export default LoginPage;