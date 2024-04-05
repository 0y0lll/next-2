import { Box, TextField, Button } from '@mui/material'

export default function Add() {
	return (
		<Box
			component="form"
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 18,
			}}
		>
			<TextField
				required
				fullWidth
				id="outlined-required"
				label="Title"
			/>

			<TextField
				required
				multiline
				fullWidth
				rows={5}
				id="outlined-multiline-static"
				label="Multiline"
			/>

			<Button variant="contained" fullWidth>
				Add
			</Button>

			<Button variant="outlined" fullWidth>
				Cancel
			</Button>
		</Box>
	)
}
