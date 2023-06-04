import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Portfolio: NextPage = () => {
	const router = useRouter()
	const profolioId = router.query.portfolioId
	return <h1>"""""""""""index {profolioId}</h1>
}

export default Portfolio
