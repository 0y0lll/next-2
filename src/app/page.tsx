import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

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
						src="/images/DSCF3120.jpg"
						alt="Intro image"
						width={600}
						height={338}
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
