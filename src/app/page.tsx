import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import IntroImage from '/public/images/DSCF3120.jpg'

export default function Home() {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					gap: 12,
				}}
			>
				<Box>
					<h2 style={{ marginBottom: 18 }}>Hello World!</h2>
					<p>
						Aenean sit amet metus tincidunt, placerat velit at,
						ultricies turpis.
						<br />
						Etiam tempus sem eget tristique placerat.
					</p>
				</Box>

				<Box
					sx={{
						width: 480,
						height: 300,
						overflow: 'hidden',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Image
						src={IntroImage}
						alt="Intro image"
						style={{
							width: '100%',
							height: 'auto',
						}}
					/>
				</Box>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'right',
					gap: 2,
				}}
			>
				<Link href="/list" style={{ textDecoration: 'underline' }}>
					List
				</Link>
				<Link href="/add" style={{ textDecoration: 'underline' }}>
					Add
				</Link>
			</Box>
		</Box>
	)
}
